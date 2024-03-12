import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MenuItem } from '../cart-item/menuItem.model';
// Dekorator @Injectable označava da je klasa injektibilna i može se koristiti kao servis
@Injectable({
  providedIn: 'root',
})
// Klasa CartService koja implementira OnInit interfejs
export class CartService implements OnInit {
  // Subject za obaveštavanje o promeni stavki u korpi
  item = new Subject<MenuItem>();
  // Niz stavki u korpi
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit()
  {
    // Pretplatnici na Subject obaveštavaju o dolazećim stavkama i dodaju ih u niz
    this.item.subscribe(x =>
      this.items.push(x)
      )
  }
// Metod za dodavanje stavke u korpu
  addToCart(item: MenuItem): void {
      this.items.push(item);
  }
// Metod za dobijanje svih stavki u korpi
  getCartItems(): MenuItem[] {
    return this.items;
  }
// Metod za čišćenje svih stavki iz korpe
  clearCart(): void {
    this.items.splice(0);
  }
}
