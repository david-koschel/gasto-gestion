import {Component, OnInit, inject} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Router, RouterLink} from "@angular/router";
import {validatePasswords} from "../../shared/validators";
import {UserService} from "../../shared/user.service";

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
  private userService = inject(UserService);
  private router = inject(Router);

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
    if (this.form.valid) {
      this.userService.addUser({...this.form.value}).then(() => this.router.navigate(["/log-in"]));
    }
  }
}

