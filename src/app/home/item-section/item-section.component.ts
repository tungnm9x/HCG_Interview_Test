import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { loadItems } from 'app/state/home/home.actions';
import { ItemDetail } from 'app/state/home/home.model';
import { Status } from 'app/state/home/home.reducer';
import {
  selectAllItem,
  selectErrorItems,
  selectStatusItems,
} from 'app/state/home/home.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'nmt-item-section',
  templateUrl: './item-section.component.html',
})
export class ItemSectionComponent implements OnInit {
  // Items
  items$: Observable<ItemDetail[]> = this.store.select(selectAllItem);

  itemStatus$: Observable<Status> = this.store.select(selectStatusItems);

  itemsError$: Observable<string | null> = this.store.select(selectErrorItems);

  trackByFn(index: number, item: ItemDetail) {
    return item.id;
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.itemStatus$.subscribe((status) => {
      if (status !== 'success') this.refreshItems();
    });
  }

  refreshItems() {
    this.store.dispatch(loadItems());
  }
}
