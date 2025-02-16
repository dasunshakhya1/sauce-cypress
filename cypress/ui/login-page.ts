import {get, visit} from "../support/cy";

export class LoginPage {


    static openApplication() {
        visit("/");
    }

    static login(username: string, password: string) {
        get('[data-test="username"]').type(username)
        get('[data-test="password"]').type(password)
        get('#login-button').click()
    }

}