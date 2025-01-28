import { Component } from '@angular/core';
import { Patient } from './interfaces/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patients = [
    {username:"hello",firstName:"hassen",lastName:"hassen",email:"hassen@gmail.com",sexe:"male",phone:12345678},
    {username:"hello",firstName:"mohssen",lastName:"mohssen",email:"mohssen@gmail.com",sexe:"male",phone:12345978},
    {username:"hello",firstName:"houssin",lastName:"houssin",email:"houssin@gmail.com",sexe:"male",phone:12245678}
  ];
  openAppointmentModal(patient:Patient){
    console.log("hello");
    return patient
  }
}
