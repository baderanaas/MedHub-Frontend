
export interface Patient{
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
  appointments?: { date: Date;     session:number  }[];
}