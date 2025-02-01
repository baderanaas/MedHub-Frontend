import { Component, inject, OnInit } from '@angular/core';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css'],
})
export class TopCardComponent implements OnInit {
  data = inject(DataService);
  nextAppointment$ = this.data.getPatientNextAppointment();
  notPayed$ = this.data.getNotPayed();
  upcoming$ = this.data.getUpcomingAppointmentsNumber();
  upcoming = 0;
  topcard: any[] = [];
  notPayed = 0;
  updateTopCard() {
    this.topcard = [
      {
        bgcolor: 'danger',
        icon: 'fa-solid fa-calendar-alt',
        title: 'Upcoming Appointments',
        subtitle: `${this.upcoming}`,
      },
      {
        bgcolor: 'warning',
        icon: 'fa-solid fa-clock',
        title: 'Next Appointment',
        subtitle: `${this.nextAppointment.date}`,
      },
      {
        bgcolor: 'info',
        icon: 'fa-solid fa-dollar-sign',
        title: 'Pending Payments',
        subtitle: `${this.notPayed}`,
      },
      {
        bgcolor: 'info',
        icon: 'fa-solid fa-phone-volume',
        title: 'Emergency Contact Info',
        subtitle: '29419967',
      },
    ];
  }
  ngOnInit(): void {
    console.log(this.topcard);
    this.nextAppointment$.subscribe({
      next: (res: Appointment) => {
        this.nextAppointment = res;
        this.updateTopCard();
      },
    });
    this.notPayed$.subscribe({
      next: (res: number) => {
        this.notPayed = res;
        this.updateTopCard();
      },
    });
    this.upcoming$.subscribe({
      next: (res:any) => {
        this.upcoming = res;
        console.log('res' + res);
        this.updateTopCard();
      },
    });
  }

  nextAppointment: Appointment = {
    doctor: {
      username: '',
      firstName: '',
      lastName: '',
      matricule: 0,
      email: '',
      phone: 0,
      speciality: '',
      sexe: '',
      appointments: [],
    },
    status: '',
    payed: false,
    date: new Date(),
    session: 0,
  };
}
