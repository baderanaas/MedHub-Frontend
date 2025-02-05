import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { UpdateAppointmentDto } from 'src/app/shared/dto/update-appointment.dto';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css'],
})
export class PatientAppointmentsComponent implements OnInit {

  ngOnInit(): void {
    this.appointments$?.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  data = inject(DataService);
  appointments$ = this.data.getPatientAppointments();
  initialAppointments$ = this.appointments$;

  name: string = '';
  searchByName() {
    this.appointments$ = this.data.getDoctorAppointmentsByName(this.name);
  }
  reset() {
    if (this.name.trim() == '') {
      this.appointments$ = this.initialAppointments$;
    }
  }


  onAccept(id:number,status:string){
    let update:UpdateAppointmentDto={
      status: ''
    };
    update.status=status;
    this.data.updateAppointment(id,update).subscribe({
      next:(res)=>{
        console.log('done');
        this.appointments$=this.data.getPatientAppointments();
      }
    })
  }
}
