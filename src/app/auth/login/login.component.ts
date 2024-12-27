import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginDto } from './Dto/login-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  user: LoginDto = {
    email: '',
    password: '',
  };
  login(user: LoginDto) {
    this.authService.login(user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        console.log('logged successfully', res);
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
