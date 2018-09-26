import {AbstractControl} from "@angular/forms";

export function emailCheckValidator(control: AbstractControl) {
  const email = control.get('email');
  const conformEmail = control.get("conformEmail");


  console.log("validation -- email :: ", email.value);
  console.log("validation -c.conformEmail :: ", conformEmail.value);

  if(!email || !conformEmail){
    return null;
  }

  return email.value === conformEmail.value ? null :{emailNoMatch: true};
}
