import { BillsItem } from './billsitem';

export class BillsModel {
  items: BillsItem[];

  constructor() {
    this.items = [
      { type: 'electricity', price: 56.89, ispaid: false },
      { type: 'water', price: 76.89, ispaid: false },
      { type: 'gas', price: 45.99, ispaid: false },
      { type: 'other', price: 81.5, ispaid: false },
      { type: 'other', price: 71.5, ispaid: true },
    ];
  }
}
