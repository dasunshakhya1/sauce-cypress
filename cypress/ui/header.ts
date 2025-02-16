import {click, get, text} from "../support/cy";

export class Header {
    static getCartCount() {
        return text('.fa-layers-counter')
    }

    static navigateToCart() {
        click('#shopping_cart_container')
    }
}