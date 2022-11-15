import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  @HostListener('click') prev() {
    const elm = this.el.nativeElement.parentElement.children[0];
    const items = elm.getElementsByClassName('carousel-item');
    elm.prepend(items[items.length - 1]);
  }

  constructor(private el: ElementRef) {}
}
