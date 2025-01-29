import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DocumentComponent } from './document/document.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AddAppointmentComponent } from './dashboard/components/add-appointment/add-appointment.component';
import { MatIconModule } from '@angular/material/icon';
import { MedicationsComponent } from './medications/medications.component';
import { SessionLabelPipe } from '../shared/pipes/session-label.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    DocumentComponent,
    DoctorsComponent,
    PatientAppointmentsComponent,
    AddAppointmentComponent,
    MedicationsComponent,
    SessionLabelPipe,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PatientModule { }
