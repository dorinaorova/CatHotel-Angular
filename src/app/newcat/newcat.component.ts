import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-newcat',
  templateUrl: './newcat.component.html',
  styleUrls: ['./newcat.component.css']
})
export class NewcatComponent implements OnInit {

  constructor(private catService: CatService, private router: Router) {
    this.catService=catService;
   }

  ngOnInit(): void {
    if(localStorage.getItem('login')!="true"){
      this.router.navigate(['/login']);
    }
  }

  onSubmit(data: any){  
    this.catService.addCat(data, Number(localStorage.getItem('userId'))).subscribe(
      (result) => {
        console.warn("result", result);
        this.router.navigate(['/catlist']);
    });
    
}

}
