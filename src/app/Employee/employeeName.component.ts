import {Component, Input, Output, EventEmitter} from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
    selector:'employeeName-comp',
    templateUrl:'./employeeName.component.html'
})


export class EmployeeNameCompoment{
@Input() Name:String;

Org:string ='NCR';
@Output() OrgEvent = new EventEmitter <string>();

sendOrg(){
    this.OrgEvent.emit(this.Org);
}

Count:number=0;

IncreaseCount(){
    this.Count++;
}

DecreaseCount(){
    if(this.Count>=1)
    {
    this.Count--;
    }   
}

}