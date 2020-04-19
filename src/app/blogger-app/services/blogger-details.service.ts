import { Injectable } from '@angular/core';
import {StudentsDetail} from '../services/students-detail.interface'
import {StudentDetail} from './student-detail';

@Injectable()

export class BloggerDetails {

applicationName:string = 'Blogger';

sName:string;


students:StudentsDetail[]= [{
  name:'A',
  id:1
},{
  name:'B',
  id:2
},{
  name:'C',
  id:3
},{
  name:'D',
  id:4
},{
  name:'E',
  id:5
},
{
  name:'F',
  id:6
},
{
  name:'G',
  id:7
},
{
  name:'H',
  id:8
},
{
  name:'I',
  id:9
}, {
  name:'J'
}];


setStoryName(value:string){
  this.sName = value;
}

getStoryName(){
  return this.sName;
}

}