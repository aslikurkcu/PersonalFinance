import { Component,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'ng-chart';
  expenseschart: any = [];
  investchart: any = [];

  constructor() {}

  ngOnInit() : void{
    this.expenseschart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Monthly Expenses',
            data: [12, 19, 3, 5, 2, 3,7,8,6,2,9,7],
            borderWidth: 3,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    this.investchart = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Monthly Investments',
            data: [12, 19, 3, 5, 2, 3,7,8,6,2,9,7],
            borderWidth: 3,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  }


}
