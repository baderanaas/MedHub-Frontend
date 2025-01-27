import { Component } from '@angular/core';
import { Appointment } from './interfaces/appointment';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../dashboard/components/add-appointment/add-appointment.component';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent {
   Appointments: Appointment[] = [
      { doctorName: 'Dr. Smith', specialty: 'Cardiologist', date: new Date('2023-12-25'), time: '10:00 AM' },
      { doctorName: 'Dr. Jones', specialty: 'Dermatologist', date: new Date('2023-12-28'), time: '2:00 PM' },
      // Add more appointments here
    ];
    title:string="Appointments"
    
    //dialog: any;
  
    onActionSelected(appointment: Appointment, action: string) {
      console.log('Selected action:', action, 'for appointment:', appointment);
      // Implement your logic here based on the selected action
      // For example:
      if (action === 'cancel') {
        // Logic to cancel the appointment
      } else if (action === 'reschedule') {
        // Logic to reschedule the appointment
      } else if (action === 'viewDetails') {
        // Logic to view appointment details
      }
    }
    constructor(private dialog: MatDialog) {}
  
    openAddAppointment() {
      const dialogRef = this.dialog.open(AddAppointmentComponent, {
        width: '600px',
        data: {}, // Optional: Pass initial data if needed
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
      // Implement your logic for adding appointments, e.g., opening a modal
    }
    

}
