import { Component, Input } from '@angular/core';

@Component({
selector:'blogger-header',
templateUrl:'./blogger-header.html',
styleUrls:[]
})
export class BloggerHeaderComponent {

@Input() header:string;

}
