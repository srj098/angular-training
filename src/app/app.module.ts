import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import{MainRoutingModule} from "./MainPage/main-routing.module";
import{BalanceRoutingModule} from "./BalanceTx/balance-routing.module";
import { AppComponent } from './app.component';
import { BalanceTxComponent } from './BalanceTx/balance-tx.component';
import { HomepageComponent } from './MainPage/homepage.component';
import { WithdrawalTxComponent } from './WithdrawalTx/withdrawal-tx.component';
import { DepositTxComponent } from './DepositTx/deposit-tx.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceTxComponent,
    HomepageComponent,
    WithdrawalTxComponent,
    DepositTxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainRoutingModule,
    BalanceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
