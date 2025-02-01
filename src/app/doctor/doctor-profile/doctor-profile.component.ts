import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor: any = {};
  appointments: any[] = [];

  constructor(private doctorService: DataService) {}

  ngOnInit(): void {
    
    this.loadDoctorProfile();
    this.loadDoctorHistory();
  }

  loadDoctorProfile(): void {
    this.doctorService.getDoctorByMat().subscribe(
      (data) => {
        this.doctor = data;
      },
      (error) => {
        console.error('Error fetching doctor profile:', error);
      }
    );
  }

  loadDoctorHistory(): void {
    this.doctorService.getDoctorHistory().subscribe(
      (data) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error fetching doctor history:', error);
      }
    );
  }
}
