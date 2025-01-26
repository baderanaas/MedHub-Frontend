import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { DocSidebarComponent } from './doc-sidebar/doc-sidebar.component';
import { DocTopbarComponent } from './doc-topbar/doc-topbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientsComponent,
    AppointmentsComponent,
    DocDashboardComponent,
    DocSidebarComponent,
    DocTopbarComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule
  ]
})
export class DoctorModule { }
