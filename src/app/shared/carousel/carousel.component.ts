import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface CarouselItem {
  src: SafeResourceUrl;
}

@Component({
  selector: 'nmt-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items: CarouselItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
