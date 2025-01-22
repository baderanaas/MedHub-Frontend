import { DataService } from 'src/app/shared/services/data.service';
import { Doctor } from './interfaces/doctor';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {

  dataService = inject(DataService);
  doctors$ = this.dataService.getDoctors();
}
