import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const familyHistory = await prisma.familyHistoryRecord.create({
      include: {
        relative: true,
      },
      data: {
        category: 'none',
        notes: 'none',
        case: data.case,
        patient: {
          connect: {
            id: data.patientId,
          },
        },
        relative: {
          connect: {
            id: data.relative.id,
          },
        },
      },
    });
    return NextResponse.json(familyHistory);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
