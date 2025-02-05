import { Doctor } from "../../doctors/interfaces/doctor";

export interface Appointment{
    id:number,
    doctor:Doctor,
    status:string,
    payed:boolean,
    date:Date
    session:number
}