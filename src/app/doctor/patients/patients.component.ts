import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Patient } from 'src/app/doctor/patients/interfaces/patient';

declare var bootstrap: any; // Déclaration de Bootstrap pour éviter l'erreur de compilation

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatient: Patient | null = null;
  doctorId: number = 0;

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit() {
    this.doctorId = this.authService.getDoctorId() || 0; 
    this.loadPatients();
  }

  loadPatients() {
    if (this.doctorId > 0) {
      this.dataService.getCompletedAppointmentsByDoctor()?.subscribe(
        (patients) => {
          this.patients = patients;
        },
        (error) => {
          console.error('Erreur lors du chargement des patients', error);
        }
      );
    }
  }


  openAppointmentModal(patient: Patient) {
    this.selectedPatient = patient;

    const doctorUsername = this.authService.getUserNameFromToken()?.trim();
    const patientUsername = patient.username;

    if (doctorUsername && patientUsername) {
      this.dataService.getDoctorPatientCompletedAppointments(doctorUsername, patientUsername).subscribe(
        (appointments) => {
          if (this.selectedPatient) {
            this.selectedPatient.appointments = appointments;
          }
        },
        (error) => {
          console.error('Error fetching completed appointments:', error);
          if (this.selectedPatient) {
            this.selectedPatient.appointments = [];
          }
        }
      );
    }

    setTimeout(() => {
      const modalElement = document.getElementById('patientModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 500);
  }



}