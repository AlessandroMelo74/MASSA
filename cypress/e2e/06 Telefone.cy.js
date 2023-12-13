Cypress.on('window:before:load', windows => {

})
describe('Telefone', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme-frontend-dev.azurewebsites.net/auth/login')
        })
       
      it('Telefone', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('21993316408')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('21992080749')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('21965160554')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('2133392218')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('21997286117')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-5').should('be.visible').click()
        cy.get('#mat-input-9').type('21974525600')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

      })

    })