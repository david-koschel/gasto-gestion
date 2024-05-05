import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [TableModule ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
products = [
  {comercio: "Amazon", concepto: "Ordenador nuevo", tipogasto: "Personal", fecha: "10-02-1999", precio: 100},
  {comercio: "Zara", concepto: "Calcetines", tipogasto: "Ropa", fecha: "21-03-1873", precio: 30},
  {comercio: "Mercadona", concepto: "Galletas", tipogasto: "Comida", fecha: "31-01-1345", precio: 5},
];


}
