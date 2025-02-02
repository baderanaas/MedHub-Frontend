import { Patient } from "../../patients/interfaces/patient";
export interface Appointment{
    id:number,
    patient:Patient,
    date:Date,
    session:number
}