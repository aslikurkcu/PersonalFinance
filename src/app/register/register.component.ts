import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};

  constructor(private authService: AuthService){}

  register(){
    this.authService.register(this.model).subscribe(()=>{
      console.log("done");
    }, error => {
      console.log(error);
    });
  }

}
