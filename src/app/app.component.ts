import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cathotel';
  //public cats: Cat[] | undefined;
  public login: boolean;

  constructor(private app: AppService, private http: HttpClient, private router: Router, private authService: AuthenticationService){
    this.login=true;
  }

  ngOnInit() {
    if(localStorage.getItem("login")?.match("true")) {this.login =true;}
    else this.login = false;
  }

  logout(){
    this.authService.logout();
  }  
  readLocalStorage(): boolean{
    if(localStorage.getItem("login")?.match("true")) return true;
    else return false;
  }

}
