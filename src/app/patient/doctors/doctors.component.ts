import { DataService } from 'src/app/shared/services/data.service';
import { Doctor } from './interfaces/doctor';
import { Component, inject, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { AddAppointmentDto } from 'src/app/shared/dto/add-appointment.dto';

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
  };
  appointmentDate!: Date;
  dataService = inject(DataService);
  filteredDoctor: Doctor[] = [];
  doctors$ = this.dataService.getDoctors();
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
  speciality = '';

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

  // This method handles appointment form submission
  addAppointment(docMat: number) {
    if (this.appointmentDate) {
      this.appointmentDto.date = this.appointmentDate;

      this.dataService.addAppointment(docMat, this.appointmentDto).subscribe({
        next: (res) => {
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
}
