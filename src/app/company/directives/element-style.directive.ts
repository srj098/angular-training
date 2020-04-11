import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[elementStyle]'
})
export class ElementStyleDirective {

  constructor(elemRef:ElementRef) {
    elemRef.nativeElement.style.color = 'red';
   }

}
