import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DocumentComponent } from './document/document.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';


@NgModule({
  declarations: [
    DocumentComponent,
    DoctorsComponent,
    PatientAppointmentsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
