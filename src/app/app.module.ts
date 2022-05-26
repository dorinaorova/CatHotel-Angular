import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatlistComponent } from './catlist/catlist.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewcatComponent } from './newcat/newcat.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppService } from './services/app.service';
import { CatupdateComponent } from './catupdate/catupdate.component';
import { ReglistComponent } from './reglist/reglist.component';

@NgModule({
  declarations: [
    AppComponent,
    CatlistComponent,
    LoginComponent,
    NewcatComponent,
    NewuserComponent,
    RegistrationComponent,
    CatupdateComponent,
    ReglistComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
