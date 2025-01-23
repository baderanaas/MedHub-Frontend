import { DataService } from 'src/app/shared/services/data.service';
import { Doctor } from './interfaces/doctor';
import { Component, inject, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  doctors: Doctor[] = [];
  dataService = inject(DataService);
  filteredDoctor: Doctor[] = [];
  doctors$ = this.dataService.getDoctors();
  getDoctors() {
    this.doctors$.subscribe({
      next: (docs) => {this.doctors=docs},
      error:(err)=>{console.log(err)}
    })
    
  }
  speciality = '';
  
  search() {
    const filteredDoctors$ = this.doctors$.pipe(
      map((data) => data.filter((spec) => spec.speciality == this.speciality))
    );
    this.doctors$ = filteredDoctors$;
    
  }
  reset(){
    if (this.speciality.trim() === '') {
      this.doctors$ = this.dataService.getDoctors();
    }
  }
}
