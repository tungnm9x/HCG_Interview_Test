import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  @HostListener('click') next() {
    const elm = this.el.nativeElement.parentElement.children[0];
    const items = elm.getElementsByClassName('carousel-item');
    elm.append(items[0]);
  }

  constructor(private el: ElementRef) {}
}
