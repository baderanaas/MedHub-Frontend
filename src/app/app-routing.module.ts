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
import { AppComponent } from './app.component';

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
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    loadChildren: () =>
      import('./doctor/doctor.module').then((m) => m.DoctorModule),
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: '',
    component: AppComponent,
    canActivate: [authGuard],
    pathMatch: 'full',
  },

  { path: '**', redirectTo: 'unauthorized' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
