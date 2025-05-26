export interface User {
  id: string;
  name: string;
  email: string;
}

export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

export interface Illness {
  id: string;
  case: string;
  category: string;
  age: number;
  year: number;
  notes?: string;
}

// TO-DO: переименовать в Surgery
export interface Operation {
  id: string;
  year: number;
  case: string;
}

export interface MedicationIntakePeriod {
  id: string;
  start: string;
  end?: string;
}

export interface Medication {
  id: string;
  name: string;
  cause: string;
  periods: Array<MedicationIntakePeriod>;
}

export interface FamilyHistoryRecord {
  id: string;
  person: string;
  case: string;
  category: string;
  notes: string;
}

export interface Allergies {
  household: string[];
  drug: string[];
}

export interface BadHabits {
  alcohol: boolean;
  smoking: boolean;
}

export interface Patient {
  id: string;
  name: string;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  bloodPressure: BloodPressure;
  illness: Array<Illness>;
  operations: Array<Operation>; // TO-DO: переименовать в Surgeries
  medications: Array<Medication>;
  familyHistory: Array<FamilyHistoryRecord>;
  allergies: Allergies;
  badHabits: BadHabits;
  email: string; // TO-DO перенести в user
  password: string; // TO-DO перенести в user
}
