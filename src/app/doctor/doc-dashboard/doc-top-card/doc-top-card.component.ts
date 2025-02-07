import { Component, inject } from '@angular/core';
import { count, map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-doc-top-card',
  templateUrl: './doc-top-card.component.html',
  styleUrls: ['./doc-top-card.component.css'],
})
export class DocTopCardComponent {
  data = inject(DataService);
  TodayAppointments$ = this.data
    .getDoctorTodayAppointments()
    .pipe(map((appointments) => appointments.length));
  requests$ = this.data
    .getDoctorRequestedAppointments()
    .pipe(map((requests) => requests.length));
  todayNumber: number = 0;
  requests: number = 0;
  getTodayNumber() {
    this.TodayAppointments$.subscribe({
      next: (res) => {
        this.todayNumber = res;
        this.updateTopCard();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getRequests() {
    this.requests$.subscribe({
      next: (res) => {
        this.requests = res;
        this.updateTopCard();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getTodayNumber();
    this.getRequests();
  }
  updateTopCard() {
    this.topcard = [
      {
        bgcolor: 'danger',
        icon: 'fa-solid fa-clock',
        title: "Today's Appointments",
        subtitle: `${this.todayNumber}`,
      },
      {
        bgcolor: 'warning',
        icon: 'fa-solid fa-calendar-alt',
        title: 'Requests',
        subtitle: `${this.requests}`,
      },
      {
        bgcolor: 'warning',
        icon: 'bi bi-person-circle fs-3',
        title: 'This Month Income',
        subtitle: '240TND',
      },
      {
        bgcolor: 'info',
        icon: 'bi bi-person-circle fs-3',
        title: 'Total Patient Number',
        subtitle: '3',
      },
    ];
  }

  topcard = [
    {
      bgcolor: 'danger',
      icon: 'fa-solid fa-clock',
      title: "Today's Appointments",
      subtitle: '2',
    },
    {
      bgcolor: 'warning',
      icon: 'fa-solid fa-calendar-alt',
      title: "Today's Appointments",
      subtitle: '2',
    },
    {
      bgcolor: 'warning',
      icon: 'bi bi-person-circle fs-3',
      title: 'This Month Income',
      subtitle: '10000$',
    },
    {
      bgcolor: 'info',
      icon: 'bi bi-person-circle fs-3',
      title: 'Total Patient Number',
      subtitle: '800',
    },
  ];
}
