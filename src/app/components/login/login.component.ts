import {Component, OnInit} from '@angular/core';
import {FormTemplateComponent} from "../../shared/form-template/form-template.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormTemplateComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginFormFields : any;

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.loginFormFields = [
      {
        'id': 'username',
        'icon' : 'pi pi-user',
        'name': 'Nombre'
      }
    ]
  }
}
