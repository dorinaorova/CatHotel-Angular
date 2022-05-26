import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(user: { name: string; password: string; } | undefined, callback: (() => void) | undefined){
     /* const headers = new HttpHeaders(user ? {
        authorization : 'Basic ' + btoa(user.name + ':' + user.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });*/
  }
}
