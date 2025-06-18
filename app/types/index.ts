import { AlertColor } from '@mui/material';

export interface User {
  id: string;
  name: string;
  email: string;
}

export type SnackbarNames = 'networkError';

export interface Snackbar {
  name: SnackbarNames;
  open: boolean;
  message: string;
  severity: AlertColor;
  duration: number;
}

export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

export interface IllnessBase {
  patientId: string;
  case: string;
  category?: string;
  age: number;
  year: number;
  notes?: string;
}

export type Illness = IllnessBase & { id: string };
export type NewIllness = IllnessBase;

// TO-DO: переименовать в Surgery
export interface OperationBase {
  patientId: string;
  year: number;
  case: string;
}

export type Operation = OperationBase & { id: string };
export type NewOperation = OperationBase;

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
