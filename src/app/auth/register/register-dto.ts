import { Role } from "../enums/role-enum";


export interface RegisterDto {
  username: string;

  email: string;

  lastName: string;

  firstName: string;

  dateOfBirth?: Date;

  role: Role;

  phone: string;

  password: string;
}
