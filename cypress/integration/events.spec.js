/* eslint-disable no-undef */
// / <reference types="Cypress" />

// Navigate to https://zwift.com
// Use the top-nav elements to reach https://zwift.com/events
// Validate the page loads.
// Populate the Sports, Intensities, and Start Times dropdown fields.
// Validate events have changed. (Assume that the filters you choose may return NO events.)

context('Events Scenarios', () => {
  beforeEach(() => {
    cy.acceptCookies();
    cy.visit('');
  });

  it('Fullscreen - Verify Events', () => {
    cy.waitUntil(() => cy.get('.znv-z-full-nav').should('be.visible'));

    cy.get('.znv-d-lg-flex > [href="/events"]').click();

    cy.waitUntil(() => cy.get('div#zwift-events').should('be.visible'));
    cy.url().should('include', '/events');

    cy.get(':nth-child(1) > .select-wrapper > #filter-location')
      .find('option')
      .then((types) => {
        for (let type = 2; type < types.length; type++) {
          cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(types[type].label);

          cy.get(':nth-child(3) > .select-wrapper > #filter-location')
            .find('option')
            .then((types) => {
              for (let type = 2; type < types.length; type++) {
                cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(types[type].label);

                cy.get(':nth-child(4) > .select-wrapper > #filter-location')
                  .find('option')
                  .then((types) => {
                    for (let type = 2; type < types.length; type++) {
                      cy.get(':nth-child(4) > .select-wrapper > #filter-location').select(types[type].label);

                      var previousResults = 0;
                      cy.get('[style="margin-top: 30px;"]')
                        .find('div')
                        .then((results) => {
                          const schedule = results.toArray();
                          var scheduleResults = schedule.length;

                          assert.isNotNull(scheduleResults);
                          assert.isNotNull(previousResults);

                          previousResults = scheduleResults;
                        });
                    }
                  });
              }
            });
        }
      });
  });

  it('Tablet - Verifies Events', () => {
    cy.viewport('ipad-2', 'landscape');

    cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));

    cy.get('#znv-header-open-burger').click();

    cy.waitUntil(() => cy.get(':nth-child(10) > .znv-link-black').should('be.visible')).then(() => {
      cy.get(':nth-child(10) > .znv-link-black').click();
    });

    cy.waitUntil(() => cy.get('#events-header').should('be.visible'));
    cy.url().should('include', '/events');

    cy.get(':nth-child(1) > .select-wrapper > #filter-location')
      .find('option')
      .then((types) => {
        for (let type = 2; type < types.length; type++) {
          cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(types[type].label);

          cy.get(':nth-child(3) > .select-wrapper > #filter-location')
            .find('option')
            .then((types) => {
              for (let type = 2; type < types.length; type++) {
                cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(types[type].label);

                cy.get(':nth-child(4) > .select-wrapper > #filter-location')
                  .find('option')
                  .then((types) => {
                    for (let type = 2; type < types.length; type++) {
                      cy.get(':nth-child(4) > .select-wrapper > #filter-location').select(types[type].label);

                      var previousResults = 0;
                      cy.get('[style="margin-top: 30px;"]')
                        .find('div')
                        .then((results) => {
                          const schedule = results.toArray();
                          var scheduleResults = schedule.length;

                          assert.isNotNull(scheduleResults);
                          assert.isNotNull(previousResults);

                          previousResults = scheduleResults;
                        });
                    }
                  });
              }
            });
        }
      });
  });

  it('Mobile - Verifies Events', () => {
    cy.viewport('iphone-x');

    cy.waitUntil(() => cy.get('#znv-header-open-burger').should('be.visible'));

    cy.get('#znv-header-open-burger').click();

    cy.waitUntil(() => cy.get(':nth-child(10) > .znv-link-black').should('be.visible')).then(() => {
      cy.get(':nth-child(10) > .znv-link-black').click();
    });

    cy.waitUntil(() => cy.get('#events-header').should('be.visible'));
    cy.url().should('include', '/events');

    cy.get(':nth-child(1) > .select-wrapper > #filter-location')
      .find('option')
      .then((types) => {
        for (let type = 2; type < types.length; type++) {
          cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(types[type].label);

          cy.get(':nth-child(3) > .select-wrapper > #filter-location')
            .find('option')
            .then((types) => {
              for (let type = 2; type < types.length; type++) {
                cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(types[type].label);

                cy.get(':nth-child(4) > .select-wrapper > #filter-location')
                  .find('option')
                  .then((types) => {
                    for (let type = 2; type < types.length; type++) {
                      cy.get(':nth-child(4) > .select-wrapper > #filter-location').select(types[type].label);

                      var previousResults = 0;
                      cy.get('[style="margin-top: 30px;"]')
                        .find('div')
                        .then((results) => {
                          const schedule = results.toArray();
                          var scheduleResults = schedule.length;

                          assert.isNotNull(scheduleResults);
                          assert.isNotNull(previousResults);

                          previousResults = scheduleResults;
                        });
                    }
                  });
              }
            });
        }
      });
  });
});
