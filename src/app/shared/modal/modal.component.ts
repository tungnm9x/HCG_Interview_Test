import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nmt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  // @Input() size: 'xl' | 'lg' | 'sm' | 'fullscreen' = 'sm';
  @Input() customClass = '';
  @Input() showClose: boolean = true;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
