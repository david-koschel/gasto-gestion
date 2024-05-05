import {Component, inject, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {DataJsonService} from "../../shared/services/data-json.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  loginFormFields: any;
  loginForm !: FormGroup;

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public submit() {
    if (this.loginForm.valid) {
      this.authService.logInUser(this.loginForm.get("username")!.value, this.loginForm.get("password")!.value);
      console.log("Petición de envío");
    }
  }
}
