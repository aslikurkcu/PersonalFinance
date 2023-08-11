import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ExpensesService } from '../services/expenses.service';
import { ExpenseItem } from '../expenses/expenseItem';
import { AuthService } from '../services/auth.service';
import { BillsService } from '../services/bills.service';
import { BillsItem } from '../bills/billsitem';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private expensesService : ExpensesService, private billService : BillsService, private walletService : WalletService) { }

  ngOnInit(): void {
    this.createChart();
    this.getNetWorth();
    this.getTotalExpense();
    this.getUnpaidBills();
    this.getIncome();

  }
  public chart: any;
  expenses : ExpenseItem[];
  totalExpense : number = 0;
  totalLoan : number = 0;
  income : number = 0;
  networthnow : number = 0;
  bills: BillsItem[];
  chartData: number[];


  getTotalExpense(){
    this.expensesService.getItems().subscribe(expenses => {
      this.expenses = expenses;
      for(var item of expenses){
        this.totalExpense += item.amount;
      }
    });
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
        this.updateChart(netWorth);


      },
      error => {
        console.error('Hata oluştu:', error);
      }

    );
  }

  updateChart(array :any) {

    this.chart.data.datasets[0].data = array;
    this.chart.update();
  }



  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7",
          "8", "9", "10", "11", "12", "13", "14",
          "15", "16", "17", "18", "19", "20", "21",
          "22", "23", "24", "25", "26", "27", "28",
          "29", "30", "31"],
        datasets: [
          {
            label: "Net Worth",
            data:
            [12000, 11500, 11450, 11400, 11100, 11000, 10950, 10890, 10600, 10360, 6300, 6190, 6080, 5985, 5870, 5790,
            5600, 5350, 5240, 5050, 4860, 4750, 4620, 4300, 3830, 3300, 3150, 2860, 2400, 2210, 1860 ],
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
