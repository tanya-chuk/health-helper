export const patient = {
  name: "Полушубкина Ксения Романовна",
  birthDate: 793238400000, // Перенести обработку timestamp на сервер, отдавать строку с датой
  age: 30,
  height: 161,
  weight: 50,
  bloodPressure: {
    systolic: 120,
    diastolic: 80,
  },
  illness: [
    {
      case: "Мигрень с аурой",
      category: "neurology",
      debut: { age: 13, year: 2008 },
    },
    {
      case: "Миопия средней степени",
      category: "ophthalmology",
      debut: { age: 10, year: 2005 },
      notes: "Проведена лазерная коррекция зрения в январе 2022",
    },
    {
      case: "Гиперхолестеринемия",
      category: "cholesterol",
      debut: { age: 29, year: 2024 },
      notes: "Общий холестерин 6.7 ммоль/л, ЛПВН 2.7, ЛПНП 3.5, не-ЛПВП 3.9",
    },
  ],
  operations: [
    { year: 2001, case: "Удаление аденоидов" },
    { year: 2025, case: "Лазерная коррекция зрения" },
  ],
  medications: [
    {
      name: "Cipralex",
      periods: [
        // Перенести обработку timestamp на сервер, отдавать строку с датой
        { start: 1664582400000, end: 1709251200000 },
        { start: 1725148800000 },
      ],
      cause: "Тревожно-депрессивное расстройство",
    },
  ],
  familyHistory: [
    {
      person: "Мать",
      case: "Повышенный холестерин",
      category: "cholesterol",
      notes: "Прием статинов",
    },
  ],
  allergies: {
    household: ["береза", "пыль"],
    drug: [],
  },
  badHabits: {
    alcohol: false,
    smoking: false,
  },
};
