import { Component } from '@angular/core';

@Component({
   selector:'blogger-content',
   templateUrl:'./blogger-content.html',
   styleUrls:['./blogger-content.css'] 
})
export class BloggerContentComponent {
 bloggerTitle:string = 'Welcome to My Blog'
}