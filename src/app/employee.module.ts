import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeCompoment} from './Employee/employee.component';
import {EmployeeNameCompoment} from './Employee/employeeName.component';

@NgModule({
    declarations: [EmployeeCompoment,
      EmployeeNameCompoment
      ],
      imports: [BrowserModule
      ],
      providers: [],
      bootstrap: [EmployeeCompoment]
})
export class EmployeeModule{}