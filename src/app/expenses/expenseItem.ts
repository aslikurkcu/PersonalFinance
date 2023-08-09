export class ExpenseItem {
  expense_type: string;
  amount: number;

  constructor(expense_type: string, amount: number){
    this.expense_type = expense_type;
    this.amount = amount;

  }
}

