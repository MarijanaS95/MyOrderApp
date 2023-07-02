import { MenuItem } from "../cart-item/menuItem.model";


export class Menu{
    menuId : number | null = null;
    name : string | null = null;
    description : string | null = null;
    picture : Blob | null = null;
    menuitems: Array<MenuItem> | null =  null;

}