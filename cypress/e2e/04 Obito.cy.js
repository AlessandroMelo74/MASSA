Cypress.on('window:before:load', windows => {

})
describe('Obito', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme30-dev.confirmeonline.com.br/auth/login')
        })
       
      it('Obito', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-3').should('be.visible').click()
        cy.get('#mat-input-4').type('00781180856')
        cy.get('#mat-input-5').type('NILSON KAZUO')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-8').type('01234567890')
        cy.get('#mat-mdc-form-field-label-22 > .ng-tns-c59-16').type('FRANCISCA PEREIRA{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-12').type('00401347761')
        cy.get('#mat-mdc-form-field-label-32 > .ng-tns-c59-22').type('CARLA CRISTINA{enter}')
        cy.Sair()

        })

    })