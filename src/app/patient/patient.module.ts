import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DocumentComponent } from './document/document.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    DocumentComponent,
    DoctorsComponent,
    PatientAppointmentsComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    DashboardModule
  ]
})
export class PatientModule { }
