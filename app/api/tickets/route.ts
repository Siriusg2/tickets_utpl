import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const tickets = await prisma.ticket.findMany({
    where: {
      deleted: null,
    },
  });

  tickets.forEach((ticket) => {
    ticket.createdAt = parseInt(ticket.createdAt.toString());
    ticket.deletedAt = ticket.deletedAt
      ? parseInt(ticket.deletedAt.toString())
      : null;
  });
  return NextResponse.json({ tickets });
}

export async function POST(body: NextRequest, res: NextResponse) {
  const data = await body.json();
  const thereIsATicket = await prisma.ticket.findFirst({
    where: {
      student_dni: data.studentDni,
      nomenclature_id: data.nomenclatureId,
    },
  });
  if (thereIsATicket) {
    return NextResponse.json({
      error: "Ya existe un ticket para ese estudiante con ese asunto",
    });
  }

  const newTicket = await prisma.ticket.create({
    data: {
      createdAt: Date.now(),
      description: data.description,
      student_dni: data.studentDni,
      user_id: data.userId,
      nomenclature_id: data.nomenclatureId,
      priority_id: data.priorityId,
      status_id: data.statusId,
      assets_url_1: data.assetsUrl1,
      assets_url_2: data.assetsUrl2,
      assets_url_3: data.assetsUrl3,
      period_id: data.periodId,
    },
  });
  const responseTicket = {
    ...newTicket,
    createdAt: parseInt(newTicket.createdAt.toString()),
    deletedAt: newTicket.deletedAt
      ? parseInt(newTicket.deletedAt.toString())
      : null,
  };

  return NextResponse.json({ ...responseTicket });
}

export async function PATCH(body: NextRequest, res: NextResponse) {
  const data = await body.json();
  const therisTicket = await prisma.ticket.findFirst({
    where: {
      ticket_id: data.ticketId,
    },
  });

  if (!therisTicket) {
    return NextResponse.json({ error: "No existe el ticket" });
  }
  const newTicket = await prisma.ticket.update({
    where: {
      ticket_id: data.ticketId,
    },
    data: {
      description: data.description,
      nomenclature_id: data.nomenclatureId,
      priority_id: data.priorityId,
      status_id: data.statusId,
      assets_url_1: data.assetsUrl1,
      assets_url_2: data.assetsUrl2,
      assets_url_3: data.assetsUrl3,
      student_dni: data.studentDni,
    },
  });
  const responseTicket = {
    ...newTicket,
    createdAt: parseInt(newTicket.createdAt.toString()),
    deletedAt: newTicket.deletedAt
      ? parseInt(newTicket.deletedAt.toString())
      : null,
  };

  return NextResponse.json({ ...responseTicket });
}
