import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { TopCardComponent } from './components/top-card/top-card.component';
import { DashboardComponent } from './dashboard.component';
import { QuotesPopupComponent } from './components/quotes-popup/quotes-popup.component';
import { UpcomingAppointmentsComponent } from './components/upcoming-appointments/upcoming-appointments.component';
import { FormsModule } from '@angular/forms';
import { SessionLabelPipe } from 'src/app/shared/pipes/session-label.pipe';
import { CommModule } from 'src/app/shared/comm/comm.module';



@NgModule({
  declarations: [
    TopCardComponent,
    DashboardComponent,
    QuotesPopupComponent,
    UpcomingAppointmentsComponent,
    //SessionLabelPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    CommModule
  ]
})
export class DashboardModule { }
