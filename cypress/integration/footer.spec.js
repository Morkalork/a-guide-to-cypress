/// <reference types="Cypress" />

context("Footer", () => {
    it('should have the correct copyright year', () => {
        cy.visit('http://localhost:1337');
        cy.get('#company-copyright-year').contains(new Date().getFullYear());
    });
    it('should have three correct support links', () => {
        cy.server(); // Enable response stubbing
        cy.route('GET', '**/api/support.json', 'fixture:support.json');
        cy.visit('http://localhost:1337');
        cy.get('#support-team a').should('have.length', 3);
        cy.get('#support-team a').eq(0).contains('Test 1');
        cy.get('#support-team a').eq(0).invoke('attr', 'href', 'test1@support.org');
    });
});