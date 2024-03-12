import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../main/cart-service.service';
import { MenuItem } from '../cart-item/menuItem.model';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart.model';
import { MenuitemCart } from './menuitemCart.model';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  customerForm!: FormGroup;
  items: MenuItem[] = this.cartService.items;
  constructor( private fb: FormBuilder, private cartService: CartService, private http: HttpClient, private _snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['',Validators.required],
      address: ['', Validators.required],
      phone: ['',Validators.required],
      note: [''],
    });
  }
  onSubmit(): void {
    var cartItem : Cart = new Cart(); //kreiramo objekat Cart da upisemo u bazu
    cartItem.address = this.customerForm.controls['address'].value;
    cartItem.name = this.customerForm.controls['name'].value;
    cartItem.phoneNumber = this.customerForm.controls['phone'].value;
    cartItem.note = this.customerForm.controls['note'].value;
    cartItem.date = new Date();
    
    this.http.post("https://localhost:44389/api/Carts",cartItem).subscribe(
      (cartResult: any) => {
        var menuitemsForCart : Array<MenuitemCart> = new Array<MenuitemCart>(); 
        this.items.forEach(element => {
          var menuitemCart: MenuitemCart = new MenuitemCart();
          menuitemCart.cartId = cartResult.cartId;
          menuitemCart.menuItemId = element.menuItemId;
          menuitemsForCart!.push(menuitemCart);
        });
        this.http.post("https://localhost:44389/api/MenuitemCarts/PostMenuitemsForCart",menuitemsForCart);
        this.clearCart();
        this.openAlert("Order is confirmed!");
      }
      
    );
  }

  openAlert(message: string): void {
    this._snackBar.open(message, 'Close');
  }

  clearCart(): void {
    this.cartService.clearCart();
    }
   
    getCartItemCount(): number {
    return this.cartService.getCartItems().length;
    }  
 
    getCartItemsPrice(): number {
      var items= this.cartService.getCartItems();
      const total = items.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      return total;
      }  
   
  
  
  removeItem(item: MenuItem) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  
}