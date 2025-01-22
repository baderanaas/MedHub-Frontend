import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Urls } from 'src/app/config/api-urls';
import { Doctor } from 'src/app/patient/doctors/interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  http=inject(HttpClient);
  getDoctors():Observable<Doctor[]>{
    
    return this.http.get<Doctor[]>(Api_Urls.getDoctors);

  }
}
