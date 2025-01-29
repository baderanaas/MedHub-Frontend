import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AddAppointmentComponent} from '../add-appointment/add-appointment.component'
import { DataService } from 'src/app/shared/services/data.service';


interface Appointment {
  doctorName: string;
  specialty: string;
  date: Date;
  time: string;
}

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent  implements OnInit{
  upcomingAppointments: any[] = [];
  username = 'hassenhassen'; // Replace with dynamic username
  title:string=" Upcoming Appointments"

  constructor(private appointmentService: DataService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchUpcomingAppointments();
  }

  fetchUpcomingAppointments(): void {
    this.appointmentService.getUpcomingAppointments(this.username).subscribe({
      next: (data) => {
        const today = new Date();
        const startOfWeek = new Date(today);
        const endOfWeek = new Date(today);
        
        // Set start of the week (Monday)
        startOfWeek.setDate(today.getDate() - today.getDay() + 1);
        startOfWeek.setHours(0, 0, 0, 0);
  
        // Set end of the week (Sunday)
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
  
        // Filter appointments within the week range
        this.upcomingAppointments = data.filter((appointment: any) => {
          const appointmentDate = new Date(appointment.date);
          return appointmentDate >= startOfWeek && appointmentDate <= endOfWeek;
        });
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
        this.upcomingAppointments = [];
      }
    });
  }
  
  

  openAddAppointment() {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
      width: '600px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('New Appointment:', result);
        // Save the data or perform further actions
      }
    });
  }

  onAddAppointment() {
    console.log('Add Appointment button clicked');
  }
  
}