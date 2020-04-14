import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-component',
  templateUrl: './teacher-component.component.html',
  styleUrls: ['./teacher-component.component.css']
})
export class TeacherComponentComponent implements OnInit {

  name:string = 'DNR';
  constructor() { }

  ngOnInit(): void {
  }
}
