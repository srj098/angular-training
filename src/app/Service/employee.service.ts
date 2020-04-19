import {Injectable} from '@angular/core';
import{EmployeeDetails} from './employee.interface';

@Injectable(
)

export class EmployeeService{

employees:EmployeeDetails[]=[
    { QID:'SK185189', Name:'A', Gender:'F', annualSalary:2000000},
    { QID:'SK185190', Name:'B', Gender:'M', annualSalary:2200000},
    { QID:'SK185191', Name:'C', Gender:'M', annualSalary:2500000},
    { QID:'SK185192', Name:'D', Gender:'F', annualSalary:3500000}
];

}