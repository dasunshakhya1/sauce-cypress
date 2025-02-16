import {click, text} from "../support/cy";
import {ItemHandler} from "./common/item-handler";

export class CartPage {


    static verifyCartPage() {
        return text('.subheader')
    }

    static calculateTotal() {
        return ItemHandler.calculateTotal();
    }

    static getCartItems() {
        return ItemHandler.getCartItems()
    }

    static navigateToCheckout() {
        click('.checkout_button')
    }
}