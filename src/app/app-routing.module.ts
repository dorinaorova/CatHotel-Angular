import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatlistComponent } from './catlist/catlist.component';
import { CatupdateComponent } from './catupdate/catupdate.component';
import { LoginComponent } from './login/login.component';
import { NewcatComponent } from './newcat/newcat.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReglistComponent } from './reglist/reglist.component';

const routes: Routes = [
  { path: 'catlist', component: CatlistComponent},
  { path: 'login', component: LoginComponent},
  {path: 'newcat', component: NewcatComponent},
  {path: 'signup', component: NewuserComponent},
  {path: 'registrations/:id', component: RegistrationComponent},
  {path: 'catupdate/:id', component: CatupdateComponent},
  {path: 'reglist', component: ReglistComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
