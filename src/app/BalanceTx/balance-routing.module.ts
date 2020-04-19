import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


const balanceroutes: Routes = [
  {path:'appComponent',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(balanceroutes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
