import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {firstValueFrom} from "rxjs";
import {Chart} from "chart.js/auto";
import {User} from "../../shared/models/user.model";
import {Invoice} from "../../shared/models/invoice.model";
import {InvoiceService} from "../../shared/invoice.service";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {

  private authService = inject(AuthService);
  private invoiceService = inject(InvoiceService);
  protected chart: any;

  @ViewChild('barChart')
  private barChart!: ElementRef;

  @ViewChild('barChartSmall')
  private barChartSmall!: ElementRef;

  ngOnInit() {
    this.invoiceService.getUserInvoices(this.authService.userId).subscribe(invoices => this.getData(invoices));
  }

  private loadChart(labels: string[], smallLabels: string[], data: any[]) {
    Chart.defaults.color = '#fff';

    const chartData = {
      labels: labels,
      datasets: [{
        showLabel: false,
        data: data,
        backgroundColor: ['#BCEF7D', '#54B42E', '#417324']
      }],
    };

    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    new Chart(this.barChartSmall.nativeElement, {
      type: 'bar',
      data: {...chartData, labels: smallLabels},
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    this.barChart.nativeElement.classList = "d-none d-sm-block";
    this.barChartSmall.nativeElement.classList = "d-sm-none";
  }

  private getData(invoiceList: Invoice[]) {
    const monthMap = new Map();
    invoiceList.forEach(invoice => {
      const date = new Date(invoice.date);
      const month = date.getFullYear() * 100 + date.getMonth();
      if (monthMap.has(month)) {
        monthMap.set(month, monthMap.get(month) + invoice.quantity);
      } else {
        monthMap.set(month, invoice.quantity);
      }
    });

    const monthArray = Array.from(monthMap.keys()).sort();
    this.loadChart(
      monthArray.map(month => this.monthYearToString(month)),
      monthArray.map(month => this.monthYearToSmallString(month)),
      monthArray.map(month => monthMap.get(month))
    );
  }


  monthYearToString(monthYearNumber: number) {
    const month = monthYearNumber.toString().substring(4);
    const year = monthYearNumber.toString().substring(0, 4);
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${months[+month]} ${year}`;
  }

  monthYearToSmallString(monthYearNumber: number) {
    const month = monthYearNumber.toString().substring(4);
    const year = monthYearNumber.toString().substring(0, 2);
    return `${+month + 1}/${year}`;
  }
}
