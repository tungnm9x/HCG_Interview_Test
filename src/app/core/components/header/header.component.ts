import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';

export interface HeaderItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'nmt-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  constructor() {}

  ngOnInit(): void {}
}
