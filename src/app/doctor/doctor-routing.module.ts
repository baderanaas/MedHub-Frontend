import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

const routes: Routes = [{
     path: '',
        children: [
          { path: 'dashboard', component: DocDashboardComponent,  },
          { path: 'appointments', component: AppointmentsComponent, },
          { path: 'patients', component: PatientsComponent, },
          {path:'profile',component:DoctorProfileComponent}
          
        ],
        //  canActivate: [authGuard, roleGuard],
        data: { role: 'doctor' },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
