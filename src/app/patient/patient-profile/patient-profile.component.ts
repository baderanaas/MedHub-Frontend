import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent implements OnInit {
  patient: any = {};
  appointments: any[] = [];

  constructor(private patientService: DataService) {}

  ngOnInit(): void {
    this.loadPatientProfile();
    this.loadPatientHistory();
  }

  loadPatientProfile(): void {
    this.patientService.getPatientByUsername().subscribe(
      (data) => {
        this.patient = data;
      },
      (error) => {
        console.error('Error fetching patient profile:', error);
      }
    );
  }

  loadPatientHistory(): void {
    this.patientService.getPatientHistory().subscribe(
      (data) => {
        this.appointments = data;
        console.log('appointments history' + data);
      },
      (error) => {
        console.error('Error fetching patient history:', error);
      }
    );
  }
}
