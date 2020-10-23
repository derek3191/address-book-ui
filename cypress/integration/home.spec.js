/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('.focus() - focus on a DOM element', () => {
        // https://on.cypress.io/focus
        // cy.get('.action-focus').focus()
        //   .should('have.class', 'focus')
        //   .prev().should('have.attr', 'style', 'color: orange;')

        cy.get('#address-grid')
        
    })
})