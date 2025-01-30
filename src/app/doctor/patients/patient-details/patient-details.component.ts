import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  patient: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.loadPatientDetails(patientId);
  }

  loadPatientDetails(id: string | null) {
    // Données mockées pour tester. Remplacez par une API réelle.
    this.patient = {
      id,
      name: 'John Doe',
      dateOfBirth: '1985-06-15',
      gender: 'Male',
      contact: 'john.doe@example.com',
      allergies: 'Pollen, Penicillin',
      chronicDiseases: 'Diabetes, Hypertension',
      surgeries: 'Appendectomy (2015)',
      consultations: [
        { date: '2025-01-01', diagnosis: 'Flu' },
        { date: '2024-12-15', diagnosis: 'Back Pain' },
      ],
      currentTreatments: [
        { name: 'Metformin', dosage: '500mg twice daily' },
        { name: 'Lisinopril', dosage: '10mg once daily' },
      ],

    };
  }

  calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
