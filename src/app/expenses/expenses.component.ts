import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  public chart: any;

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Shopping','Transportation','Housing','Food&Drink','Entertainment', 'Bills'],
	       datasets: [{
    label: 'Dataset',
    data: [240, 100, 432, 253, 34,78],
    backgroundColor: [
      'lightblue',
      '#F2EE9D',
			'gray',
      'pink',
      'blue',
      'lightgreen',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio: 1.5
      }

    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
