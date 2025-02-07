import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { UpdateAppointmentDto } from 'src/app/shared/dto/update-appointment.dto';
import { AvailableSessionsDTo } from 'src/app/shared/dto/available-session.dto';
import { AddAppointmentDto } from 'src/app/shared/dto/add-appointment.dto';
import * as bootstrap from 'bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css'],
})
export class PatientAppointmentsComponent implements OnInit {
  constructor(private readonly tstr: ToastrService) {}
  reschedule() {
    const session = Number(this.appointmentDto.session);
    this.appointmentDto.session = session;
    console.log(this.appointmentDto.session);
    this.data
      .reschedule(this.selectedAppointment.id, this.appointmentDto)
      .subscribe({
        next: () => {
          this.tstr.success('Appointment Updated Successfully');
          this.getAppointments();
          this.closeModal();
        },
      });
  }
  isModalOpen: boolean = false;
  availableSessionDto: AvailableSessionsDTo = {
    date: '',
    username: '',
  };
  onDateChange(): void {
    if (this.appointmentDto.date && this.selectedAppointment.doctor) {
      console.log(this.appointmentDto.date);
      this.sessions$ = this.data.getAvailableSessions(
        this.appointmentDto.date,
        this.selectedAppointment.doctor.username
      );
    }
  }

  initialAppointment: Appointment = {
    id: 0,
    doctor: {
      username: '',
      firstName: '',
      lastName: '',
      matricule: 0,
      email: '',
      phone: 0,
      speciality: '',
      sexe: '',
      appointments: [],
    },
    status: '',
    payed: false,
    date: new Date(),
    session: 0,
  };
  selectedAppointment: Appointment = this.initialAppointment;
  sessions$!: Observable<number[]>;
  appointments!: Appointment[];
  appointmentDto: AddAppointmentDto = {
    date: new Date(),
    session: 0,
  };
  ngOnInit(): void {}
  getAppointments() {
    this.appointments$ = this.data.getPatientAppointments();
  }

  data = inject(DataService);
  appointments$ = this.data.getPatientAppointments();
  initialAppointments$ = this.appointments$;

  name: string = '';
  searchByName() {
    this.appointments$ = this.data.getDoctorAppointmentsByName(this.name);
  }
  openAppointmentModal(appointment: Appointment) {
    this.showModal();
    this.selectedAppointment = appointment;
    this.isModalOpen = true;
  }

  hideModal() {
    const modalElement = document.getElementById('appointmentModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide(); // Hides the modal
      }
    }
  }
  closeModal() {
    this.isModalOpen = false;
    this.selectedAppointment = this.initialAppointment;
    this.hideModal();
  }
  showModal() {
    const modalElement = document.getElementById('appointmentModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onAccept(id: number, status: string) {
    let update: UpdateAppointmentDto = {
      status: '',
    };
    update.status = status;
    this.data.updateAppointment(id, update).subscribe({
      next: () => {
        console.log('done');
        this.appointments$ = this.data.getPatientAppointments();
      },
    });
  }
}
