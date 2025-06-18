import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const illnessRecords = await prisma.illness.create({
      data: {
        ...payload,
        category: 'empty',
      },
    });
    return NextResponse.json(illnessRecords);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
