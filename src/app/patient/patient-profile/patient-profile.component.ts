import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  patient = {
    name: 'John Doe',
    sexe: 'Male',
    email: 'john.doe@example.com',
    phone: '+123456789',
    height: 180,
    weight: 75,
    bloodType: 'O+',
    diagnosedDiseases: ['Hypertension'],
    allergies: ['Peanuts']
  };

  appointments: any[] = [];

  constructor(private patientService: DataService) {}

  ngOnInit(): void {
    const username = 'hassenhassen'; // Replace with dynamic username if available
    this.loadPatientHistory(username);
  }

  loadPatientHistory(username: string) {
    this.patientService.getPatientHistory(username).subscribe(
      (data) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error fetching patient history:', error);
      }
    );
  }
}