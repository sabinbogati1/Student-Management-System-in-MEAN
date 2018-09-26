import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {zipCodeValidator} from './../Validators/validator';
import {passwordValidator} from "./../Validators/passwordValidator";
import {emailCheckValidator} from "./../Validators/emailCheckValidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(4)]],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],

      emailCheck: this.fb.group({
        email : ['', [Validators.required, Validators.email]],
        conformEmail:['', [Validators.required, Validators.email]],
      },{validator: emailCheckValidator}),

      passwordCheck: this.fb.group({
        password:"",
        conformPassword:'',
      }, {validator: passwordValidator}),

      zipCode:['', zipCodeValidator]


    });

  }

  handleSubmitForm(){
      console.log("Sign Up form value is :: ", this.signupForm.value);

      console.log("error :: ", this.signupForm.controls.zipCode);
  }

  resetForm(){
    // this.signupForm.reset();
    console.log("error :: ", this.signupForm.controls.zipCode);
  }

}
