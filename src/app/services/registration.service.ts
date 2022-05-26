import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRegs() :Observable<Registration[]>{
    return this.http.get<Registration[]>(`${this.apiServerUrl}/reg/all`);
  } 
  public deleteReg(id: number, data: number){
    return this.http.put(`${this.apiServerUrl}/cat/deleteReg/${id}`, data);
  }

}
