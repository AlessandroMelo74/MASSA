Cypress.on('window:before:load', windows => {

})
describe('CPF', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme-frontend-dev.azurewebsites.net/auth/login')
        })
       
      it('CPF', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('714.543.231-59')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('801.250.341-72')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('61826990356')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('66497680730')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('10012633402')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('10012610895')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('10012642746')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-1').should('be.visible').click()
        cy.get('#mat-input-4').type('10012676993')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()
    })

})