import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyModuleRoutingModule } from './company-module-routing.module';
import { EmployeeComponent } from './component/employee/employee.component';
import { ManagerComponent } from './component/manager/manager.component';
import { ProjectComponent } from './component/project/project.component';
import { SplitDataDirective } from './directives/split-data.directive';
import { UpperPipe } from './pipes/upper.pipe';


@NgModule({
  declarations: [EmployeeComponent, ManagerComponent, ProjectComponent, SplitDataDirective, UpperPipe],
  imports: [
    CommonModule,
    CompanyModuleRoutingModule
  ]
})
export class CompanyModuleModule { }
