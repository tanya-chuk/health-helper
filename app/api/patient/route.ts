import { NextResponse, NextRequest } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';
import { differenceInYears } from 'date-fns';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('Missing id', { status: 400 });
  }

  try {
    const patient = await prisma.patient.findFirstOrThrow({
      where: { id },
      include: {
        bloodPressure: true,
        allergies: true,
        familyHistory: true,
        illness: true,
        operations: true,
        medications: {
          include: {
            periods: true,
          },
        },
      },
    });

    const patientWithAge = {
      ...patient,
      age: patient.birthDate
        ? differenceInYears(new Date(), patient.birthDate)
        : 0,
    };

    return NextResponse.json(patientWithAge);
  } catch (err: unknown) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === 'P2025'
    ) {
      return new NextResponse('Пациент не найден', { status: 404 });
    }
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}
