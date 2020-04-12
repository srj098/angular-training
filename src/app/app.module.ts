import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { StudentComponent } from './student/student.component';
import { StudentModuleComponent } from './student-module/student-module.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    StudentComponent,
    StudentModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
