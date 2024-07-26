import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const periods = await prisma.period.findMany();
  return NextResponse.json({ periods });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const thereIsperiod = await prisma.period.findFirst({
    where: {
      name: data.name,
    },
  });

  if (thereIsperiod) {
    return NextResponse.json({
      error: "Ya existe un periodo con ese nombre",
    });
  }
  const newperiod = await prisma.period.create({
    data: {
      name: data.name,
      active: data.active,
      createdAt: Date.now(),
    },
  });

  return NextResponse.json({ newperiod });
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  console.log(req.url);
  const [rest, id] = req.url.split("=");

  const deletedperiod = await prisma.period.delete({
    where: {
      period_id: parseInt(id),
    },
  });
  if (deletedperiod === null) {
    return NextResponse.json({
      error: "No se pudo borrar el periodo, no existe el id",
    });
  }
  return NextResponse.json({ holis: "deletedperiod" });
}
