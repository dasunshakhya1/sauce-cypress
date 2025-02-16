import {get, log, wrap} from "../support/cy";
import {Item} from "../modesl/Item";

export class ProductsPage {


    static verifyProductPage() {
        get('.inventory_item').then((inventory) => {
            expect(inventory.length).to.be.greaterThan(0)
        })
    }

    static addProductsToCart(productName: Item[]) {
        get('.inventory_item').then((inventory) => {

            for (const prod of productName) {
                Cypress._.each(inventory, (item) => {
                    wrap(item).find('.inventory_item_label>a>div').then((product) => {
                        const prodName = product.text();
                        log(prodName);
                        if (prod.name === prodName) {
                            wrap(item).find('.pricebar>button').then((priceButton) => {
                                wrap(priceButton).click()
                            })
                        }
                    })
                })
            }
        })
    }

}