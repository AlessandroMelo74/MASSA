Cypress.on('window:before:load', windows => {

})
describe('Nome (Endereço', function() {
       beforeEach(function() {
        cy.login()
        })
       
      it('Nome (Endereço)', function() {

        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-8 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('Rua Alcobaça')
        cy.get('#mat-input-5').type('300')
        cy.get('#mat-input-6').type('400')
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-29').click()
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()

        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-8 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('Rua Victor Civita')
        cy.get('#mat-input-5').type('66')
        cy.get('#mat-input-6').type('134')
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-29').click()
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()
      
        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-8 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('Avenida das Nacoes Unidas')
        cy.get('#mat-input-5').type('12551')
        cy.get('#mat-input-6').type('12551')
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-35').click()
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()

    })
  })


