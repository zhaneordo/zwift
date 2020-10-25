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

    xit('Fullscreen - Verifies Events', () => {
        cy.waitUntil(() => cy.get('.znv-z-full-nav').should('be.visible'));

        cy.get('.znv-d-lg-flex > [href="/events"]').click()

        cy.waitUntil(() => cy.get('div#zwift-events').should('be.visible'))
        cy.url().should('include', '/events')

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('CYCLING')
        cy.contains('CYCLING').should('be.visible')

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('RUNNING')
        cy.contains('RUNNING').should('be.visible')
    })

    it('Mobile - Verifies Events', () => {
        cy.viewport('iphone-x')
        cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));

        cy.get('#znv-header-open-burger').click()

        cy.waitUntil(() => cy.get(':nth-child(10) > .znv-link-black').should('be.visible'))

        cy.get(':nth-child(10) > .znv-link-black').click()

        cy.waitUntil(() => cy.get('#events-header').should('be.visible'))

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('CYCLING')
        cy.contains('Cycling').should('be.visible')

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('RUNNING')
        cy.contains('Running').should('be.visible')
    })
})

// all sports
// cy.get(':nth-child(1) > .select-wrapper > #filter-location')

// Event Types
// cy.get(':nth-child(2) > .select-wrapper > #filter-location')

// Intensities
// cy.get(':nth-child(3) > .select-wrapper > #filter-location')

// All start times
// cy.get(':nth-child(4) > .select-wrapper > #filter-location')



// events
// 