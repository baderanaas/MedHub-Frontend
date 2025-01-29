import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { DocSidebarComponent } from './doc-sidebar/doc-sidebar.component';
import { DocTopbarComponent } from './doc-topbar/doc-topbar.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DocTopCardComponent } from './doc-dashboard/doc-top-card/doc-top-card.component';
import { TodaysAppointmentsComponent } from './doc-dashboard/todays-appointments/todays-appointments.component';


@NgModule({
  declarations: [
    PatientsComponent,
    AppointmentsComponent,
    DocDashboardComponent,
    DocTopbarComponent,
    DocTopCardComponent,
    TodaysAppointmentsComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ]
})
export class DoctorModule { }
