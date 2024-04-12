import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent implements OnInit {
  protected form !: FormGroup;
  
  private formBuilder = inject(FormBuilder);
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", Validators.required],
      check: ["", Validators.requiredTrue] 
    });
  }

  check() {
    this.form.updateValueAndValidity();
    console.log(this.form.valid);
  }
}