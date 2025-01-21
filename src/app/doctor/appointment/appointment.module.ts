import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppointmentModule,
    AppointmentComponent,
  ],
})
export class AppointmentModule {}
