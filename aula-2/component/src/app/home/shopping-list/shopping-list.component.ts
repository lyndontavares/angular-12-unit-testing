import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export interface ShopItem {
  name: string;
  qty: string;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  @Input() shoppingList: Array<ShopItem> = [];
  @Output() itemRemove = new EventEmitter<number>();
  @Output() clear = new EventEmitter<void>();
  @Output() print = new EventEmitter<void>();

  faTime = faTimes;
  faArrowLeft = faArrowLeft;

  constructor() { }

  removeItem(index) {
    this.itemRemove.next(index);
  }

  clearList(): void {
    this.clear.next();
  }

  printList(): void {
    this.print.next();
  }
}
