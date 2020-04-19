import { Component , OnInit  } from '@angular/core';
import { BloggerDetails } from '../../services/blogger-details.service';

@Component({
  selector: 'blogger-content',
  templateUrl: './blogger-content.html',
  styleUrls: ['./blogger-content.css'],

})
export class BloggerContentComponent implements OnInit{

  

  constructor(private bloggerDetails: BloggerDetails) { }
  storyName:string = 'College ke din';
  
  studentsDetails:any;
  
  ngOnInit(){
    this.bloggerDetails.setStoryName(this.storyName);
    this.studentsDetails = this.bloggerDetails.students;
  }
  
  bloggerTitle: string = 'Welcome to My Blog '

  headerDetail: string = 'My blog contains stories, poems';

  blogger: object = { bloggerOwner: 'Suraj', headerDetails: 'My blog contains stories, poems' };

  extraContent: string;

  getData($event) {
    this.extraContent = $event;
  }

  saveData(value: string) {
    alert('input value is' + value);
  }

}