import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DoctorRoutingModule } from './doctor-routing.module';

import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { DocSidebarComponent } from './doc-sidebar/doc-sidebar.component';
import { DocTopbarComponent } from './doc-topbar/doc-topbar.component';
import { DocNotesComponent } from './doc-notes/doc-notes.component';
import { DocTopCardComponent } from './doc-dashboard/doc-top-card/doc-top-card.component';
import { TodaysAppointmentsComponent } from './doc-dashboard/todays-appointments/todays-appointments.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { CommModule } from '../shared/comm/comm.module';

// Angular Material Modules
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PatientsComponent,
    AppointmentsComponent,
    DocDashboardComponent,
    DocTopbarComponent,
    DocNotesComponent,
    DocTopCardComponent,
    TodaysAppointmentsComponent,
    DocProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    CommModule
  ]
})
export class DoctorModule { }
