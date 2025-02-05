import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';


// interface Appointment {
//   doctorName: string;
//   specialty: string;
//   date: Date;
//   time: string;
// }

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent  implements OnInit{
  upcomingAppointments: any[] = [];
 // username = 'hassenhassen'; // Replace with dynamic username
  title:string=" Upcoming Appointments"

  constructor(private appointmentService: DataService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchNextWeekAppointments();
  }

  fetchNextWeekAppointments(): void {
    this.appointmentService.getNextWeekAppointments().subscribe({
      next: (data) => {
        this.upcomingAppointments = data;
      },
      error: (error) => {
        console.error('Error fetching next week appointments:', error);
        this.upcomingAppointments = [];
      }
    });
  }
  

  
}