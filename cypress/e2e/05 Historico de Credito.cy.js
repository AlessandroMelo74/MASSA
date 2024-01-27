Cypress.on('window:before:load', windows => {

})
describe('Historico de Credito', function() {
        beforeEach(function() {
        cy.login()
        })
       
      it('Historico de Credito', function() {
              
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-4').should('be.visible').click()
        cy.get('#mat-input-4').type('67321429768')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-5').type('10385731817')
        cy.get('.btn-section__search > .mdc-button__label').click()

        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-6').type('03231005620')
        cy.get('.btn-section__search > .mdc-button__label').click()

        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-7').type('11266617752')
        cy.get('.btn-section__search > .mdc-button__label').click()

        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-8').type('11089558783')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()

      })

    })