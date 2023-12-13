Cypress.on('window:before:load', windows => {

})
describe('Obito', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme-frontend-dev.azurewebsites.net/auth/login')
        })
       
      it('Obito', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-3').should('be.visible').click()
        cy.get('#mat-input-4').type('00781180856')
        cy.get('#mat-input-5').type('NILSON KAZUO')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-3').should('be.visible').click()
        cy.get('#mat-input-4').type('01234567890')
        cy.get('#mat-input-5').type('FRANCISCA PEREIRA')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-3').should('be.visible').click()
        cy.get('#mat-input-4').type('00401347761')
        cy.get('#mat-input-5').type('CARLA CRISTINA')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

      })

    })