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

export type SurgeryDTO = {
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
  relative: RelativeDTO;
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

export type RelativeDTO = {
  id: string;
  name: string;
  value: string;
  order?: number;
};

export type PatientDTO = {
  name: string;
  birthDate: string;
  height: number;
  weight: number;
  bloodPressure: BloodPressureDTO;
  illness: IllnessDTO[];
  surgeries: SurgeryDTO[];
  medications: MedicationDTO[];
  familyHistory: FamilyHistoryRecordDTO[];
  allergies: AllergiesDTO;
  badHabits: BadHabitsDTO;
  email: string;
  password: string;
};
