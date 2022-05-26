import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AppService } from '../services/app.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email: '', password: ''};

  constructor(private fb: FormBuilder, 
    private authService: AuthenticationService, 
    private router: Router) {
  }
  ngOnInit(): void {
  }

  login(data: any) {
      this.authService.auth(data.email, data.password).subscribe(
          (response: User) => {
            this.user = response;
            localStorage.setItem('userId', response.id.toString());
            localStorage.setItem('userRole', response.roles);
            localStorage.setItem('login', "true");          
            this.router.navigate(['/catlist']);
          },
          (error: HttpErrorResponse) =>{
            alert("Incorrect email/password");
          }
        );
  }

}
