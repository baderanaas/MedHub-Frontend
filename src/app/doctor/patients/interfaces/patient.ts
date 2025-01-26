import { Appointment } from "../../../patient/patient-appointments/interfaces/appointment";

export interface  Patient{
    id:number,
    username:string,
    firstName:String,
    lastName:String,
    email:string,
    phone:string,
    age:number,
    appointments:Appointment[]

}
