import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public linechart: any;

  createChart(){
  
    this.linechart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Dollar",
            data: ['467','576', '595', '675', '750',
								 '720', '850', '986'],
            backgroundColor: '#6528F7'
          },
          {
            label: "Euro",
            data: ['340', '620', '670', '690', '710',
									 '790', '830', '1100'],
            backgroundColor: '#9AC5F4'
          } ,
          {
            label: "XAU",
            data: ['140', '320', '400', '480', '550',
									 '660', '750', '870'],
            backgroundColor: '#FF9B9B'
          }  
        ]
      },
      options: {
        aspectRatio:2
      }
      
    });
  }

}
