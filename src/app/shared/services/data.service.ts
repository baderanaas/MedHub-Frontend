import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Urls } from 'src/app/config/api-urls';
import { Doctor } from 'src/app/patient/doctors/interfaces/doctor';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { AuthService } from './auth.service';
import {Patient} from '../../doctor/patients/interfaces/patient';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  auth = inject(AuthService);
  http = inject(HttpClient);
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(Api_Urls.getDoctors);
  }
  getPatientAppointments(): Observable<Appointment[]> | null {
    const id = this.auth.getIdFromToken();
    console.log(id);
    if (id) {
      return this.http.get<Appointment[]>(
        Api_Urls.getPateintAppointments + `/${id}`
      );
    } else {
      return null;
    }
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(Api_Urls.getPatients);
  }
}
