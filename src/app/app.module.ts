import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { AppRoutingModule } from './app-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    WalletComponent,
    ExpensesComponent,
    InvestmentsComponent,
    ProfileComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: 
    [AppComponent,
    BillsComponent,
    WalletComponent,
    ExpensesComponent,
    InvestmentsComponent,
    ProfileComponent,
    DashboardComponent
]
})
export class AppModule { }
