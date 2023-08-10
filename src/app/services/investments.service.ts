import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  baseUrl:string = "http://localhost:5280/api/investments/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,public authService: AuthService){}

  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

  }

  adddollarInvest(dollar: number): Observable<any>  {
    if(dollar!=null) {

      const body = { user_id: this.user_Id(), invest_type: "dollar", amount: dollar };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertInvest",body, {headers} );
    }
    return null ;
  }


  addeuroInvest(euro: number): Observable<any>  {
    if(euro!=null) {

      const body = { user_id: this.user_Id(), invest_type: "euro", amount: euro };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertInvest",body, {headers} );
    }
    return null ;
  }


  addxauInvest(xau: number): Observable<any>  {
    if(xau!=null) {

      const body = { user_id: this.user_Id(), invest_type: "XAU", amount: xau };
      const headers =new HttpHeaders({
        'Content-Type': "application/json"
      });

      return this.http.put(this.baseUrl + "InsertInvest",body, {headers} );
    }
    return null ;
  }



}
