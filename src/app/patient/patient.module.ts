import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DocumentComponent } from './document/document.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { FormsModule } from '@angular/forms';
import { SessionLabelPipe } from '../shared/pipes/session-label.pipe'



@NgModule({
  declarations: [
    DocumentComponent,
    DoctorsComponent,
    PatientAppointmentsComponent,
    SessionLabelPipe  
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule

]
})
export class PatientModule { }
