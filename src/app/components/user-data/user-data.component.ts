import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {validatePasswords} from "../../shared/validators";
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit {

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private formBuilder = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.form = this.formBuilder.group({
        username: [user.username, Validators.required],
        email: [user.email, Validators.required],
        password: [user.password, Validators.required],
        rePassword: [user.password, Validators.required]
      }, {validators: validatePasswords});
    });
  }

  check() {
    this.form.get("password")?.updateValueAndValidity();
    this.form.get("rePassword")?.updateValueAndValidity();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      this.userService.updateUser({...this.form.value, id: this.authService.userId});
    }
  }
}
