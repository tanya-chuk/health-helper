import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.patient.create({
    data: {
      name: 'Киса Мурыса',
      age: 30,
      height: 171,
      weight: 60,
      birthDate: new Date('1995-02-20'),
      bloodPressure: {
        create: {
          systolic: 120,
          diastolic: 80,
        },
      },
      illness: {
        create: [
          {
            case: 'Мигрень с аурой',
            category: 'neurology',
            age: 13,
            year: 2008,
          },
          {
            case: 'Миопия средней степени',
            category: 'ophthalmology',
            age: 10,
            year: 2005,
            notes: 'Проведена лазерная коррекция зрения в январе 2022',
          },
          {
            case: 'Гиперхолестеринемия',
            category: 'cholesterol',
            age: 29,
            year: 2024,
            notes:
              'Общий холестерин 6.7 ммоль/л, ЛПВН 2.7, ЛПНП 3.5, не-ЛПВП 3.9',
          },
        ],
      },
      operations: {
        create: [
          { year: 2001, case: 'Удаление аденоидов' },
          { year: 2025, case: 'Лазерная коррекция зрения' },
        ],
      },
      medications: {
        create: [
          {
            name: 'Cipralex',
            cause: 'Тревожно-депрессивное расстройство',
            periods: {
              create: [
                {
                  start: new Date('2022-10-01'),
                  end: new Date('2024-03-01'),
                },
                {
                  start: new Date('2024-10-01'),
                },
              ],
            },
          },
        ],
      },
      familyHistory: {
        create: [
          {
            person: 'Мать',
            case: 'Повышенный холестерин',
            category: 'cholesterol',
            notes: 'Прием статинов',
          },
        ],
      },
      allergies: {
        create: {
          household: ['пыль', 'береза'],
          drug: [],
        },
      },
      badHabits: {
        alcohol: false,
        smoking: false,
      },
    },
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

  console.log('✅ Ready');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
