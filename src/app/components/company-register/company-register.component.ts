import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.scss'
})

export class CompanyRegisterComponent implements OnInit {
  protected form !: FormGroup;
  
  private formBuilder = inject(FormBuilder);
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      cif: ["", [Validators.required, this.validateCIF]],
      password: ["", Validators.required],
      rePassword: ["", Validators.required]
    }, { validators: this.unambiguousRoleValidator });
  }

  check() {
    this.form.updateValueAndValidity();
    console.log(this.form.valid);
  }

  unambiguousRoleValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;
    return password !== rePassword ? { passwordsDoNotMatch: true } : null;
  }

  validateCIF(control: AbstractControl): ValidationErrors | null {
    const cif = control.value;
    const cifRegex = /^[A-HJNPQRSUVW]{1}\d{7}[0-9,A-J]$/;
    return cifRegex.test(cif) ? null : { invalidCIF: true };
  }
}