import {Component, inject, OnInit} from '@angular/core';
import {DataJsonService} from "../../shared/data-json.service";
import {HttpClientModule} from "@angular/common/http";
import {map} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private dataJsonService = inject(DataJsonService);
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
