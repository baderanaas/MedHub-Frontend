import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from '../layouts/doctor-layout/doctor-layout.component';
import { authGuard } from '../shared/guards/auth.guard';
import { roleGuard } from '../shared/guards/role.guard';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';

const routes: Routes = [{
    path: 'doctor',
    component: DoctorLayoutComponent,
    data: { role: 'doctor' },
    // canActivate: [authGuard, roleGuard],
    children: [
      {
        path: 'dashboard',
        component: DocDashboardComponent,
        title: 'Dashboard',
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
