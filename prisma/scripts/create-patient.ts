import readline from 'readline';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { patientDTOSchema } from '../dto/zod';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prisma = new PrismaClient();

rl.question(
  '📝 Please insert JSON with patient data and press Enter:\n',
  async (input) => {
    try {
      const parsedInput = JSON.parse(input);
      const result = patientDTOSchema.safeParse(parsedInput);

      if (!result.success) {
        console.error('❌ Validation error:', result.error.format());
        process.exit(1);
      }

      const dto = result.data;
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      await prisma.patient.create({
        data: {
          name: dto.name,
          birthDate: new Date(dto.birthDate),
          age: dto.age,
          height: dto.height,
          weight: dto.weight,
          email: dto.email,
          password: hashedPassword,
          bloodPressure: { create: dto.bloodPressure },
          allergies: { create: dto.allergies },
          medications: {
            create: dto.medications.map((m) => ({
              name: m.name,
              cause: m.cause,
              periods: {
                create: m.periods.map((period) => ({
                  start: new Date(period.start),
                  end: period.end ? new Date(period.end) : null,
                })),
              },
            })),
          },
          illness: { create: dto.illness },
          familyHistory: { create: dto.familyHistory },
          operations: { create: dto.operations },
          badHabits: dto.badHabits,
        },
      });

      console.log('✅ Patient created successfully');
      rl.close();
    } catch (err) {
      console.error('❌ Error parsing JSON', err);
      rl.close();
      process.exit(1);
    }
  },
);
