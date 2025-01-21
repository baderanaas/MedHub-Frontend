import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  minDate: string;

  doctors = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Johnson', specialization: 'Pediatrics' },
    { id: 3, name: 'Dr. Williams', specialization: 'Dermatology' },
  ];

  timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
  ];

  constructor(private fb: FormBuilder) {
    // Set minimum date to today
    this.minDate = new Date().toISOString().split('T')[0];

    this.appointmentForm = this.fb.group({
      doctor: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      timeSlot: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      // Handle form submission
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.appointmentForm.controls).forEach((key) => {
        const control = this.appointmentForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
