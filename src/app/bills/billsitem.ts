export class BillsItem {
  bill_Type: string;
  amount: number;
  paid: boolean;
  bill_id: number;

  constructor(bill_Type: string, amount: number, paid: boolean, bill_id : number){
    this.bill_Type = bill_Type;
    this.amount = amount;
    this.paid = paid;
    this.bill_id = bill_id;

  }
}

