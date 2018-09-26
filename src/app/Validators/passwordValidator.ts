import {AbstractControl} from "@angular/forms";

export function passwordValidator(control: AbstractControl) {
  const password = control.get('password');
  const conformPassword = control.get("conformPassword");


  console.log("validation -- password :: ", password.value);
  console.log("validation -c.password :: ", conformPassword.value);

  if(!password || !conformPassword){
     return null;
  }

  return password.value === conformPassword.value ? null :{passwordNoMatch: true};



}
