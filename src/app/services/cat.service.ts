import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cat} from '../models/cat';
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCats() :Observable<Cat[]>{
    return this.http.get<Cat[]>(`${this.apiServerUrl}/cat/all`);
  } 

  public addCat(data: Cat, id: number){
    return this.http.post(`${this.apiServerUrl}/cat/add/${id}`, data);
  }
  public getCat(id: number): Observable<Cat>{
    return this.http.get<Cat>(`${this.apiServerUrl}/cat/find/${id}`);
  }

  public updateCat(data: Cat, id: number){
    return this.http.put(`${this.apiServerUrl}/cat/update/${id}`, data);
  }

  public deleteCat(id: number){
    return this.http.delete(`${this.apiServerUrl}/cat/delete/${id}`);
  }

  public regCat(data: Registration, id: number){
    return this.http.put(`${this.apiServerUrl}/cat/regCat/${id}`, data)
  }
}
