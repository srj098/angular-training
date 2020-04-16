import { Component } from '@angular/core';
import { BloggerDetails } from '../../services/blogger-details.service';

@Component({
  selector: 'blogger-content',
  templateUrl: './blogger-content.html',
  styleUrls: ['./blogger-content.css']
})
export class BloggerContentComponent {


  constructor(private bloggerDetails: BloggerDetails) { }

  application: string = this.bloggerDetails.applicationName;


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