import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from '../layouts/doctor-layout/doctor-layout.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [{
     path: '',
        children: [
          { path: 'dashboard', component: DocDashboardComponent,  },
          //{ path: 'appointments', component: PatientAppointmentsComponent, },
          //{ path: 'doctors', component: DoctorsComponent, },
        ],
        // canActivate: [authGuard, roleGuard],
        data: { role: 'doctor' },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
