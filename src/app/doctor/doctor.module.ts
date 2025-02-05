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
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { CommModule } from '../shared/comm/comm.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { StatisticsChartComponent } from './statistics-chart/statistics-chart.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PatientsComponent,
    AppointmentsComponent,
    DocDashboardComponent,
    //DocTopbarComponent,
    DocTopCardComponent,
    TodaysAppointmentsComponent,
    DocProfileComponent,
    DoctorProfileComponent,
    StatisticsChartComponent,
    //DocTopbarComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatIconModule,
    MatSidenavModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    MatListModule,
    RouterModule,
    FormsModule,
    CommModule,
    MatMenuModule, // Ajoutez MatMenuModule ici
    MatButtonModule,
    Ng2GoogleChartsModule,
    MatToolbarModule
  ],
})
export class DoctorModule {}