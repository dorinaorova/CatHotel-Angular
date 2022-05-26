import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../models/registration';

import { RegistrationService } from '../services/registration.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css']
})
export class ReglistComponent implements OnInit {

  public regs: Registration[] | undefined; 
  constructor(private service: RegistrationService, private router: Router, private userService: UserService) {
    
   }

  ngOnInit(): void { 
    this.getRegs();
  }

  
  public getRegs() : void{


    if(localStorage.getItem('userRole')=="admin"){
      this.service.getRegs().subscribe(
        (response: Registration[]) => {
          this.regs = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }
    else{
      this.userService.getRegsForUser(Number(localStorage.getItem('userId'))).subscribe(
        (response: Registration[]) => {
          this.regs = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }
  }


  public deleteReg(id: number, catId: number){
    this.service.deleteReg(catId, id).subscribe(
      (result) => {
        console.warn("result", result);
        this.ngOnInit();
      }
    );

  }

}
