import {Component, Input, Output, EventEmitter} from '@angular/core';

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

}