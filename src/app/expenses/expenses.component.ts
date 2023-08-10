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
  shopping: number;
  transportation: number;
  housing: number;
  foodDrink: number;
  entertainment: number;
  bill: number;
  expenses: ExpenseItem[];
  chartData: number[];


constructor(private expensesService : ExpensesService) {}


getItems(){
    this.expensesService.getItems().subscribe(expenses => {
      this.expenses = expenses;
      this.createData(this.expenses);
      this.updateChart(this.chartData);

    });
  }

  createData( expenseList : ExpenseItem[]){

    var shopping = 0;
    var transportation = 0;
    var housing = 0;
    var foodDrink = 0;
    var entertainment = 0;
    var bill = 0;

    for(var item of expenseList){
      if(item.expense_type == "shopping"){
        shopping += item.amount;

      }else if(item.expense_type == "transportation"){
        transportation += item.amount;

      }else if(item.expense_type == "housing"){
        housing += item.amount;

      }else if(item.expense_type == "foodDrink"){
        foodDrink += item.amount;

      }else if(item.expense_type == "entertainment"){
        entertainment += item.amount;

      }else if(item.expense_type == "bill"){
        bill += item.amount;

      }
    }
    this.chartData = [shopping,transportation,housing,foodDrink,entertainment,bill];

  }

  updateChart(array :any) {

    this.chart.data.datasets[0].data = array;
    this.chart.update();
  }


  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Shopping','Transportation','Housing','Food&Drink','Entertainment', 'Bills'],
	       datasets: [{
    label: 'Dataset',
    data: [10,120,150,420,410,100],
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


  async addtransportationItem() {
    return this.expensesService.addtransportationItem(this.transportation).subscribe(
      () => {
        this.getItems();
        this.transportation= null;
        console.log('Expense added successfully.');
      },
      (error) => {
        console.error('Failed to add expense:', error);
      }
    );
  }

  async addhousingItem() {
    return this.expensesService.addhousingItem(this.housing).subscribe(
      () => {
        this.getItems();
        this.housing= null;
        console.log('Expense added successfully.');
      },
      (error) => {
        console.error('Failed to add expense:', error);
      }
    );
  }

  async addfoodDrinkItem() {
    return this.expensesService.addfoodDrinkItem(this.foodDrink).subscribe(
      () => {
        this.getItems();
        this.foodDrink= null;
        console.log('Expense added successfully.');
      },
      (error) => {
        console.error('Failed to add expense:', error);
      }
    );
  }

  async addentertainmentItem() {
    return this.expensesService.addentertainmentItem(this.entertainment).subscribe(
      () => {
        this.getItems();
        this.entertainment= null;
        console.log('Expense added successfully.');
      },
      (error) => {
        console.error('Failed to add expense:', error);
      }
    );
  }

  async addshoppingItem() {
    return this.expensesService.addshoppingItem(this.shopping).subscribe(
      () => {
        this.getItems();
        this.shopping= null;
        console.log('Expense added successfully.');
      },
      (error) => {
        console.error('Failed to add expense:', error);
      }
    );
  }

  ngOnInit(): void {
    this.createChart();
    this.getItems();

  }

}
