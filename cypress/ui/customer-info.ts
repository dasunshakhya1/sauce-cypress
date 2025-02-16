import {click, text, type} from "../support/cy";

export class CustomerInfo {


    static verifyCartPage() {
        return text('.subheader')
    }

    static enterCustomerInfo(firstName: string, lastName: string, postalCode: string) {
        type('#first-name', firstName)
        type('#last-name', lastName)
        type('#postal-code', postalCode)
        click('.cart_button')
    }
}