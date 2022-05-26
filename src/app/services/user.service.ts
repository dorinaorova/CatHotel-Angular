import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat';
import { Registration } from '../models/registration';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers() :Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  } 

  public addUser(data: User){
    return this.http.post(`${this.apiServerUrl}/user/add`, data);
  }

  public getCatsForUser(id: number) :Observable<Cat[]>{
    return this.http.get<Cat[]>(`${this.apiServerUrl}/user/findCatForUser/${id}`);
  }

  public getRegsForUser(id: number) :Observable<Registration[]>{
    return this.http.get<Registration[]>(`${this.apiServerUrl}/user/findRegsForUser/${id}`);
  }
}
