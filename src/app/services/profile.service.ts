import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl:string = "http://localhost:5280/api/users/";
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,public authService: AuthService) { }

  user_Id() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    return this.authService.decodedToken.nameid;

  }

  updateUser(name: string, email: string, username: string, income: number, phoneNumber: string): Observable<any> {

    const url = this.baseUrl + "UpdateUser";
    const body = { Id: this.user_Id(), Name: name, Email: email, UserName: username, Income: income, PhoneNumber: phoneNumber};

    const headers =new HttpHeaders({
      'Content-Type': "application/json"
    });

    return this.http.put(url, body, {headers});
  }



}
