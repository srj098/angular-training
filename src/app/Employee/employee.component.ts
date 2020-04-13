import {Component} from '@angular/core';

@Component({
    selector:'employee-comp',
    templateUrl: './employee.component.html'
})

export class EmployeeCompoment{
    FirstName='Shilpa';
    SecondName='Kulkarni';
    Gender='F';
   ShowDetails:boolean=false;
toggleDetails(){
    this.ShowDetails=!this.ShowDetails;
}

}