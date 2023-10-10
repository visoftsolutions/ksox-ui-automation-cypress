it('works', () => {
    // from your cypress/e2e/spec.cy.ts
    cy.visit('/')
    // IntelliSense and TS compiler should
    // not complain about unknown method
    cy.dataCy('greeting')
})