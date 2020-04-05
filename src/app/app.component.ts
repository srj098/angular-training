import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  binding:string='NCR Employee Information Form';
  htmllink='https://www.ncr.com/';
  Logo='https://lh3.googleusercontent.com/cqK12XTJgqhFH13wqEUh224-ItIyxqkvFSU8k9-h6u-A4y6yHs_saID8KFB1OTPYtrk=s180-rw';
  alttext='ncr.com';
  size1='font-size:150%';
  onSubmit(){
    alert('Submit');
  }
  fname:string='Shilpa';
  lname:string='Kulkarni';

}
