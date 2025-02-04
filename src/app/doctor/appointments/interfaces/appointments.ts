import { Doctor } from "src/app/patient/doctors/interfaces/doctor";
import { Patient } from "../../patients/interfaces/patient";
export interface Appointment{
    id:number,
    patient:Patient,
    doctor:Doctor,
    date:Date,
    session:number
}