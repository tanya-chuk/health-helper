export const patient = {
  name: "Осадчук Татьяна Александровна",
  birthDate: "20.02.1995",
  age: 30,
  height: 171,
  weight: 60,
  bloodPressure: {
    systolic: 120,
    diastolic: 80,
  },
  illness: [
    {
      case: "Мигрень с аурой",
      category: "neurology",
      debut: { age: 13, year: 2008 },
      notes: null,
    },
    {
      case: "Миопия средней степени",
      category: "ophthalmology",
      debut: { age: 10, year: 2005 },
      notes: "Проведена лазерная коррекция зрения в январе 2025",
    },
  ],
  operations: [
    { year: 2001, case: "Удаление аденоидов" },
    { year: 2025, case: "Лазерная коррекция зрения" },
    { year: 2025, case: "Установка и удаление Импланона" },
  ],
  medications: [
    {
      name: "cipralex",
      periods: [
        { start: "1.10.2022", end: "1.03.2024" },
        { start: "1.09.2024" },
      ],
      cause: "Тревожно-депрессивное расстройство, расстройство адаптации",
    },
  ],
  familyHistory: [
    {
      person: "mother",
      case: "Повышенный холестерин",
      category: "cholesterol",
    },
  ],
  allergies: null,
  badHabits: {
    alcohol: false,
    smoking: false,
    drugs: false,
  },
};
