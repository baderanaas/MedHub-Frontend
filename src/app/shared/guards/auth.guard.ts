import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Api_Urls } from 'src/app/config/api-urls';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('token');
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate([Api_Urls.login]);
    return false;
  }
};
