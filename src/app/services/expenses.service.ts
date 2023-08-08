import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  baseUrl:string = "http://localhost:5280/api/expenses/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,public authService: AuthService){}

  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

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
