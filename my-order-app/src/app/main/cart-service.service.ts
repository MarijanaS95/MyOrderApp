import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MenuItem } from '../cart-item/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  item = new Subject<MenuItem>();
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit()
  {
    this.item.subscribe(x =>
      this.items.push(x)
      )
  }

  addToCart(item: MenuItem): void {
      this.items.push(item);
  }

  getCartItems(): MenuItem[] {
    return this.items;
  }

  clearCart(): void {
    this.items.splice(0);
  }
}
