import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class BloggerDetails {

applicationName:string = 'Blogger';

sName:string;

setStoryName(value:string){
  this.sName = value;
}

getStoryName(){
  return this.sName;
}

}