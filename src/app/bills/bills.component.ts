import { Component } from '@angular/core';
import { BillsModel } from '../billsmodel';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent {
  displayAll: boolean = false;
  electricity: number;
  water: number;
  gas: number;
  other: number;
  
  constructor() {}

  billsmodel = new BillsModel();
 
  getItems() {
    if(this.displayAll) {
      return this.billsmodel.items;
    }
    return this.billsmodel.items.filter(item => !item.ispaid);
  }

  displayCount() {
    return this.billsmodel.items.filter(i=>i.ispaid).length;
  }

  addelectricityItem() {
    if(this.electricity!=null) {
      this.billsmodel.items.push({ type: "electricity", price: this.electricity, ispaid: false});
      this.electricity = null;
    }
  }

  addwaterItem() {
    if(this.water!=null) {
      this.billsmodel.items.push({ type: "water", price: this.water, ispaid: false});
      this.water = null;
    }
  }

  addgasItem() {
    if(this.gas!=null) {
      this.billsmodel.items.push({ type: "gas", price: this.gas, ispaid: false});
      this.gas = null;
    }
  }

  addotherItem() {
    if(this.other!=null) {
      this.billsmodel.items.push({ type: "other", price: this.other, ispaid: false});
      this.other = null;
    }
  }
  
}
