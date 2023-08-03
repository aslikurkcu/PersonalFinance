import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { AppRoutingModule } from './app-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    WalletComponent,
    ExpensesComponent,
    InvestmentsComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthGuard],
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
