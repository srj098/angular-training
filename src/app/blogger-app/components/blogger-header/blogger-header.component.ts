import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'blogger-header',
    templateUrl: './blogger-header.html',
    styleUrls: []
})
export class BloggerHeaderComponent {

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
