import { Appointment } from "../../patient-appointments/interfaces/appointment";

export interface Doctor{
    username:string,
    firstName:String,
    lastName:String,
    matricule:number;
    email:string,
    phone:number,
    speciality:string,
    sexe:string,
    appointments:Appointment[]

}