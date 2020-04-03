import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  name = 'suraj';

  innerHTMLValue = 'inner html demo';

  disable = false;

  count =0;

  clickMe(){
    this.count++;
    console.log(this.count);
    if(this.count==3){
      this.disable =true;
    }
    
  }
}
