// / <reference types="Cypress" />

// Navigate to https://zwift.com
// Validate the page loads.
// Validate content of your choice is present.

context('Home Page', () => {
    beforeEach(() => {
        cy.acceptCookies();
        cy.visit('');
    })

    it('Fullscreen - Verifies homepage', () => {
        cy.waitUntil(() => cy.get('.znv-z-full-nav').should('be.visible'));
    })

    it('Mobile - Verifies homepage', () => {
        cy.viewport('iphone-x');
        cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));
    })
})

