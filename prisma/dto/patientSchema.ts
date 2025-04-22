export type BloodPressureDTO = {
  systolic: number;
  diastolic: number;
};

export type IllnessDTO = {
  case: string;
  category: string;
  age: number;
  year: number;
  notes?: string;
};

export type OperationDTO = {
  year: number;
  case: string;
};

export type MedicationIntakePeriodDTO = {
  start: string;
  end?: string;
};

export type MedicationDTO = {
  name: string;
  cause: string;
  periods: MedicationIntakePeriodDTO[];
};

export type FamilyHistoryRecordDTO = {
  person: string;
  case: string;
  category: string;
  notes: string;
};

export type AllergiesDTO = {
  household: string[];
  drug: string[];
};

export type BadHabitsDTO = {
  alcohol: boolean;
  smoking: boolean;
};

export type PatientDTO = {
  name: string;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  bloodPressure: BloodPressureDTO;
  illness: IllnessDTO[];
  operations: OperationDTO[];
  medications: MedicationDTO[];
  familyHistory: FamilyHistoryRecordDTO[];
  allergies: AllergiesDTO;
  badHabits: BadHabitsDTO;
  email: string;
  password: string;
};
