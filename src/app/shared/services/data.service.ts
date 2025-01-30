import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Urls } from 'src/app/config/api-urls';
import { Doctor } from 'src/app/patient/doctors/interfaces/doctor';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { AuthService } from './auth.service';
import {Patient} from '../../doctor/patients/interfaces/patient';
import { AddAppointmentDto } from '../dto/add-appointment.dto';
import { AvailableSessionsDTo } from '../dto/available-session.dto';

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
    const username = this.auth.getUserNameFromToken()?.trim();
    console.log(username);
    if (username) {
      return this.http.get<Appointment[]>(
        Api_Urls.getPatientAppointments + `/${username}`
      );
    } else {
      return null;
    }
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(Api_Urls.getPatients);
    }
  addAppointment(
    docId: number,
    appointment: AddAppointmentDto
  ): Observable<Appointment> {
    const userName = this.auth.getUserNameFromToken();
    return this.http.post<Appointment>(
      Api_Urls.addAppointment + `/${userName}/${docId}`,
      appointment
    );
  }
  getAvailableSessions(date: any, docUsername: string): Observable<number[]> {
    let availableSessions: AvailableSessionsDTo = {
      date: '',
      username: '',
    };
    if (docUsername) {
      console.log(docUsername);
      docUsername = docUsername.trim();
    }
    if (docUsername) {
      availableSessions.username = docUsername;
      availableSessions.date = date;
    }
    console.log(date);
    const params = new HttpParams()
      .set('username', docUsername || '')
      .set('date', date);
    return this.http.get<number[]>(Api_Urls.getAvailableSessions, {
      params,
    });
  }
}
