import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const nomenclatures = await prisma.nomenclature.findMany({
    where: {
      deleted: false,
    },
  });
  return NextResponse.json({ nomenclatures });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const thereIsNomenclature = await prisma.nomenclature.findFirst({
    where: {
      name: data.name,
    },
  });

  if (thereIsNomenclature) {
    return NextResponse.json({ error: "Ya existe esta nomencaltura" });
  }
  const newNomenclature = await prisma.nomenclature.create({
    data: {
      name: data.name,
    },
  });

  return NextResponse.json({ newNomenclature });
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  console.log(req.url);
  const [rest, id] = req.url.split("=");

  const deletedNomenclature = await prisma.nomenclature.update({
    where: {
      nomenclature_id: parseInt(id),
    },
    data: {
      deleted: true,
      deletedAt: Date.now(),
    },
  });
  if (deletedNomenclature === null) {
    return NextResponse.json({
      error: "No se pudo borrar la nomencatura, no existe el id",
    });
  }
  return NextResponse.json({ holis: "deletedNomenclature" });
}
