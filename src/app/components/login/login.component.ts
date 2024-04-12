import {Component, OnInit} from '@angular/core';
import {FormTemplateComponent} from "../../shared/form-template/form-template.component";
import {DataJsonService} from "../../shared/data-json.service";
import {HttpClientModule} from "@angular/common/http";
import {map} from "rxjs";

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

  public constructor(private dataJsonService: DataJsonService) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.dataJsonService.fetchDataFromJson("form")
      .pipe(map((json: any) => json["log-in"]))
      .subscribe(json => this.loginFormFields = json);
  }
}
