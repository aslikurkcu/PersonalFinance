import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name : string;
  email : string;
  username : string;
  income : number;
  phoneNumber : string;


constructor( private walletService : WalletService, private profileService : ProfileService){
  this.getUserInfo();
}

getUserInfo() {
  this.walletService.getUser().subscribe(
    (data) => {
      this.name = data.name;
      this.email = data.email;
      this.username = data.userName;
      this.income = data.income;
      this.phoneNumber = data.phoneNumber;
      },
    (error) => {
      console.error('Error:', error);
    }
  );
}



async updateUser() {
  return this.profileService.updateUser(this.name, this.email, this.username, this.income, this.phoneNumber).subscribe(
    () => {
      console.log('User updated successfully.');
    },
    (error) => {
      console.error('Failed to update user:', error);
    }
  );
}




}
