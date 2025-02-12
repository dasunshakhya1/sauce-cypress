import {LoginPage} from "../../ui/login-page";
import {ProductsPage} from "../../ui/products-page";


describe("Login Page", () => {
    it("Login Page should be able to login page", () => {
        LoginPage.openApplication()
        LoginPage.login("standard_user","secret_sauce")
        ProductsPage.verifyProductPage()
        ProductsPage.addProductsToCart("Sauce Labs Backpack","Sauce Labs Onesie")
    })

})