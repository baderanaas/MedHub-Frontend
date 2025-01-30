import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicationsComponent } from './medications/medications.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'appointments', component: PatientAppointmentsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'medications', component: MedicationsComponent },
    ],
    canActivate: [roleGuard],
    data: { role: 'patient' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
