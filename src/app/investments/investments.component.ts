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
  totalDollar : number = 0;
  totalEuro : number = 0;
  totalXau : number = 0;
  investments : any  = {};
  dollarList : any[] = [];
  euroList : any[] = [];
  xauList: any[] = [];


  ngOnInit(): void {
    this.createChart();
    this.getInvestmentsByType();
  }


  createChart(){

    this.linechart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7",
        "8", "9", "10", "11", "12", "13", "14",
        "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28",
        "29", "30", "31"],
	       datasets: [
          {
            label: "Dollar",
            data: ['100','100', '120', '130', '130',
								 '130', '135', '135','140','140', '140', '140', '140',
								 '200', '200', '220','220','220', '250', '250', '250',
								 '250', '250', '250','450','450', '570', '570', '570',
								 '570', '570'],
            backgroundColor: '#6528F7'
          },
          {
            label: "Euro",
            data: ['50','50', '50', '50', '130',
            '130', '130', '130','170','170', '250', '250', '250',
            '250', '250', '270','270','270', '270', '270', '270',
            '300', '300', '300','300','300', '430', '430', '500',
            '570', '570'],
            backgroundColor: '#9AC5F4'
          } ,
          {
            label: "XAU",
            data:['70','120', '120', '120', '180',
            '180', '180', '180','200','200', '200', '200', '260',
            '260', '300', '300','300','300', '300', '300', '300',
            '350', '350', '350','350','350', '350', '410', '410',
            '570', '570'],
            backgroundColor: '#FF9B9B'
          }
        ]
      },
      options: {
        aspectRatio:2
      }

    });
  }

  getInvestmentsByType(){
    return this.investmentsService.getInvestmentsByType().subscribe(data => {
      this.investments = data;
       for (var item of data.dollar){
        this.totalDollar += item;
        this.dollarList.push(this.totalDollar);
      }
      for (var item of data.euro){
        this.totalEuro += item;
        this.euroList.push(this.totalEuro);
      }
      for (var item of data.XAU){
        this.totalXau += item;
        this.xauList.push(this.totalXau);
      }
      this.updateChart(this.dollarList,this.euroList,this.xauList);
    });
  }

  updateChart(array1 :any, array2 :any, array3 :any) {

    this.linechart.data.datasets[0].data = array1;
    this.linechart.data.datasets[1].data = array2;
    this.linechart.data.datasets[2].data = array3;
    this.linechart.update();
  }

  async adddollarInvest() {
    return this.investmentsService.adddollarInvest(this.dollar).subscribe(
      () => {
        this.dollar= null;
        this.getInvestmentsByType();
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
        this.getInvestmentsByType();
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
        this.getInvestmentsByType();
        console.log('Investment added successfully.');
      },
      (error) => {
        console.error('Failed to add investment:', error);
      }
    );
  }

}
