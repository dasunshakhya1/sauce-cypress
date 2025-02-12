export class LoginPage {


    static openApplication() {
        cy.visit("/");
    }

    static login(username: string, password: string) {
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('#login-button').click()
    }

}