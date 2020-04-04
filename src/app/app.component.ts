import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Angular-Demo';


  innerHTMLValue: string = 'bind into heading';
  paragraph: string = "bind into paragraph";
  imageSrc: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  disable: boolean = false;

  count: number = 0;


  clickMe(): void {
    this.count++;
    alert(this.count);
    if (this.count == 3) {
      this.disable = true;
    }

  }

  Color: string;

  onChange(data): void {
    this.Color = data.target.value;
  }

  inputBinding: string = "Hello"

}
