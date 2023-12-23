Cypress.on('window:before:load', windows => {

})
describe('Telefone', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme30-dev.confirmeonline.com.br/auth/login')
        })
       
      it('Telefone', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-4').type('21993316408')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-5').type('21992080749{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-6').type('21965160554{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-7').type('21995714645{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-8').type('21964432606{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-9').type('21993661321{enter}')

        cy.Sair()

      })

    })