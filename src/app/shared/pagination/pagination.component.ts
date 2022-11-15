import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PaginationEvent } from '@core/models/filter.model';

@Component({
  selector: 'nmt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions = [10, 20, 50, 100];

  @Output() pageChange = new EventEmitter<PaginationEvent>();
  pages: number[] = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
      this.pages = this.getPages(this.current, this.total);
    }
  }

  onGoTo(page: number): void {
    this.pageChange.emit(new PaginationEvent(page, this.pageSize));
  }
  onNext(): void {
    this.pageChange.emit(new PaginationEvent(this.current + 1, this.pageSize));
  }
  onPrevious(): void {
    this.pageChange.emit(new PaginationEvent(this.current - 1, this.pageSize));
  }
  private getPages(current: number, total: number): number[] {
    if (total <= 7) {
      return [...Array(total).keys()].map((x) => ++x);
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
      } else {
        return [1, -1, current - 1, current, current + 1, -1, total];
      }
    }

    return [1, 2, 3, 4, 5, -1, total];
  }

  onPageSizeChange(event: any) {
    const pageSize = Number(event.target.value);
    this.pageChange.emit(new PaginationEvent(this.current, pageSize));
  }
}
