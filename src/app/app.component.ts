import { Component } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //currentBalance:string='100';
  //availableBalance:string;
  //displayOtherButtons:boolean=true;
  //accountNumber:string=null;
  //lenghofAccountNumber:number;
  //balanceButtonText:string='Balance Transaction';
  //enableSubmit:boolean=false;
  //enableClear:boolean=false;
  //myBackgroundImageUrl:string='http://www.annualreports.com/HostedData/CompanyHeader/NYSE_NCR.jpg';
 // accounttextbox:string;

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

//accountValidation(){
  //this.lenghofAccountNumber=this.accountNumber.length;
  //if(this.lenghofAccountNumber>=1&&this.lenghofAccountNumber<9){
    //this.enableClear=true;
    //if(this.lenghofAccountNumber>=4)
    //this.enableSubmit=true;
  //}
  //else{
    //if(this.lenghofAccountNumber>=9){
      //alert('lenght of account number should be less than or equal to 8 digits')
      //this.enableClear=false;
      //this.enableSubmit=false;
    //}
  //}
//}

//accountClear(){
  //this.lenghofAccountNumber=this.accountNumber.length;
  //if(this.lenghofAccountNumber<4){
    //this.enableSubmit=false;
    //if(this.lenghofAccountNumber<1)
    //this.enableClear=false;
  //}
//}

  //getBalance(){
//this.availableBalance= 'Available Balance in this account:'+ this.currentBalance;
  //}

  //clearBalance(){
    //this.availableBalance=null;
    //this.accountNumber=null;
    //this.enableSubmit=false;
  //}


}
