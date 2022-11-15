import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
