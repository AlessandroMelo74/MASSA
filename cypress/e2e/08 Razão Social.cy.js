Cypress.on('window:before:load', windows => {

})
describe('Nome (Razão Social', function() {
       beforeEach(function() {
        cy.login()
        })
       
      it('Nome (Razão Social)', function() {

        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-7 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('PHILIPS DO BRASIL LTDA')
        cy.get('#mat-mdc-form-field-label-12 > .ng-tns-c67-9').type('06/05/1998')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()
      
        cy.login()
        
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-7 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('CARBON FIT ACADEMIA LTDA')
        cy.get('#mat-mdc-form-field-label-12 > .ng-tns-c67-9').type('27/08/2019')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()

        cy.login()
        cy.get('.mat-mdc-select-placeholder').click()
        cy.get('#mat-option-7 > .mdc-list-item__primary-text').click()
        cy.get('#mat-input-4').type('BRADESCO')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.Sair()



    })
  })


