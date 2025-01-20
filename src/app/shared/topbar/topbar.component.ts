import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Api_Urls } from 'src/app/config/api-urls';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, OnChanges {
  title: string = '';
  @Input() selectedRoute = '';
  authService = inject(AuthService);
  router = inject(Router);
  ngOnChanges(): void {
    this.authService.getLogStatus().subscribe({
      next: (status: boolean) => {
        this.loggedIn = status;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    console.log(this.acr);
    if (this.acr.snapshot.title) {
      this.title = this.acr.snapshot.title;
    } else {
      console.log('empty');
    }
  }

  logout() {
    this.router.navigate([Api_Urls.login]);
    localStorage.removeItem('token');
  }
  loggedIn = true;
  acr = inject(ActivatedRoute);
}
