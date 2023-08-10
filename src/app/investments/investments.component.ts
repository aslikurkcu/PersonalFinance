import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { InvestmentsService } from '../services/investments.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {

  constructor(private investmentsService : InvestmentsService ) { }

  public linechart: any;
  dollar : number;
  euro : number;
  xau : number;


  ngOnInit(): void {
    this.createChart();
  }


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


  async adddollarInvest() {
    return this.investmentsService.adddollarInvest(this.dollar).subscribe(
      () => {
        this.dollar= null;
        console.log('Investment added successfully.');
      },
      (error) => {
        console.error('Failed to add investment:', error);
      }
    );
  }

  async addeuroInvest() {
    return this.investmentsService.addeuroInvest(this.euro).subscribe(
      () => {
        this.euro= null;
        console.log('Investment added successfully.');
      },
      (error) => {
        console.error('Failed to add investment:', error);
      }
    );
  }

  async addxauInvest() {
    return this.investmentsService.addxauInvest(this.xau).subscribe(
      () => {
        this.xau= null;
        console.log('Investment added successfully.');
      },
      (error) => {
        console.error('Failed to add investment:', error);
      }
    );
  }

}
