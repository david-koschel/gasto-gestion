import {Component, OnInit} from '@angular/core';
import {FormTemplateComponent} from "../../shared/form-template/form-template.component";
import {DataJsonService} from "../../shared/data-json.service";
import {HttpClientModule} from "@angular/common/http";
import {map} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormTemplateComponent,
    HttpClientModule
  ],
  providers: [
    DataJsonService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginFormFields : any;
  loginForm !: FormGroup

  public constructor(
    private dataJsonService: DataJsonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.dataJsonService.fetchDataFromJson("form")
      .pipe(map((json: any) => json["log-in"]))
      .subscribe(json => this.loginFormFields = json);
    this.loginForm = this.formBuilder.group({});
    for (let loginFormField of this.loginFormFields){
      if (loginFormField.required){
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

  public submit(){
    console.log("Petición de envío");
  }
}
