import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
      "firstName": new FormControl(null),
      "lastName": new FormControl(null),
      "address": new FormControl(null),
      "phoneNumber": new FormControl(null),
      "email": new FormControl(null),
      "conformEmail": new FormControl(null),
      "password": new FormControl(null),
      "conformPassword": new FormControl(null)

    })
  }

}
