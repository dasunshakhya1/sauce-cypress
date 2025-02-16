import {LoginPage} from "../../ui/login-page";
import {ProductsPage} from "../../ui/products-page";
import {Header} from "../../ui/header";
import {CartPage} from "../../ui/cart-page";
import {Item} from "../../modesl/Item";
import {CustomerInfo} from "../../ui/customer-info";
import {OverviewPage} from "../../ui/overview-page";
import {log} from "../../support/cy";



const products: Item[] = [{name: "Sauce Labs Backpack", price: 29.99}, {name: "Sauce Labs Onesie", price: 7.99}]
describe("Login Page", () => {



    before(() => {
        log(products)
        LoginPage.openApplication()
        LoginPage.login("standard_user", "secret_sauce")
    })
    it("Login Page should be able to login page", () => {
        ProductsPage.verifyProductPage()
        ProductsPage.addProductsToCart(products)
        Header.getCartCount().then((count) => {
            expect(Number.parseInt(count)).to.eq(products.length)
        })
        Header.navigateToCart()
    })

    it('Verify items in cart', () => {
        CartPage.verifyCartPage().then(header => expect(header).to.eq('Your Cart'))
        CartPage.calculateTotal().then(total => {
            expect(total).to.eq(37.98)
        })
        CartPage.getCartItems().then(items => {
            expect(items).to.deep.equals(products)
            expect(items.length).to.eq(2)
        })
        CartPage.navigateToCheckout()
    });

    it('Verify customer information page', () => {
        CustomerInfo.verifyCartPage().then(header => expect(header).to.eq('Checkout: Your Information'))
        CustomerInfo.enterCustomerInfo("John", "Carter", "10223")
    })

    it("Verify overview page information page", () => {
        OverviewPage.getCartItems().then(items => {
            log(items)
            expect(items.length).to.eq(2)
            expect(items).to.deep.equals(products)
        })
        OverviewPage.finishPurchase()
    })


})