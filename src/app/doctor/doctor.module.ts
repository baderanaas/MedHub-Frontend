import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';


@NgModule({
  declarations: [
    PatientsComponent,
    AppointmentsComponent,
    DocDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
