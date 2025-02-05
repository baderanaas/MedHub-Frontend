import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Medication } from './../../patient/medications/interfaces/medication.interface';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Patient } from 'src/app/doctor/patients/interfaces/patient';

declare var bootstrap: any;

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  selectedMedication: Medication = {
    id: 0,
    name: '',
    frequency: 0,
    morning: false,
    midday: false,
    night: false,
    prescriptionRequired: false,
    sideEffects: '',
  };
  addMedication() {
    this.data
      .addMedication(
        this.selectedPatient.username,
        this.selectedMedication.name
      )
      .subscribe({
        next: () => {
          this.tstr.success('Medication Added');
          this.loadPatients();
        },
      });
  }

  patients: Patient[] = [];
  selectedPatient: Patient = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    sexe: '',
    email: '',
    phone: '',
    medications: [],
  };
  data = inject(DataService);
  patients$ = this.data.getCompletedAppointmentsByDoctor();
  appointments$ = this.data.getDoctorPatientCompletedAppointments(
    this.selectedPatient.username
  );
  medications$ = this.data.getMedications();
  medications: Medication[] = [];
  medicationName: string = '';

  constructor(private tstr: ToastrService) {}
  getMedications() {
    this.medications$.subscribe({
      next: (res) => {
        this.medications = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.patients$.subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openProfileModal(patient: Patient) {
    const modalElement = document.getElementById('patientModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    this.selectedPatient = patient;
    const patientUsername = patient.username;

    if (patientUsername) {
      this.data
        .getDoctorPatientCompletedAppointments(patientUsername)
        .subscribe({
          next: (res) => {
            if (this.selectedPatient) {
              this.selectedPatient.appointments = res;
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
  openMedicationModal(patient: Patient) {
    const modalElement = document.getElementById('medicationModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    this.selectedPatient = patient;
    const patientUsername = patient.username;

    if (patientUsername) {
      this.data
        .getDoctorPatientCompletedAppointments(patientUsername)
        .subscribe({
          next: (res) => {
            if (this.selectedPatient) {
              this.selectedPatient.appointments = res;
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}