import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { routes } from 'src/app/config/routes';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const expectedRole = route.data['role'];
  const role = authService.getRoleFromToken();
  if (role == expectedRole) {
    return true;
  }
  router.navigate([routes.unAuthorized]);
  return false;
};
