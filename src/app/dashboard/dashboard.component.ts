import { Component,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { WalletService } from '../services/wallet.service';
import { BillsService } from '../services/bills.service';
import { BillsItem } from '../bills/billsitem';
import { InvestmentsService } from '../services/investments.service';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'ng-chart';
  expenseschart: any = [];
  investchart: any = [];
  expenseschartData: any[] = [];
  investchartData: any[] = [];
  totalLoan : number = 0;
  income : number = 0;
  networthnow : number = 0;
  totalInvestment : number= 0;
  bills: BillsItem[];

  constructor(private walletService : WalletService, private expenseService : ExpensesService,private billService : BillsService, private investmentService : InvestmentsService) {
    this.getNetWorth();
    this.getUnpaidBills();
    this.getIncome();
    this.getInvestmentsMonthly();
    this.getExpensesMonthly();
  }


  updateChart(array :any, chart: any) {

    chart.data.datasets[0].data = array;
    chart.update();
  }

  getIncome() {
    this.walletService.getUser().subscribe(
      (data) => {
        this.income = data.income;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  async getUnpaidBills() {
    this.billService.getItems(true).subscribe(bills => {
        this.bills = bills;
        for(var item of bills){
          if(item.paid == false){
            this.totalLoan += item.amount;
          }
        }
    });
  }

  getNetWorth(){
    this.walletService.getNetWorth().subscribe(
      ([e, b, i]) => {
        const combinedList = [];

        for (let a = 0; a < 31; a++) {
          const sum = e[a] + b[a] + i[a];
          combinedList.push(sum);
        }
        var incomeforChart = this.income;
        const netWorth = [];

        for (let a = 0; a < 31; a++) {
          incomeforChart = incomeforChart - combinedList[a];
          netWorth.push(incomeforChart);
        }
        this.networthnow = netWorth[30];

      },
      error => {
        console.error('Hata oluştu:', error);
      }

    );
  }

  getInvestmentsMonthly() {
    this.investmentService.getInvestmentsMonthly().subscribe(
      (data) => {
        for(var item of data){
          this.totalInvestment += item;
          this.investchartData.push(item);
        }
        this.updateChart(this.investchartData,this.investchart);
      });
  }

  getExpensesMonthly() {
    this.expenseService.getExpensesMonthly().subscribe(
      (data) => {
        for(var item of data){
          this.expenseschartData.push(item);
        }
        this.updateChart(this.expenseschartData,this.expenseschart);

      });
  }


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
