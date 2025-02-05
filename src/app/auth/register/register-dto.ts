import { Role } from '../enums/role-enum';

export interface RegisterDto {
  username: string;

  email: string;

  lastName: string;

  firstName: string;

  dateOfBirth?: Date;

  role: Role;

  phone: string;

  sexe: string;

  speciality?: string;

  height?: number;

  weight?: number;

  bloodType?: string;

  password: string;

  location?:string;

}
