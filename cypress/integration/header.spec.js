/// <reference types="Cypress" />

context("Header", () => {
    beforeEach(() => {
        // Before each test, let's make sure we're currently visiting the site
        cy.visit('http://localhost:1337');
    });
    it('should have a valid title', () => {
        cy.get('header h1').should('exist');
    });
    it('should have a valid tag line', () => {
        cy.get('header .tagline').should('exist');
    });
});