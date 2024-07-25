import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const status = await prisma.status.findMany();
  return NextResponse.json({ status });
}
