import { MenuItem } from "../cart-item/menuItem.model";
import { Cart } from "./cart.model";

export class MenuitemCart{
    cartId : number | null = null;
    menuItemId : number | null = null;

    menuitem : MenuItem | null = null;
}
