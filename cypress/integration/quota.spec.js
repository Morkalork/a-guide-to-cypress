/// <reference types="Cypress" />

context("Quota", () => {
    beforeEach(() => {
        // Before each test, let's make sure we're currently visiting the site
        cy.visit('http://localhost:1337');
    });
    it('should not show the quota message if the form is not properly filled in', () => {
        cy.get('button#send').click();
        cy.get('p#quota-message').should('not.exist');
    });
    it('should show the quota message if the form is properly filled in', () => {
        cy.get('select#products > option')
            .eq(1)
            .invoke('attr', 'selected', true);
        cy.get('input#email').type('a-real-email-I-swear@fakefakefake.com');
        // cy.get('textarea#additional').type('I really want your awesome products!');
        cy.get('button#send').click();
        cy.get('p#quota-message').should('exist');
    });
});