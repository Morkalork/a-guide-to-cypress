/// <reference types="Cypress" />

context("Quota", () => {
    beforeEach(() => {
        // Before each test, let's make sure we're currently visiting the site
        cy.visit('http://localhost:1337');
    });
    it('should not show the quota message if the form is not properly filled in', () => {
        cy.get('#send').click();
        cy.get('#quota-message').should('not.exist');
    });
    it('should show the quota message if the form is properly filled in', () => {
        cy.get('#products > option')
            .eq(1)
            .invoke('attr', 'selected', true);
        cy.get('#email').type('a-real-email-I-swear@fakefakefake.com');
        cy.get('#additional').type('I really want your awesome products!');
        cy.get('#send').click();
        cy.get('#quota-message').should('exist');
    });
});