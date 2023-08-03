import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = "http://localhost:5280/api/users/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;


  constructor(private http: HttpClient){}

  login(model: any){
    return this.http.post(this.baseUrl+'login',model).pipe(
      map((response:any) => {
        const result = response;
        if(result){
          localStorage.setItem("token", result.token);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl+'register',model);
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

}
