import { Component, inject, OnInit } from '@angular/core';
import { FormTemplateComponent } from "../../shared/form-template/form-template.component";
import { DataJsonService } from "../../shared/data-json.service";
import { HttpClientModule } from "@angular/common/http";
import { map } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormTemplateComponent,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private dataJsonService = inject(DataJsonService);
  private formBuilder = inject(FormBuilder);

  loginFormFields: any;
  loginForm !: FormGroup;

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.dataJsonService.fetchDataFromJson("form")
      .pipe(map((json: any) => json["log-in"]))
      .subscribe(json => this.loginFormFields = json);
    this.loginForm = this.formBuilder.group({});
    for (let loginFormField of this.loginFormFields) {
      if (loginFormField.required) {
        this.loginForm.addControl(
          loginFormField.label,
          ["", Validators.required]
        )
      } else {
        this.loginForm.addControl(
          loginFormField.label,
          [""]
        )
      }
    }
  }

  public submit() {
    console.log("Petición de envío");
  }
}
