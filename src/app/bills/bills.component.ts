import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { BillsService } from '../services/bills.service';
import { BillsItem } from './billsitem';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
  providers:  [ AuthService ]
})
export class BillsComponent {
  displayAll: boolean = false;
  electricity: number;
  water: number;
  gas: number;
  other: number;
  bills: BillsItem[];
  billsForCount: BillsItem[];


  constructor(private billService : BillsService) {
    this.getItems();
    this.displayCount();
  }

  handleDisplayAllChange(event: any) {
    this.displayAll = event.target.checked;
    if (this.displayAll) {
      this.getItems();
    }else{
      this.getItems();
    }
  }

  async onCheckboxChange(item: BillsItem) {
    this.updateBill(item.bill_id, item.paid);

  }

  async getItems() {
    this.billService.getItems(this.displayAll).subscribe(bills => {
        this.bills = bills;
    });
    return this.bills;
  }

 async displayCount() {

  this.billService.displayCount().subscribe(bills => {
    this.billsForCount = bills;
  });
    return this.billsForCount;
  }

  async updateBill(billId: number, isPaid: boolean) {
    return this.billService.updateBill(billId, isPaid).subscribe(
      () => {
      this.getItems();
      this.displayCount();
        console.log('Bill status updated successfully.');
      },
      (error) => {
        console.error('Failed to update bill status:', error);
      }
    );

  }

  async addelectricityItem() {
    return this.billService.addelectricityItem(this.electricity).subscribe(
      () => {
      this.getItems();
      this.displayCount();
      this.electricity = null;
        console.log('Bill added successfully.');
      },
      (error) => {
        console.error('Failed to add bill :', error);
      }
    );
  }

  async addwaterItem() {
    return this.billService.addwaterItem(this.water).subscribe(
      () => {
        this.getItems();
        this.displayCount();
        this.water = null;
        console.log('Bill added successfully.');
      },
      (error) => {
        console.error('Failed to add bill:', error);
      }
    );
  }

  async addgasItem() {
    return this.billService.addgasItem(this.gas).subscribe(
      () => {
        this.getItems();
        this.displayCount();
        this.gas = null;
        console.log('Bill added successfully.');
      },
      (error) => {
        console.error('Failed to add bill :', error);
      }
    );
  }

  async addotherItem() {
      return this.billService.addotherItem(this.other).subscribe(
      () => {
        this.getItems();
        this.displayCount();
        this.other = null;
        console.log('Bill added successfully.');
      },
      (error) => {
        console.error('Failed to add bill :', error);
      }
    );
  }



}
