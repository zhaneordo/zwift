// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import 'cypress-wait-until'

Cypress.Commands.add('acceptCookies', () => {
    cy.setCookie('notice_gdpr_prefs', '0,1,2:')
    cy.setCookie('notice_preferences', '2:')
})