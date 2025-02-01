import { Doctor } from "../../doctors/interfaces/doctor";

export interface Appointment {
    id: number;  // ✅ Fix missing ID issue
    doctor: Doctor;
    status: string;
    payed: boolean;
    date: Date;
    session:number
}
