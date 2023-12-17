import '@testing-library/cypress/add-commands'

describe('Google search', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://www.google.com/')
        cy.findByText('Aceptar todo').click();
      })

    it('displays search results after performing a sucessful search', () => {
        cy.findByTitle('Buscar').type('best pizza in Barcelona');
        cy.findByRole('search').submit();
        cy.get('#search').should('be.visible');
    });

    it('does not display search results after performing a non sucessful search', () => {
        cy.findByTitle('Buscar').type('lamxlaskmlmlxaksmxlakmslxakmslxmowejw');
        cy.findByRole('search').submit();
        cy.get('#search').should('not.be.visible');
    });
})