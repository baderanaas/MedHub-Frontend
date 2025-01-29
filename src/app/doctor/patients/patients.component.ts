import { Component } from '@angular/core';
import { Patient } from './interfaces/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  selectedPatient: any;
  patients = [
    {
      username: 'hello',
      firstName: 'Hassen',
      lastName: 'Hassen',
      email: 'hassen@gmail.com',
      sexe: 'male',
      phone: 12345678,
      height: 175,
      weight: 70,
      bloodType: 'O+',
      diagnosedDiseases: 'Hypertension',
      allergies: 'Peanuts',
      appointments: [
        { date: '2024-01-10', time: '10:30 AM', description: 'Routine check-up' },
        { date: '2023-12-05', time: '2:00 PM', description: 'Blood pressure review' },
      ],
    },
    {
      username: 'hello',
      firstName: 'Mohssen',
      lastName: 'Mohssen',
      email: 'mohssen@gmail.com',
      sexe: 'male',
      phone: 12345978,
      height: 180,
      weight: 80,
      bloodType: 'A+',
      diagnosedDiseases: 'Diabetes',
      allergies: 'None',
      appointments: [
        { date: '2024-01-12', time: '11:30 AM', description: 'Blood sugar evaluation' },
      ],
    },
  ];

  openAppointmentModal(patient: any) {
    this.selectedPatient = patient;
    const modalElement = document.getElementById('patientModal');
    
    if (modalElement) { // Ensure the element is not null
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found.');
    }
  }
}