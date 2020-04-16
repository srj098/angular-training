import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { BloggerDetails } from '../../services/blogger-details.service';

@Component({
    selector: 'blogger-header',
    templateUrl: './blogger-header.html',
    styleUrls: []
})
export class BloggerHeaderComponent implements OnInit {

    constructor(private blogger:BloggerDetails){}

    story:string;

    ngOnInit(){
     this.story = this.blogger.getStoryName();
    }

    count: number = 0;

    @Input() header: string;

    @Input('headerExtra') headerContentDetails: string;

    contentData: string = 'Quotes';

    @Output() content = new EventEmitter<string>();

    sendData() {
        this.content.emit(this.contentData);
    }

    increaseCount() {
        this.count++;
    }

    decreaseCount() {
        this.count--;
    }


}
