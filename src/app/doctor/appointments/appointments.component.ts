import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  title = 'My Appointments';
  upcomingAppointments = [
    {
      patientName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+123456789',
      date: new Date(),
      time: '10:30 AM',
    },
    {
      patientName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '+987654321',
      date: new Date(),
      time: '2:00 PM',
    },
  ];

  onActionSelected(appointment: any, action: string) {
    console.log(`Action "${action}" selected for:`, appointment);
    // Implement functionality for view profile, reschedule, or cancel here
  }

  onAddAppointment() {
    console.log('Add Appointment button clicked');
    // Implement "Add Appointment" logic
  }
}
