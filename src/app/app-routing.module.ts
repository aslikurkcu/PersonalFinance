import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'bills', component: BillsComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wallet', component: WalletComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
