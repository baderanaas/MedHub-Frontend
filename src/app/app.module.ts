import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './patient/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopbarComponent } from './patient/topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardModule } from './patient/dashboard/dashboard.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { MatMenuModule } from '@angular/material/menu';
import { DocSidebarComponent } from './doctor/doc-sidebar/doc-sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { RequestInterceptor } from './shared/interceptors/request-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    PatientLayoutComponent,
    FullLayoutComponent,
    DoctorLayoutComponent,
    UnauthorizedComponent,
    DocSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    PatientModule,
    DoctorModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:RequestInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
