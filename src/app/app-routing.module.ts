import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './patient/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './shared/guards/auth.guard';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { DocDashboardComponent } from './doctor/doc-dashboard/doc-dashboard.component';
import { roleGuard } from './shared/guards/role.guard';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'auth',
    component: FullLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
    ],
  },
  {
    path: 'patient',
    component: PatientLayoutComponent,
    data: { role: 'patient' },
    canActivate: [authGuard, roleGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
    ],
  },
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    data: { role: 'doctor' },
    canActivate: [authGuard, roleGuard],
    children: [
      {
        path: 'dashboard',
        component: DocDashboardComponent,
        title: 'Dashboard',
      },
    ],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
