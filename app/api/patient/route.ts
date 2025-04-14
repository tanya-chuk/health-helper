import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const patients = await prisma.patient.findUnique({
    where: { id: 'cm9hdba3d0000mumsztewypp1' },
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
  return NextResponse.json(patients);
}
