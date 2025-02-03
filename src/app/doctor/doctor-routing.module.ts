import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from '../layouts/doctor-layout/doctor-layout.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { DocNotesComponent } from './doc-notes/doc-notes.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';

const routes: Routes = [
  {
    path: '',
    data: { role: 'doctor' },
    canActivate: [roleGuard],
    children: [
      {
        path: 'dashboard',
        component: DocDashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'patients',
        component: PatientsComponent,
        title: 'Patients',
      },

      {
        path: 'docnote',
        component: DocNotesComponent,
        title: 'Doctor Notes',
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Appointments',
      },
      {
        path: 'profile',
        component: DocProfileComponent,
        title: 'Doctor Profile',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
