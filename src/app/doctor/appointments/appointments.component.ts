import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/doctor/appointments/interfaces/appointments';
import { UpdateAppointmentDto } from 'src/app/shared/dto/update-appointment.dto';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  title = 'My Appointments';
  //upcomingAppointments: any[] = []; // Utilisez le modèle Appointment
  data=inject(DataService);

  upcomingAppointments$ = this.data.getDoctorUpcomingAppointments();
  ngOnInit(): void {
    this.upcomingAppointments$?.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  // loadUpcomingDoctorAppointments(): void {
  //   this.data.getDoctorUpcomingAppointments().subscribe(
  //     (data) => {
  //       this.upcomingAppointments = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching upcoming doctor appointments:', error);
  //     }
  //   );
  // }

  onActionSelected(appointment: Appointment, action: string): void {

  }



  rescheduleAppointment(appointmentId: number): void {
    console.log('Rescheduling appointment ID:', appointmentId);
    // Implémentez la logique pour reprogrammer le rendez-vous
  }

  

  

  onAccept(id:number,status:string){
    let update:UpdateAppointmentDto={
      status: ''
    };
    update.status=status;
    this.data.updateAppointment(id,update).subscribe({
      next:(res)=>{
        console.log('done');
        this.upcomingAppointments$=this.data.getDoctorUpcomingAppointments();
      }
    })
  }
}