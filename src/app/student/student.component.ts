import { Component, OnInit,input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @input('TeacherData') name;
  
  constructor() { }

  ngOnInit(): void {
  }

}
