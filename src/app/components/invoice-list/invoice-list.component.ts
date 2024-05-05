import {Component, inject, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {Invoice} from "../../shared/models/invoice.model";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {InvoiceService} from "../../shared/services/invoice.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [TableModule, ButtonModule, RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit {

  authService = inject(AuthService);
  invoiceService = inject(InvoiceService);

  products: Invoice[] = [];

  ngOnInit() {
    this.invoiceService.getUserInvoices(this.authService.userId).subscribe(res => this.products = res);
  }

  deleteInvoice(id: string) {
    this.invoiceService.deleteInvoice(this.authService.userId, id);
  }
}
