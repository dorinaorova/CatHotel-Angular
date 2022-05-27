import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  public cats: Cat[] | undefined; 
  constructor(private catService: CatService, private router: Router, private userService: UserService) {
    this.catService=catService;
   }

  ngOnInit(): void { 
    if(localStorage.getItem('login')=="true"){
      this.getCats();
    }
    else{
      this.router.navigate(['/login']);
    }
    
  }

  
  public getCats() : void{
    if(localStorage.getItem('userRole')=="admin"){
      this.catService.getCats().subscribe(
        (response: Cat[]) => {
          this.cats = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }
    else{
      this.userService.getCatsForUser(Number(localStorage.getItem('userId'))).subscribe(
        (response: Cat[]) => {
          this.cats = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }
  }

  public updateCat(id: number){
  this.router.navigate(['/catupdate/', id]);
  }

  public registerCat(id: number){
    this.router.navigate(['registrations/', id]);

  }
  admin(){
    return localStorage.getItem('userRole')=="admin";
  }


}
