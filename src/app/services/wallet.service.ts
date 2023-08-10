import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
//import { BillsItem } from '../bills/billsitem';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  baseUrl:string = "http://localhost:5280/api/";
  jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient,public authService: AuthService) { }

  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

  }

  getUserIncome() : Observable<any> {
    debugger;

    let queryParams = new HttpParams().append("user_id", this.user_Id());
    return this.http.get<any>(this.baseUrl + 'Users/GetUserById' ,{params:queryParams});

  }

  getNetWorth() : Observable<any>{

    let queryParams = new HttpParams().append("user_id", this.user_Id());
    var e = this.http.get<any>(this.baseUrl + 'expenses/GetExpensesDaily', {params:queryParams});
    var b = this.http.get<any>(this.baseUrl + 'bills/GetPaidBillsDaily', {params:queryParams});
    var i = this.http.get<any>(this.baseUrl + 'investments/GetInvestmentsDaily', {params:queryParams});

    return forkJoin([e, b, i]);
  }
}
