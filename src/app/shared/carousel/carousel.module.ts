import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';

@NgModule({
  declarations: [CarouselComponent, NextDirective, PrevDirective],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
