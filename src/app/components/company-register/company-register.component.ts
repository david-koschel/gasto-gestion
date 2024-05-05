import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import {validateCIF, validatePasswords} from "../../shared/validators";

@Component({
  selector: 'app-company-register',
  standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
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
      cif: ["", [Validators.required, validateCIF]],
      password: ["", Validators.required],
      rePassword: ["", Validators.required]
    }, { validators: validatePasswords });
  }

  check() {
    this.form.get("cif")?.updateValueAndValidity();
    this.form.get("password")?.updateValueAndValidity();
    this.form.get("rePassword")?.updateValueAndValidity();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      console.log("aquí se crearía el usuario de empresa");
    }
  }
}
