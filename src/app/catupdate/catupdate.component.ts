import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-catupdate',
  templateUrl: './catupdate.component.html',
  styleUrls: ['./catupdate.component.css']
})
export class CatupdateComponent implements OnInit {
  id: number;
  cat: Cat |undefined;

  constructor(private catService: CatService,private avRoute: ActivatedRoute , private router: Router) { 
    this.catService = catService;
    const idParam= 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
    else{ this.id=0;}
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

  public onSubmit(data: Cat){
    var reg : boolean;
    if(this.cat?.registered==undefined) reg=false;
    else {
      if(this.cat.registered==true) reg=true;
      else reg=false;
    }
    var catname : string;
    if(this.cat?.name==undefined) catname="";
    else {
      if(data.name=='') catname=this.cat.name;
      else catname=data.name;
    }
    var catcolour : string;
    if(this.cat?.colour==undefined) catcolour="";
    else {
      if(data.colour=='') {
        catcolour=this.cat.colour;       
      }
      else{         
        catcolour=data.colour
      };
    }
    const cat: Cat={
      id: this.id,
      name: catname,
      colour: catcolour,
      user_id: Number(localStorage.getItem('userId')),
      registered: reg
    }
    this.catService.updateCat(cat, this.id).subscribe(
      (result) => {console.warn("result", result);
      this.router.navigate(['/catlist']);
    });
      
  }

  public deleteCat(){
    if(this.cat!=undefined){
    this.catService.deleteCat(Number(localStorage.getItem('userId')), this.cat).subscribe(
      (result) => {
        console.warn("result", result);
        this.router.navigate(['/catlist']);});
    }
  }
}
