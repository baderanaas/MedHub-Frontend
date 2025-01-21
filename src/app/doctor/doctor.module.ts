import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { AppointmentsComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, DoctorRoutingModule],
})
export class DoctorModule {}
