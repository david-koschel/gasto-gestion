import {Component, OnInit, inject} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {RouterLink} from "@angular/router";
import {validatePasswords} from "../../shared/validators";

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})

export class UserRegisterComponent implements OnInit {
  protected form !: FormGroup;

  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      rePassword: ["", Validators.required]
    }, {validators: validatePasswords});
  }

  check() {
    this.form.get("password")?.updateValueAndValidity();
    this.form.get("rePassword")?.updateValueAndValidity();
    this.form.updateValueAndValidity();
    console.log(this.form.valid);
  }
}

