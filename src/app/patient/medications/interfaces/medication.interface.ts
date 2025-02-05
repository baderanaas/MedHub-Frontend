export interface Medication {
  id: number;
  name: string;
  frequency: number;
  morning: boolean;
  midday: boolean;
  night: boolean;
  prescriptionRequired: boolean;
  sideEffects: string;
}
