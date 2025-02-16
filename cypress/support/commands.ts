/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.on('window:alert', (str) => {
    // prevent the alert from being triggered
    return false;
});

Cypress.on('window:confirm', (str) => {
    // prevent the confirm dialog from being triggered (returns true by default)
    return false;
});

Cypress.on('window:before:unload', (str) => {
    // prevent the prompt dialog from being triggered
    return false;
});

Cypress.on('window:load', (str) => {
    // prevent the prompt dialog from being triggered
    return false;
});


Cypress.on('window:unload', (str) => {
    // prevent the prompt dialog from being triggered
    return false;
});

Cypress.on('window:before:load', (str) => {
    // prevent the prompt dialog from being triggered
    return false;
});
