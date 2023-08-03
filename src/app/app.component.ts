import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'project';
  jwtHelper = new JwtHelperService();
  profile: string = "username";

  constructor(public authService: AuthService){}

  username() {
    const token = localStorage.getItem("token");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);

    if(token){
      return this.authService.decodedToken.unique_name;
    }
    return this.profile;
  }


  logout(): void{
    localStorage.removeItem("token");
  }
}
