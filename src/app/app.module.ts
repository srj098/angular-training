import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CompanyModuleModule} from './company/company-module.module';
import {ElementStyleDirective} from './company/directives/element-style.directive';
import {EmployeeComponent} from './company/component/employee/employee.component';
import { UpperPipe } from './company/pipes/upper.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ElementStyleDirective,
    EmployeeComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompanyModuleModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
