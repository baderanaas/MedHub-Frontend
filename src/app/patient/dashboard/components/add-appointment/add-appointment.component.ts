import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveAppointment() {
    // Here, you can handle the submission logic (e.g., send the data to the backend or emit an event)
    const formData = {
      firstName: this.data?.firstName,
      lastName: this.data?.lastName,
      email: this.data?.email,
      specialty: this.data?.specialty,
      date: this.data?.date,
      time: this.data?.time,
    };

    console.log('Appointment Data:', formData);
    this.dialogRef.close(formData); // Pass the data back to the parent component
  }

}
