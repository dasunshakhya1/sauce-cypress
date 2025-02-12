export class ProductsPage {


    static verifyProductPage() {
        cy.get('.inventory_item').then((inventory) => {
            expect(inventory.length).to.be.greaterThan(0)
        })
    }

    static addProductsToCart(...productName: string[]) {
        cy.get('.inventory_item').then((inventory) => {

            for (const prod of productName) {
                Cypress._.each(inventory, (item) => {
                    cy.wrap(item).find('.inventory_item_label>a>div').then((product) => {
                        const prodName = product.text();
                        cy.log(prodName);
                        if (prod === prodName) {
                            cy.wrap(item).find('.pricebar>button').then((priceButton) => {
                                cy.wrap(priceButton).click()
                            })
                        }
                    })
                })
            }


        })
    }

}