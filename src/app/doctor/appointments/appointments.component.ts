import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  title = 'My Appointments';
  upcomingAppointments: Appointment[] = []; // Utilisez le modèle Appointment

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadUpcomingDoctorAppointments();
  }

  loadUpcomingDoctorAppointments(): void {
    const doctorId = 1; // Remplacez par l'ID du docteur connecté
    this.dataService.getUpcomingDoctorAppointments().subscribe(
      (data) => {
        this.upcomingAppointments = data;
      },
      (error) => {
        console.error('Error fetching upcoming doctor appointments:', error);
      }
    );
  }

  onActionSelected(appointment: Appointment, action: string): void {
    console.log(`Action "${action}" selected for:`, appointment);
    switch (action) {
      case 'viewProfile':
        this.viewPatientProfile(appointment.patient.id);
        break;
      case 'reschedule':
        this.rescheduleAppointment(appointment.id);
        break;
      case 'cancel':
        this.cancelAppointment(appointment.id);
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  viewPatientProfile(patientId: number): void {
    console.log('Viewing profile for patient ID:', patientId);
    // Implémentez la logique pour afficher le profil du patient
  }

  rescheduleAppointment(appointmentId: number): void {
    console.log('Rescheduling appointment ID:', appointmentId);
    // Implémentez la logique pour reprogrammer le rendez-vous
  }

  cancelAppointment(appointmentId: number): void {
    console.log('Canceling appointment ID:', appointmentId);
    // Implémentez la logique pour annuler le rendez-vous
  }

  onAddAppointment(): void {
    console.log('Add Appointment button clicked');
    // Implémentez la logique pour ajouter un rendez-vous
  }
}