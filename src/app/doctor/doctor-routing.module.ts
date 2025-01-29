import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from '../layouts/doctor-layout/doctor-layout.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [{
     path: '',
        children: [
          { path: 'dashboard', component: DocDashboardComponent,  },
          { path: 'appointments', component: AppointmentsComponent, },
          { path: 'patients', component: PatientsComponent, },
        ],
         canActivate: [authGuard, roleGuard],
        data: { role: 'doctor' },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
