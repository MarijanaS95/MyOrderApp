import { Component } from '@angular/core';
import { MenuItem } from './cart-item/menuItem.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-order-app';

  item!: MenuItem;

}
//označava deklaraciju svojstva item unutar klase AppComponent. 
//Ovo svojstvo će čuvati instancu tipa MenuItem, a ! označava da će svojstvo biti ne-null ili ne-undefined 
//kada se pristupi.