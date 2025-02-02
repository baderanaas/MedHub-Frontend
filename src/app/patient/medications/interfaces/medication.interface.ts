export interface Medication {
  name: string;
  frequency: number;
  morning: boolean;
  midday: boolean;
  night: boolean;
  prescriptionRequired: boolean;
  sideEffects: string;
}
