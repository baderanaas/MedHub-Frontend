import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterDto } from './register-dto';
import { Role } from '../enums/role-enum';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr=inject(ToastrService);

  register(user: RegisterDto) {
    this.authService.register(user).subscribe({
      next: (res) => {
        console.log('registered successfully ' + res);
        this.toastr.success('user added successfuly','success');
        this.router.navigate(['auth/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  user: RegisterDto = {
    username: '',
    email: '',
    lastName: '',
    firstName: '',
    dateOfBirth: new Date(),
    role: Role.PATIENT,
    phone: '',
    password: '',
  };
}
