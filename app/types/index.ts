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

export interface SurgeryBase {
  patientId: string;
  year: number;
  case: string;
}

export type Surgery = SurgeryBase & { id: string };
export type NewSurgery = SurgeryBase;

export interface MedicationIntakePeriodBase {
  start: string;
  end?: string;
}

export interface MedicationIntakePeriod extends MedicationIntakePeriodBase {
  id: string;
}

export interface MedicationBase {
  patientId: string;
  name: string;
  cause: string;
  period: MedicationIntakePeriodBase;
}

export type Medication = Omit<MedicationBase, 'period'> & {
  id: string;
  period: MedicationIntakePeriod;
};

export type NewMedication = MedicationBase;

export interface FamilyHistoryRecordBase {
  patientId: string;
  case: string;
  relative: Relative;
  category?: string;
  notes?: string;
}

export type FamilyHistoryRecord = FamilyHistoryRecordBase & { id: string };
export type NewFamilyHistoryRecord = FamilyHistoryRecordBase;

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
  birthDate: Date;
  age: number;
  height: number;
  weight: number;
  bloodPressure: BloodPressure;
  illness: Array<Illness>;
  surgeries: Array<Surgery>;
  medications: Array<Medication>;
  familyHistory: Array<FamilyHistoryRecord>;
  allergies: Allergies;
  badHabits: BadHabits;
  email: string; // TO-DO перенести в user
  password: string; // TO-DO перенести в user
}

export interface Relative {
  id: string;
  value: string;
  name: string;
  order?: number;
}
