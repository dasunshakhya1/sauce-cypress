import {LoginPage} from "../../ui/login-page";
import {ProductsPage} from "../../ui/products-page";


const products: string[] = ["Sauce Labs Backpack", "Sauce Labs Onesie"]

describe("Login Page", () => {

    beforeEach(() => {
        LoginPage.openApplication()
        LoginPage.login("standard_user", "secret_sauce")
    })
    it("Login Page should be able to login page", () => {
        ProductsPage.verifyProductPage()
        ProductsPage.addProductsToCart(products)
    })

 
})