import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { TopCardComponent } from './components/top-card/top-card.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    TopCardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
