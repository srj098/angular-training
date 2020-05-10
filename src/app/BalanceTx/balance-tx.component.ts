import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-tx',
  templateUrl: './balance-tx.component.html',
  styleUrls: ['./balance-tx.component.css']
})
export class BalanceTxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentBalance:string='100';
  availableBalance:string;
  //displayOtherButtons:boolean=true;
  accountNumber:string=null;
  lenghofAccountNumber:number;
  //balanceButtonText:string='Balance Transaction';
  enableSubmit:boolean=false;
  enableClear:boolean=false;
  //myBackgroundImageUrl:string='http://www.annualreports.com/HostedData/CompanyHeader/NYSE_NCR.jpg';
  accounttextbox:string;

 // balancebutton(){
//this.displayOtherButtons=!this.displayOtherButtons;
//if(this.balanceButtonText=='Balance Transaction'){
    //this.balanceButtonText='Home';
    //this.accounttextbox='Please Enter Account Number in textbox';

//}
  //else{
    //this.balanceButtonText='Balance Transaction';
    //this.enableSubmit=false;
    //this.enableClear=false;
    //this.availableBalance=null;
    //this.accountNumber=null;
  //}
//}

accountValidation(){
  this.lenghofAccountNumber=this.accountNumber.length;
  if(this.lenghofAccountNumber>=1&&this.lenghofAccountNumber<9){
    this.enableClear=true;
    if(this.lenghofAccountNumber>=4)
    this.enableSubmit=true;
  }
  else{
    if(this.lenghofAccountNumber>=9){
      alert('lenght of account number should be less than or equal to 8 digits')
      this.enableClear=true;
      this.enableSubmit=false;
    }
  }
}

accountClear(){
  this.lenghofAccountNumber=this.accountNumber.length;
  if(this.lenghofAccountNumber<4){
    this.enableSubmit=false;
    if(this.lenghofAccountNumber<1)
    this.enableClear=false;
  }
}

  getBalance(){
   this.availableBalance= 'Available Balance in this account:'+ this.currentBalance;

  }

  clearBalance(){
  this.availableBalance=null;
    this.accountNumber=null;
    this.enableSubmit=false;
    this.enableClear=false;
  }

}
