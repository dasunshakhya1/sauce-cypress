import {get, wrap} from "../../support/cy";
import {Item} from "../../modesl/Item";

export  class ItemHandler{
    static calculateTotal() {
        return this.getCartItems().then(items => {
            let total = 0;
            Cypress._.each(items, (item) => {

                total += item.price;
            })

            return total;
        })
    }

    static getCartItems() {

        return get('.cart_item').then((data) => {
            const items:Item[] = []
            Cypress._.each(data, (product) => {
                let item:Item={price:0,name:""}
                wrap(product).find('.inventory_item_name').invoke('text').then((text) => {
                    item.name= `${text.trim()}`
                });

                wrap(product).find('.inventory_item_price').invoke('text').then((text) => {
                    item.price= Number(text.replace("$","").trim())
                })

                items.push(item)
            })

            return wrap(items);
        })
    }
}