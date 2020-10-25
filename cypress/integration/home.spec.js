// / <reference types="Cypress" />

// go to www.zwift
// wait for page to load
// validate something on the page exists

context('Home Page', () => {
    beforeEach(() => {
        cy.acceptCookies();

        cy.visit('');

        // cy.server().route('POST', 'https://api.segment.io/v1/p').as('apiP')
        // cy.wait('@apiP').its('status').should('be', 200)
    })

    it('Fullscreen - Verifies homepage', () => {
        cy.waitUntil(() => cy.get('.znv-z-full-nav').should('be.visible'));
    })

    it('Mobile - Verifies homepage', () => {
        cy.viewport('iphone-x')
        cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));
    })
})

