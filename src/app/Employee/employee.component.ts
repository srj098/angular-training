import {Component} from '@angular/core';
import {EmployeeService} from '../../app/Service/employee.service';

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
myOrg:string;
getOrg($event){
this.myOrg = $event;
}

employeeDetails:any;
constructor (private employeeService:EmployeeService){}

ngOnInit(){
    this.employeeDetails=this.employeeService.employees;
    
}
}