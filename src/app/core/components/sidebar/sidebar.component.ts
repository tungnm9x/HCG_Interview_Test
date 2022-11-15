import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';

@Component({
  selector: 'nmt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;
  constructor() {}

  ngOnInit(): void {}
}
