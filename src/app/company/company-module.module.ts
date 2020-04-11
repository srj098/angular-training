import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyModuleRoutingModule } from './company-module-routing.module';
import { EmployeeComponent } from './component/employee/employee.component';
import { ManagerComponent } from './component/manager/manager.component';
import { ProjectComponent } from './component/project/project.component';
import { ElementStyleDirective } from './directives/element-style.directive';
import { UpperPipe } from './pipes/upper.pipe';


@NgModule({
  declarations: [ ManagerComponent, ProjectComponent],
  imports: [
    CommonModule,
    CompanyModuleRoutingModule
  ]
})
export class CompanyModuleModule { }
