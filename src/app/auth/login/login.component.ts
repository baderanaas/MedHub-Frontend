import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginDto } from './Dto/login-dto';
import { Router } from '@angular/router';
import { Api_Urls } from 'src/app/config/api-urls';
import { routes } from 'src/app/config/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  registerLink = routes.register;
  user: LoginDto = {
    email: '',
    password: '',
  };
  login(user: LoginDto) {
    this.authService.login(user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        console.log('logged successfully', res);
        const role = this.authService.getRoleFromToken();
        if (role == 'patient') this.router.navigate(['patient/dashboard']);
        if (role == 'doctor') this.router.navigate(['doctor/dashboard']);
      },
    });
  }
}
