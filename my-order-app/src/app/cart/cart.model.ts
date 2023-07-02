import { MenuitemCart } from "./menuitemCart.model";

        export class Cart{
            cartId : number | null = 0;
            name : string | null = null;
            address : string | null = null;
            phoneNumber : string | null = null;
            note : string | null = null;
            date: Date | null = null;

            menuitemCarts : Array<MenuitemCart> | null = new Array<MenuitemCart>();
        }