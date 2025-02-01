import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../shared/guards/auth.guard';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';import { MedicationsComponent } from './medications/medications.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent,  },
      { path: 'appointments', component: PatientAppointmentsComponent, },
      { path: 'doctors', component: DoctorsComponent, },
      {path:'medications',component:MedicationsComponent},
      { path: 'history', component: PatientHistoryComponent },
    ],
    // canActivate: [ roleGuard],
    data: { role: 'patient' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
