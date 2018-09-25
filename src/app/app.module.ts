import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginModule} from './login/login.module';
import {SignupModule} from "./signup/signup.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
