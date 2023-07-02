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
