it("Log in to canary cloud account and Add five device options", function(){  
  cy.visit('https://canary.api.meld.cx/login'),
  cy.get(':nth-child(2) > span > input').type(Cypress.env('email')),
cy.get(':nth-child(3) > span > input').type(Cypress.env('password')),
cy.get('.glow > span').click(),
cy.get('.nav-bar-burger').click(),
cy.get('[href="/devices"]').click(),
cy.get(':nth-child(1) > .tr-link > .td-name').contains(Cypress.env('chromedevicename')).click(),
cy.get('.tabs > :nth-child(8)').click(),
cy.get(':nth-child(2) > .ta-c > .glow').click(),
cy.wait(3000),
cy.get('ul > :nth-child(1) > img').screenshot('Capture1'),
cy.get('#capture-list > .glow > :nth-child(2) > span').click(),
cy.get('ul > :nth-child(2) > img').screenshot('Capture2'),
cy.compareSnapshot()
})