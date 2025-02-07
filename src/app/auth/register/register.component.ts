import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterDto } from './register-dto';
import { Role } from '../enums/role-enum';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/config/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  loginLink = `/${routes.login}`;
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  speciality = [
    'Cardiology',
    'Dermatology',
    'Gynecology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
    'Psychiatry',
    'Radiology',
    'Ophthalmology',
    'ENT',
    'Generalist',
    'Urology',
    'Dentistry',
    'Anesthesiology',
    'Emergency Medicine',
  ];

  register(user: RegisterDto) {
    this.authService.register(user).subscribe({
      next: (res) => {
        console.log('registered successfully ' + res);
        this.toastr.success('user added successfuly', 'success');
        this.toastr.success('user added successfuly', 'success');
        this.router.navigate([routes.login]);
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
    sexe: '',
    password: '',
  };
}