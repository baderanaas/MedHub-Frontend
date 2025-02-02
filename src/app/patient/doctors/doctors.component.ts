import { AddAppointmentDto } from './../../shared/dto/add-appointment.dto';
import { DataService } from 'src/app/shared/services/data.service';
import { Doctor } from './interfaces/doctor';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { AvailableSessionsDTo } from 'src/app/shared/dto/available-session.dto';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  doctors: Doctor[] = [];
  isModalOpen: boolean = false;
  selectedDoctor: any;
  appointmentDto: AddAppointmentDto = {
    date: new Date(),
    session: 0,
  };
  availableSessionDto: AvailableSessionsDTo = {
    date: '',
    username: '',
  };
  dataService = inject(DataService);
  filteredDoctor: Doctor[] = [];
  doctors$ = this.dataService.getDoctors();
  sessions$!: Observable<number[]>;
  onDateChange(): void {
    if (this.appointmentDto.date && this.selectedDoctor) {
      console.log(this.appointmentDto.date);
      this.sessions$ = this.dataService.getAvailableSessions(
        this.appointmentDto.date.toISOString().split('T')[0],
        this.selectedDoctor.username
      );
    }
  }

  speciality = '';

  getDoctors() {
    this.doctors$.subscribe({
      next: (docs) => {
        this.doctors = docs;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  search() {
    const filteredDoctors$ = this.doctors$.pipe(
      map((data) => data.filter((spec) => spec.speciality == this.speciality))
    );
    this.doctors$ = filteredDoctors$;
  }
  reset() {
    if (this.speciality.trim() === '') {
      this.doctors$ = this.dataService.getDoctors();
    }
  }
  openAppointmentModal(doctor: any) {
    this.showModal();
    this.selectedDoctor = doctor;
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
    this.selectedDoctor = null;
    this.hideModal();
  }
  showModal() {
    const modalElement = document.getElementById('appointmentModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  addAppointment(docMat: number) {
    if (this.appointmentDto.date && this.appointmentDto.session) {
      console.log(this.appointmentDto);
      const session = Number(this.appointmentDto.session);
      this.appointmentDto.session = session;
      this.dataService.addAppointment(docMat, this.appointmentDto).subscribe({
        next: () => {
          this.hideModal();
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.closeModal();
    } else {
      alert('Please fill in all fields.');
    }
  }


  isDoctorInfoModalOpen: boolean = false;

  openDoctorInfoModal(doctor: Doctor) {
    this.selectedDoctor = doctor;
    this.isDoctorInfoModalOpen = true;
    this.showDoctorInfoModal();
  }

  closeDoctorInfoModal() {
    this.isDoctorInfoModalOpen = false;
    this.selectedDoctor = null;
    this.hideDoctorInfoModal();
  }

  showDoctorInfoModal() {
    const modalElement = document.getElementById('doctorInfoModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  hideDoctorInfoModal() {
    const modalElement = document.getElementById('doctorInfoModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide(); // Hides the modal
      }
    }
  }

}
