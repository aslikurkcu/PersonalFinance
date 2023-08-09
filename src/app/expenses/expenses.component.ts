import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ExpensesService } from '../services/expenses.service';
import { ExpenseItem } from './expenseItem';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  public chart: any;
  expense : any;
  shopping: number;
  transportation: number;
  housing: number;
  foodDrink: number;
  entertainment: number;
  bill: number;
  expenses: ExpenseItem[]  = [];
  chartData: number[] = [];

  constructor(private expensesService : ExpensesService) {



  }

  async display(){
    debugger;
    await this.getItems();
    this.createData(this.expenses);
    this.createChart();

  }


 async getItems() {
    debugger;
    this.expensesService.getItems().subscribe(expenses => {
      this.expenses = expenses;
    });
  }

  createData( expenseList : ExpenseItem[]){
  this.shopping = 0;
  this.transportation= 0;
  this.housing= 0;
  this.foodDrink = 0;
  this.entertainment = 0;
  this.bill = 0;

    for(var item of expenseList){
      if(item.expense_type == "shopping"){
        this.shopping += item.amount;

      }else if(item.expense_type == "transportation"){
        this.transportation += item.amount;

      }else if(item.expense_type == "housing"){
        this.housing += item.amount;

      }else if(item.expense_type == "foodDrink"){
        this.foodDrink += item.amount;

      }else if(item.expense_type == "entertainment"){
        this.entertainment += item.amount;

      }else if(item.expense_type == "bill"){
        this.bill += item.amount;

      }
    }

    this.chartData = [this.shopping,this.transportation,this.housing,this.foodDrink,this.entertainment,this.bill];

  }


  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Shopping','Transportation','Housing','Food&Drink','Entertainment', 'Bills'],
	       datasets: [{
    label: 'Dataset',
    data: this.chartData,
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
    this.display();


  }

}
