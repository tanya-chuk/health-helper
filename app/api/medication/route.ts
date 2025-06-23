import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const medications = await prisma.medication.create({
      include: {
        period: true,
      },
      data: {
        name: data.name,
        cause: data.cause,
        patientId: data.patientId,
        period: {
          create: {
            start: data.period.start,
            end: data.period.end,
          },
        },
      },
    });
    return NextResponse.json(medications);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
