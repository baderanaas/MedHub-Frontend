import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { TopCardComponent } from './components/top-card/top-card.component';
import { DashboardComponent } from './dashboard.component';
import { QuotesPopupComponent } from './components/quotes-popup/quotes-popup.component';
import { UpcomingAppointmentsComponent } from './components/upcoming-appointments/upcoming-appointments.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopCardComponent,
    DashboardComponent,
    QuotesPopupComponent,
    UpcomingAppointmentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
