import {AbstractControl, ValidationErrors} from "@angular/forms";

export function validatePasswords(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const rePassword = control.get('rePassword');
  if (password?.value !== rePassword?.value) {
    password?.setErrors({passwordsDoNotMatch: true});
    rePassword?.setErrors({passwordsDoNotMatch: true});
    return {passwordsDoNotMatch: true};
  } else {
    return null;
  }
}

export function validateCIF(control: AbstractControl): ValidationErrors | null {
  const cif = control.value;
  const cifRegex = /^[A-HJNPQRSUVW]{1}\d{7}[0-9,A-J]$/;
  return cifRegex.test(cif) ? null : {invalidCIF: true};
}
