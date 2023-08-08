import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BillsModel } from '../billsmodel';
import { BillsItem } from '../billsitem';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  baseUrl:string = "http://localhost:5280/api/bills/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,public authService: AuthService){}

  billsmodel = new BillsModel();


  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

  }

  getItems(displayAll: Boolean) : Observable<BillsItem[]> {

    let queryParams = new HttpParams().append("user_id",this.user_Id());
    var b = this.http.get<BillsItem[]>(this.baseUrl +'getbills',{params:queryParams});

    if(displayAll){
      return b;
    }
    return b.pipe(map((items: BillsItem[]) => items.filter((item: BillsItem) => !item.paid)));

  }


  displayCount() : Observable<BillsItem[]> {

    let queryParams = new HttpParams().append("user_id",this.user_Id());
    var b = this.http.get<BillsItem[]>(this.baseUrl +'getbills',{params:queryParams});

    return b.pipe(map((items: BillsItem[]) => items.filter((item: BillsItem) => item.paid)));

  }

  updateBill(billId: number, isPaid: boolean): Observable<any> {

    const url = this.baseUrl + "UpdateBill";
    const body = { Bill_id: billId, Paid: isPaid };
    //data = JSON.stringify(data);

    const headers =new HttpHeaders({
      'Content-Type': "application/json"
    });
    //let queryParams = new HttpParams().append("billId", billId).append("ispaid", isPaid)

    return this.http.put(url, body, {headers});
  }


  addelectricityItem(electricity: number): Observable<any>  {
    if(electricity!=null) {

      const body = { user_id: this.user_Id(), bill_type: "electricity", amount: electricity };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertBill",body, {headers} );
    }
    return null ;
  }

  addwaterItem(water: number) : Observable<any>  {
    if(water!=null) {

      const body = { user_id: this.user_Id(), bill_type: "water", amount: water };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertBill",body, {headers} );
    }
    return null ;
  }

  addgasItem(gas: number) : Observable<any>  {
    if(gas!=null) {

      const body = { user_id: this.user_Id(), bill_type: "gas", amount: gas };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertBill",body, {headers} );
    }
    return null ;
  }

  addotherItem(other: number) : Observable<any>  {
    if(other!=null) {

      const body = { user_id: this.user_Id(), bill_type: "other", amount: other };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertBill",body, {headers} );
    }
    return null ;
  }

}
