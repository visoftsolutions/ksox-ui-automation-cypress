// https://docs.cypress.io/guides/tooling/typescript-support#Adding-child-or-dual-commands
export {};

declare global {
    namespace Cypress {
        interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(value: string): Chainable<JQuery<HTMLElement>>
        typeRandomWords(
            count?: number,
            options?: Partial<TypeOptions>
          ): Chainable<JQuery<HTMLElement>>
        }
    }
}

Cypress.Commands.add('dataCy', (value) => {
    return cy.get(`[data-cy=${value}]`)
})

// Cypress.Commands.add(
//     'typeRandomWords',
//     { prevSubject: 'element' },
//     (subject /* :JQuery<HTMLElement> */, count = 3, options?) => {
//         return cy.wrap(subject).type(generateRandomWords(count), options)
//     }
// )