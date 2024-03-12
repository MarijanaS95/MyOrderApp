import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../main/cart-service.service';
import { MenuItem } from './menuItem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  constructor(private cartService: CartService) {}

  @Input() item!: MenuItem;
  //@Input() item!: MenuItem; se koristi za prihvatanje vrednosti tipa MenuItem kao ulaznog podatka za komponentu.

  ngOnInit(): void {
  }
  addItemToCart(item: MenuItem) {
    const cartItem: MenuItem = {
      name: item.name,
      description: item.description,
      picture: item.picture,
      price: item.price,
      menuId : item.menuId,
  menuItemId : item.menuItemId
    };
    this.cartService.addToCart(cartItem);
  }
}
// Ova funkcija se koristi za kreiranje kopije određenog proizvoda (item) i
// zatim dodaje tu kopiju u korpu pozivajući odgovarajuću funkciju na cartService objektu.
