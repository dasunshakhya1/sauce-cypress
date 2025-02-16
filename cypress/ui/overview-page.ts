import {ItemHandler} from "./common/item-handler";
import {click} from "../support/cy";

export class OverviewPage {
    static calculateTotal() {
        return ItemHandler.calculateTotal();
    }

    static finishPurchase() {
        click('.cart_button')
    }

    static getCartItems() {
        return ItemHandler.getCartItems();
    }
}