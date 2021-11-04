import { Component, OnInit } from '@angular/core';
import { ShopItem } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cart: Array<ShopItem> = [
    {
      name: 'Onion',
      qty: '1 piece'
    },
    {
      name: 'Onion',
      qty: '1 piece'
    }
  ];

  newItemName = '';
  newItemQty = '';

  constructor() { }

  ngOnInit() {
  }

  addItem(): void {
    const newItem: ShopItem = {
      name: this.newItemName,
      qty: this.newItemQty
    };
    this.cart.push(newItem);
    this.newItemName = '';
    this.newItemQty = '';
  }

  // Remote item from cart
  removeItem(index) {
    if (index < 0) {
      return;
    }
    this.cart.splice(index, 1);
  }

  // Clear the entire list
  clearList(): void {
    this.cart = [];
  }

  // Print the list
  printList(): void {
    window.confirm('Print list!');
  }
}
