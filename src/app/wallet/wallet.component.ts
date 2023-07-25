import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["1", "2", "3", "4", "5", "6", "7",
          "8", "9", "10", "11", "12", "13", "14",
          "15", "16", "17", "18", "19", "20", "21",
          "22", "23", "24", "25", "26", "27", "28",
          "29", "30", "31"],
        datasets: [
          {
            label: "Net Worth",
            data: ['167', '276', '372', '79', '92', '574', '873',
            '466', '576', '572', '79', '92', '579', '485',
            '465', '589', '650', '523', '48', '574', '862',
            '465', '347', '572', '79', '92', '350', '573',
            '462', '576', '572'],
            backgroundColor: '#ACB1D6',
            borderColor: "#73777B"
          }
        ]
      },
      options: {
        aspectRatio: 1.5
      }

    });
  }

}