import { Component, inject, OnInit } from '@angular/core';
import { Patient } from './interfaces/patient';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  dataService = inject(DataService);
  filteredPatients: Patient[] = [];
  searchQuery: string = '';
  patients$ = this.dataService.getPatients();
  getPatients() {
    this.patients$.subscribe({
      next: (pats) => {
        this.patients = pats;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  constructor() {}

  ngOnInit(): void {}

  search() {
    if (this.searchQuery.trim() === '') {
      this.filteredPatients = [...this.patients];
    } else {
      this.filteredPatients = this.patients.filter(
        (p) =>
          p.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          p.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
