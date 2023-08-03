import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BillsModel } from '../billsmodel';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  baseUrl:string = "http://localhost:5280/api/bills/";

  constructor(private http: HttpClient){}

  billsmodel = new BillsModel();


  getItems(displayAll: boolean) {
    if(displayAll) {
      return this.billsmodel.items;
    }
    return this.billsmodel.items.filter(item => !item.ispaid);
  }

  displayCount() {
    return this.billsmodel.items.filter(i=>i.ispaid).length;
  }

  addelectricityItem(electricity: number) {
    if(electricity!=null) {
      this.billsmodel.items.push({ type: "electricity", price: electricity, ispaid: false});
      electricity = null;
    }
  }

  addwaterItem(water: number) {
    if(water!=null) {
      this.billsmodel.items.push({ type: "water", price: water, ispaid: false});
      water = null;
    }
  }

  addgasItem(gas: number) {
    if(gas!=null) {
      this.billsmodel.items.push({ type: "gas", price: gas, ispaid: false});
      gas = null;
    }
  }

  addotherItem(other: number) {
    if(other!=null) {
      this.billsmodel.items.push({ type: "other", price: other, ispaid: false});
      other = null;
    }
  }

}
