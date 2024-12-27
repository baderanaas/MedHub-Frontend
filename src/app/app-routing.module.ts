import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
    ],
  },
  {
    path: 'auth',
    component: FullLayoutComponent,
    children: [{ path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' }
    ],
  },
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
