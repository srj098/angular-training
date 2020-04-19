import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceTxComponent } from '../BalanceTx/balance-tx.component';
import { WithdrawalTxComponent } from '../WithdrawalTx/withdrawal-tx.component';
import { DepositTxComponent } from '../DepositTx/deposit-tx.component';


const mainroutes: Routes = [
 {path:'balance',component:BalanceTxComponent},
 {path:'withdrawal',component:WithdrawalTxComponent},
 {path:'deposit',component:DepositTxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(mainroutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }