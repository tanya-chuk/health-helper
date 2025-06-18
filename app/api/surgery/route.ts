import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const surgeryRecords = await prisma.operation.create({ data });
    return NextResponse.json(surgeryRecords);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
