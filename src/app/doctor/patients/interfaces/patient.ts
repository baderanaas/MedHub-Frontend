import { Medication } from 'src/app/patient/medications/interfaces/medication.interface';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  sexe: string;
  email: string;
  phone: string;
  height?: number;
  weight?: number;
  bloodType?: string;
  medications: Medication[];
  appointments?: { date: Date; session: number }[];
}
