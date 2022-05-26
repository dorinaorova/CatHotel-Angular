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
    this.getCat(this.id);
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
    var name : string;
    if(this.cat?.name==undefined) name="";
    else {
      if(data.name=='') name=this.cat.name;
      else name=data.name;
    }
    var colour : string;
    if(this.cat?.colour==undefined) colour="";
    else {
      if(data.colour=='') colour=this.cat.colour;
      else colour=data.colour;
    }
    const cat: Cat={
      id: this.id,
      name: name,
      colour: colour,
      user_id: Number(localStorage.getItem('userId')),
      registered: reg
    }
    this.catService.updateCat(data, this.id).subscribe(
      (result) => console.warn("result", result));
      this.router.navigate(['/catlist']);
  }

  public deleteCat(){
    this.catService.deleteCat(this.id).subscribe(
      (result) => console.warn("result", result));
      this.router.navigate(['/catlist']);
  }
  

}
