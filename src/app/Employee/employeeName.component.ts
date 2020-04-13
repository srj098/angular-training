import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'employeeName-comp',
    templateUrl:'./employeeName.component.html'
})


export class EmployeeNameCompoment{
@Input() Name:String;
}