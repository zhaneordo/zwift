// / <reference types="Cypress" />

// go to www.zwift
// wait for page to load
// validate something on the page exists

context('Events Scenarios', () => {
    beforeEach(() => {
        cy.acceptCookies();
        cy.visit('');
    })

    it('Fullscreen - Verify Events', () => {
        cy.waitUntil(() => cy.get('.znv-z-full-nav').should('be.visible'));

        cy.get('.znv-d-lg-flex > [href="/events"]').click()

        cy.waitUntil(() => cy.get('div#zwift-events').should('be.visible'))
        cy.url().should('include', '/events')

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').find('option').then(types => {
            for (let type = 2; type < types.length; type++) {
                cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(types[type].label)

                cy.get(':nth-child(3) > .select-wrapper > #filter-location').find('option').then(types => {
                    for (let type = 2;  type < types.length; type++) {
                        cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(types[type].label)

                        cy.get(':nth-child(4) > .select-wrapper > #filter-location').find('option').then(types => {
                            for (let type = 2;  type < types.length; type++) {
                                cy.get(':nth-child(4) > .select-wrapper > #filter-location').select(types[type].label)

                                // need to create a validation for results
                                // this doesnt work yet
                                // var previousResults = []
                                // cy.get('[style="margin-top: 30px;"]').find('div').then(results => {
                                //     console.log('divResults', divResults)
                                //     console.log('previousResults', previousResults)
                                //     assert.notEqual(results, previousResults)

                                //     previousResults = results
                                //     debugger;
                                // })
                            }
                        })
                    }
                })
            }
        })
    })

    xit('Mobile - Verifies Events', () => {
        cy.viewport('iphone-x')

        cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));

        cy.get('#znv-header-open-burger').click();

        cy.waitUntil(() => cy.get(':nth-child(10) > .znv-link-black').should('be.visible')).then(() => {
            cy.get(':nth-child(10) > .znv-link-black').click()
        });

        cy.waitUntil(() => cy.get('#events-header').should('be.visible'));
        cy.url().should('include', '/events')

        cy.get(':nth-child(1) > .select-wrapper > #filter-location').find('option').then(types => {
            for (let type = 2; type < types.length; type++) {
                cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(types[type].label)

                cy.get(':nth-child(3) > .select-wrapper > #filter-location').find('option').then(types => {
                    for (let type = 2;  type < types.length; type++) {
                        cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(types[type].label)

                        cy.get(':nth-child(4) > .select-wrapper > #filter-location').find('option').then(types => {
                            for (let type = 2;  type < types.length; type++) {
                                cy.get(':nth-child(4) > .select-wrapper > #filter-location').select(types[type].label)

                                // assert on results
                            }
                        })
                    }
                })
            }
        }) 
    })
})