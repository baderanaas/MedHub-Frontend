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
import { MatIconModule } from '@angular/material/icon';
import { MedicationsComponent } from './medications/medications.component';
import { SessionLabelPipe } from '../shared/pipes/session-label.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestsComponent } from './requests/requests.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { CommModule } from '../shared/comm/comm.module';

@NgModule({
  declarations: [
    DocumentComponent,
    DoctorsComponent,
    PatientAppointmentsComponent,
    MedicationsComponent,
    //SessionLabelPipe,
    RequestsComponent,
    //SessionLabelPipe,
    PatientProfileComponent,


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
    CommModule,
    
  ]
})
export class PatientModule { }
