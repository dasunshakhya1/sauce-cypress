import {click, type, visit} from "../support/cy";

export class LoginPage {


    static openApplication() {
        visit("/");
    }

    static login(username: string, password: string) {
        type('[data-test="username"]', username)
        type('[data-test="password"]', password)
        click('#login-button')
    }

}