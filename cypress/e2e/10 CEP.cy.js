Cypress.on('window:before:load', windows => {

})
describe('Nome (CEP', function() {
       beforeEach(function() {
        cy.login()
        })
       
      it('Nome (CEP)', function() {

        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('21640001')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
       cy.Sair()

       cy.login()
       cy.get('.mat-mdc-select-placeholder').click()
       cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
       cy.get('#mat-input-4').type('21750000')
       cy.get('.btn-section__search > .mdc-button__label').click()
       
      cy.Sair()

      cy.login()
      cy.get('.mat-mdc-select-placeholder').click()
      cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
      cy.get('#mat-input-4').type('21810042')
      cy.get('.btn-section__search > .mdc-button__label').click()
      
     cy.Sair()

     cy.login()
     cy.get('.mat-mdc-select-placeholder').click()
     cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
     cy.get('#mat-input-4').type('21351060')
     cy.get('.btn-section__search > .mdc-button__label').click()
     
    cy.Sair()

    cy.login()
    cy.get('.mat-mdc-select-placeholder').click()
    cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
    cy.get('#mat-input-4').type('70040010')
    cy.get('.btn-section__search > .mdc-button__label').click()
    
   cy.Sair()

   cy.login()
   cy.get('.mat-mdc-select-placeholder').click()
   cy.get('#mat-option-9 > .mdc-list-item__primary-text').click()
   cy.get('#mat-input-4').type('70040020')
   cy.get('.btn-section__search > .mdc-button__label').click()
   
  cy.Sair()

    })
  })


