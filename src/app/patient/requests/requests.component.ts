import { Component, inject, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent {
  data = inject(DataService);
  requests$ = this.data.getPatientRequests();
  initialAppointments$ = this.requests$;

  name: string = '';
  searchByName() {
    this.requests$ = this.data.getDoctorAppointmentsByName(this.name);
  }
  reset() {
    if (this.name.trim() == '') {
      this.requests$ = this.initialAppointments$;
    }
  }
}
