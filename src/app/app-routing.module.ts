import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'bills', component: BillsComponent, canActivate: [AuthGuard] },
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
  { path: 'investments', component: InvestmentsComponent , canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'wallet', component: WalletComponent , canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
