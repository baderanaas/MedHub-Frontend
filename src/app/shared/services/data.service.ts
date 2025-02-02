import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Urls } from 'src/app/config/api-urls';
import { Doctor } from 'src/app/patient/doctors/interfaces/doctor';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { AuthService } from './auth.service';
import { Patient } from 'src/app/doctor/patients/interfaces/patient';
import { AddAppointmentDto } from '../dto/add-appointment.dto';
import { AvailableSessionsDTo } from '../dto/available-session.dto';
import { Medication } from 'src/app/patient/medications/interfaces/medication.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private auth = inject(AuthService);
  private http = inject(HttpClient);

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(Api_Urls.getDoctors);
  }

  getPatientAppointments(): Observable<Appointment[]> | null {
    const username = this.auth.getUserNameFromToken()?.trim();
    return username ? this.http.get<Appointment[]>(`${Api_Urls.getPatientAppointments}/${username}`) : null;
  }

  getPatientRequests(): Observable<Appointment[]> | null {
    const username = this.auth.getUserNameFromToken()?.trim();
    return username ? this.http.get<Appointment[]>(`${Api_Urls.getPatientRequests}/${username}`) : null;
  }

  getAvailableSessions(date: string, docUsername: string): Observable<number[]> {
    const params = new HttpParams()
      .set('username', docUsername.trim())
      .set('date', date);
    return this.http.get<number[]>(Api_Urls.getAvailableSessions, { params });
  }

  getDoctorAppointmentsByName(name: string): Observable<Appointment[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Appointment[]>(Api_Urls.getDoctorAppointmentsByName, { params });
  }

  getDoctorId(): number | null {
    return this.auth.getDoctorId();
  }

  getCompletedAppointmentsByDoctor(): Observable<Patient[]> | null {
    const doctorId = this.getDoctorId();
    return doctorId ? this.http.get<Patient[]>(`/api/doctor/completed/${doctorId}`) : null;
  }



  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(Api_Urls.getMedications);
  }

  getPatientNextAppointment(): Observable<Appointment> {
    const userName = this.auth.getUserNameFromToken();
    return this.http.get<Appointment>(`${Api_Urls.getPatientNextAppointment}/${userName}`);
  }

  getNotPayed(): Observable<number> {
    const username = this.auth.getUserNameFromToken();
    return this.http.get<number>(`${Api_Urls.getPatientNotPayed}/${username}`);
  }

  getUpcoming(): Observable<number> {
    const username = this.auth.getUserNameFromToken();
    return this.http.get<number>(`${Api_Urls.getPatientUpcoming}/${username}`);
  }

  addAppointment(docId: number, appointment: AddAppointmentDto): Observable<Appointment> {
    const userName = this.auth.getUserNameFromToken();
    return this.http.post<Appointment>(`${Api_Urls.addAppointment}/${userName}/${docId}`, appointment);
  }

  getPatientHistory(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getPassedAppointment}/history/${username}`);
  }

  getUpcomingAppointments(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getUpcomingAppointment}/${username}`);
  }

  getUpcomingAppointmentsNumber(): Observable<any[]> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<any[]>(`${Api_Urls.getPatientUpcomingNumber}/${username}`);
  }

  getPatientByUsername(): Observable<Patient> {
    const username = this.auth.getUserNameFromToken()?.trim();
    return this.http.get<Patient>(`${Api_Urls.getPatientByUsername}/${username}`);
  }
}
