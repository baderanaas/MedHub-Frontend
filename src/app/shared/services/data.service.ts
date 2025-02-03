import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Urls } from 'src/app/config/api-urls';
import { Doctor } from 'src/app/patient/doctors/interfaces/doctor';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { AuthService } from './auth.service';
import { AddAppointmentDto } from '../dto/add-appointment.dto';
import { AvailableSessionsDTo } from '../dto/available-session.dto';
import { Medication } from 'src/app/patient/medications/interfaces/medication.interface';

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
        Api_Urls.getPateintAppointments + `/${username}`
      );
    } else {
      return null;
    }
  }
  getPatientRequests(): Observable<Appointment[]> | null {
    const username = this.auth.getUserNameFromToken()?.trim();
    console.log(username);
    if (username) {
      return this.http.get<Appointment[]>(
        Api_Urls.getPateintRequests + `/${username}`
      );
    } else {
      return null;
    }
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
  getDoctorAppointmentsByName(name: string): Observable<Appointment[]> {
    const params = new HttpParams().set('name', name);
    console.log('passed name: ' + name);
    return this.http.get<Appointment[]>(Api_Urls.getDoctorAppointmentsByName, {
      params,
    });
  }
  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(Api_Urls.getMedications);
  }
  getPatientNextAppointment(): Observable<Appointment> {
    const userName = this.auth.getUserNameFromToken();
    return this.http.get<Appointment>(
      Api_Urls.getPatientNextAppointment + `/${userName}`
    );
  }
  getNotPayed(): Observable<number> {
    const username = this.auth.getUserNameFromToken();
    return this.http.get<number>(Api_Urls.getPatientNotPayed + `/${username}`);
  }
  getUpcoming(): Observable<number> {
    const username = this.auth.getUserNameFromToken();
    return this.http.get<number>(Api_Urls.getPatientUpcoming + `/${username}`);
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


  getPatientHistory(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getPassedAppointement}/history/${username}`);
  }

  getUpcomingAppointments(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getUpcommingAppointment}/${username}`);
  }
  getUpcomingAppointmentsNumber(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getPatientUpcomingNumber}/${username}`);
  }

  getPatientByUsername(): Observable<any> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any>(`${Api_Urls.getPatientByUsername}/${username}`);
  }

  getDoctorUpcomingAppointments(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getDoctorUpcommingAppointment}/${username}`);
  }

  getDoctorTodayAppointments(): Observable<Appointment[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getDoctorTodaysAppointment}/${username}`);
  }

}
