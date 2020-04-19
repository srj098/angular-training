import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeCompoment} from './Employee/employee.component';
import {EmployeeNameCompoment} from './Employee/employeeName.component';
import {EmployeeService} from './Service/employee.service';
@NgModule({
    declarations: [EmployeeCompoment,
      EmployeeNameCompoment
      ],
      imports: [BrowserModule
      ],
      providers: [EmployeeService],
      bootstrap: [EmployeeCompoment]
})
export class EmployeeModule{}