import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      "firstName": new FormControl(null,Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "address": new FormControl(null, Validators.required),
      "phoneNumber": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "conformEmail": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required),
      "conformPassword": new FormControl(null, Validators.required)

    })
  }

}
