export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  sexe: string;
  email: string;
  phone: string;
  height?: number; // Optionnel si la valeur peut être absente
  weight?: number;
  bloodType?: string;
  diagnosedDiseases?: string[];
  allergies?: string[];
  appointments?: { date: string; time: string; description: string }[];
}
