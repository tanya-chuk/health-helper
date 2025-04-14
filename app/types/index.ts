export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

export interface Illness {
  case: string;
  category: string;
  age: number;
  year: number;
  notes?: string;
}

// TO-DO: переименовать в Surgery
export interface Operation {
  year: number;
  case: string;
}

export interface MedicationIntakePeriod {
  start: string;
  end?: string;
}

export interface Medication {
  name: string;
  cause: string;
  periods: Array<MedicationIntakePeriod>;
}

export interface FamilyHistoryRecord {
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
}
