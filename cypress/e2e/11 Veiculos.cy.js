Cypress.on('window:before:load', windows => {

})
describe('Nome (Veiculos', function() {
       beforeEach(function() {
        cy.login()
        })
       
      it('Veiculos)', function() {

        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-10 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('82901000000127')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()
        
        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-10 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('33252156010424')
        cy.get('#mat-input-6').type('712423907')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()

        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-10 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('66497680730')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()
        
        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-10 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('33530486012569')
        cy.get('#mat-input-6').type('891902422')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()
      
    })
  })


