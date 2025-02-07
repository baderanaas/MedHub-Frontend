import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Api_Urls } from 'src/app/config/api-urls';
import { AuthService } from '../services/auth.service';
import { routes } from 'src/app/config/routes';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuthenticated = !!localStorage.getItem('token');
  const role = authService.getRoleFromToken();
  if (isAuthenticated) {
    if (role == 'patient') {
      router.navigate([routes.patientDashboard]);
    }
    if (role == 'doctor') {
      router.navigate([routes.doctorDashboard]);
    }
    return true;
  } else {
    router.navigate([routes.login]);
    return false;
  }
};