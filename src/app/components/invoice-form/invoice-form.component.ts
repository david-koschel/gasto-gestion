import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthService} from "../../shared/auth.service";
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Invoice} from "../../shared/models/invoice.model";
import {NgIf} from "@angular/common";
import {validateCIF} from "../../shared/validators";

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  protected form!: FormGroup;
  protected invoice: Invoice | undefined;

  ngOnInit() {
    const invoiceParam = this.route.snapshot.params["id"];
    if (invoiceParam) {
      if (invoiceParam === "new") {
        this.setNewData();
      } else {
        this.setData(+invoiceParam);
      }
    } else {
      this.router.navigate(["invoice-list"]);
    }
  }

  setNewData() {
    const user = this.authService.getCurrentUser();
    this.form = this.formBuilder.group({
      paymentType: ["", Validators.required],
      commerce: ["", Validators.required],
      cif: ["", validateCIF],
      concept: ["", Validators.required],
      expenseType: ["", Validators.required],
      date: ["", Validators.required],
      quantity: ["", [Validators.required, Validators.min(0)]],
      description: [""]
    });
  }

  setData(invoiceIndex: number) {
    this.authService.getCurrentUser().subscribe(user => {
        this.invoice = user.invoiceList.find(invoice => invoice.invoiceNumber === invoiceIndex)!;
        this.form = this.formBuilder.group({
          paymentType: [this.invoice.paymentType, Validators.required],
          commerce: [this.invoice.commerce, Validators.required],
          cif: [this.invoice.cif, validateCIF],
          concept: [this.invoice.concept, Validators.required],
          expenseType: [this.invoice.expenseType, Validators.required],
          date: [this.invoice.date, Validators.required],
          quantity: [this.invoice.quantity, [Validators.required, Validators.min(0)]],
          description: [this.invoice.description]
        });
      }
    );
  }

  saveInvoice() {
    this.form.updateValueAndValidity();
  }
}
