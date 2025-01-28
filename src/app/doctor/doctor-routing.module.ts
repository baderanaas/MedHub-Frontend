import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from '../layouts/doctor-layout/doctor-layout.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';

const routes: Routes = [{
    path: '',
    data: { role: 'doctor' },
    canActivate: [ roleGuard],
    children: [
      {
        path: 'dashboard',
        component: DocDashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'patient',
        component: PatientsComponent,
        title: 'Dashboard',
      },
      {
        path: 'patient-details/:id', 
        component: PatientDetailsComponent,
        title: 'Patient Details',
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
