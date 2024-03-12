import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from './cart-service.service';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { MenuItem } from '../cart-item/menuItem.model';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  menus! : Array<Menu>;
  menuItems! : Array<MenuItem>;

  constructor(private cartService: CartService, private http: HttpClient, private sanitizer: DomSanitizer) 
  {
    http.get("https://localhost:44389/api/Menus").subscribe((result:any) =>{
    this.menus = result;
    this.menuItems = this.menus[0].menuitems!;})
  }


  selectedMenuChange(selectdTab: MatTabChangeEvent)
  {
    this.menuItems = this.menus[selectdTab.index].menuitems!;
  }

  ngOnInit(): void {
  }
  
  clearCart(): void 
  {
    this.cartService.clearCart();
  }
    
  getCartItemCount(): number 
  {
    return this.cartService.getCartItems().length;
  } 

  addItemToCart(item: MenuItem) 
  {
    const cartItem: MenuItem = {
      name: item.name,
      description: item.description,
      picture: item.picture,
      price: item.price,
      menuId : item.menuId, 
      menuItemId: item.menuItemId
    };
    this.cartService.addToCart(cartItem);
  }

  convertBlobToImage( blobData: any) : any
  {
    if(blobData != null)
      {
      const dataUrl = `data:image/jpeg;base64,${blobData}`;
      const safeDataUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(dataUrl);
      return safeDataUrl;
      }
    return null;
  }
 
}
