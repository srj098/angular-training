import { Component } from '@angular/core';

@Component({
   selector:'blogger-content',
   templateUrl:'./blogger-content.html',
   styleUrls:['./blogger-content.css'] 
})
export class BloggerContentComponent {
   
 bloggerTitle:string = 'Welcome to My Blog '

 headerDetail:string = 'My blog contains stories, poems';

 blogger:object = {bloggerOwner:'Suraj',headerDetails:'My blog contains stories, poems'};

 extraContent:string;

 getData($event){
   this.extraContent = $event;
 }

}