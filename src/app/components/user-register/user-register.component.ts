import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})

export class UserRegisterComponent implements OnInit {
  protected form !: FormGroup;
  
  private formBuilder = inject(FormBuilder);
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName:   ["", Validators.required],
      email:      ["", [Validators.required, Validators.email]],
      password:   ["", Validators.required],
      rePassword: ["", Validators.required]
    }, { validators: this.unambiguousRoleValidator });
  }

  check(){
    this.form.updateValueAndValidity()
    console.log(this.form.valid)
  }

  unambiguousRoleValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;
    return password !== rePassword ? {passwordsDoNotMatch: true} : null;
  };
}
