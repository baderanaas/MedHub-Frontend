import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoginDto } from 'src/app/auth/login/Dto/login-dto';
import { RegisterDto } from 'src/app/auth/register/register-dto';
import { Api_Urls } from 'src/app/config/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInSubject = new BehaviorSubject<boolean>(false);
  router = inject(Router);
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  getLogStatus(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
  constructor() {}
  http = inject(HttpClient);

  login(user: LoginDto): Observable<string> {
    this.loggedInSubject.next(true);
    return this.http.post<string>(Api_Urls.login, user);
  }
  logout() {
    this.loggedInSubject.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }

  register(user: RegisterDto): Observable<void> {
    return this.http.post<void>(Api_Urls.register, user);
  }
}
