import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ExpenseItem } from '../expenses/expenseItem';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {



  baseUrl:string = "http://localhost:5280/api/expenses/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,public authService: AuthService){


  }

  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

  }

  getItems() : Observable<ExpenseItem[]> {

    let queryParams = new HttpParams().append("user_id", this.user_Id());
    var e = this.http.get<ExpenseItem[]>(this.baseUrl +'GetExpenses',{params:queryParams});
    var b = this.http.get<ExpenseItem[]>("http://localhost:5280/api/bills/GetPaidBills",{params:queryParams});


      return forkJoin([e, b]).pipe(
        map(([e, b]) => [...e, ...b])
      );

  }





  addshoppingItem(shopping: number): Observable<any>  {
    if(shopping!=null) {

      const body = { user_id: this.user_Id(), expense_type: "shopping", amount: shopping };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertExpense",body, {headers} );
    }
    return null ;
  }

  addtransportationItem(transportation: number): Observable<any>  {
    if(transportation!=null) {

      const body = { user_id: this.user_Id(), expense_type: "transportation", amount: transportation };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertExpense",body, {headers} );
    }
    return null ;
  }

  addhousingItem(housing: number): Observable<any>  {
    if(housing!=null) {

      const body = { user_id: this.user_Id(), expense_type: "housing", amount: housing };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertExpense",body, {headers} );
    }
    return null ;
  }

  addfoodDrinkItem(foodDrink: number): Observable<any>  {
    if(foodDrink!=null) {

      const body = { user_id: this.user_Id(), expense_type: "foodDrink", amount: foodDrink };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertExpense",body, {headers} );
    }
    return null ;
  }

  addentertainmentItem(entertainment: number): Observable<any>  {
    if(entertainment!=null) {

      const body = { user_id: this.user_Id(), expense_type: "entertainment", amount: entertainment };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertExpense",body, {headers} );
    }
    return null ;
  }




}
