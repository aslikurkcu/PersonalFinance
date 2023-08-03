import { Component } from '@angular/core';
import { BillsModel } from '../billsmodel';
import { BillsService } from '../services/bills.service';
import { BillsItem } from '../billsitem';

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

  constructor(private billService : BillsService) {}


  getItems() {
    return this.billService.getItems(this.displayAll);
  }

  displayCount() {
    return this.billService.displayCount();
  }

  addelectricityItem() {
    return this.billService.addelectricityItem(this.electricity);
  }

  addwaterItem() {
    return this.billService.addwaterItem(this.water);
  }

  addgasItem() {
    return this.billService.addgasItem(this.gas);
  }

  addotherItem() {
    return this.billService.addotherItem(this.other);
  }



}
