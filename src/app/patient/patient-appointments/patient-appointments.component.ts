import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

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
}
