import { Component, inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css'],
})
export class PatientAppointmentsComponent implements OnInit {
  data = inject(DataService);
  appointments$: Observable<Appointment[]> = this.data.getPatientAppointments() ?? new Observable<Appointment[]>();

  ngOnInit(): void {
    this.appointments$.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  /**
   * Simple function to toggle payment status.
   */
  togglePayment(appointment: Appointment): void {
    if (!appointment.payed) {
      appointment.payed = true; //  Can only switch to paid
    }
  }
}
