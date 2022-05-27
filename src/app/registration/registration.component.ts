import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
id: number;
cat: Cat | undefined;
start: Date;
end: Date;
  
  constructor(private catService: CatService, private router: Router, private avRoute: ActivatedRoute) {
    const idParam= 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
    else{ this.id=0;}
    this.start= new Date('0001-01-01');
    this.end= new Date('0001-01-01');
   }

  ngOnInit(): void {
    if(localStorage.getItem('login')=="true"){
      this.getCat(this.id);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  public getCat(id: number):void{
    this.catService.getCat(id).subscribe(
      (response: Cat) => {
        this.cat = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  onSubmit(data: any){  
    var reg: Registration={
      start: this.start.toString(),
      end: this.end.toString(),
      cat_id: this.id,
      id: 0
    }
    this.catService.regCat(data, this.id).subscribe(
      (result) => {console.warn("result", result)
      this.router.navigate(['/catlist']);
    });
    
}

}
