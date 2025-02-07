import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { routes } from 'src/app/config/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-doc-topbar',
  templateUrl: './doc-topbar.component.html',
  styleUrls: ['./doc-topbar.component.css'],
})
export class DocTopbarComponent {
  title: string = 'MedHub';
    @Input() selectedRoute = '';
    user: string = '';
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
      const username = this.authService.getUserNameFromToken();
      if (username) {
        this.user = username;
      }
    }
  
    logout() {
      this.router.navigate([routes.login]);
      localStorage.removeItem('token');
    }
    loggedIn = true;
    acr = inject(ActivatedRoute);
  
}
