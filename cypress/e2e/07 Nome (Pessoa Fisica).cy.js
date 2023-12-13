Cypress.on('window:before:load', windows => {

})
describe('Nome (Pessoa Fisica', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme-frontend-dev.azurewebsites.net/auth/login')
        })
       
      it('Nome (Pessoa Fisica)', function() {
        cy.login()          
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-6 > .mdc-list-item__primary-text').should('be.visible').click()
        //cy.get('#mat-input-4').type('Marcelo Andre Antunes')
        //cy.get('.btn-section__search > .mdc-button__label').click()
        //cy.get('.default').should('be.visible').click()
        //cy.get('.mat-mdc-menu-item').should('be.visible').click()

        /*cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('33530486012569')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('33252156010424')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('33252156000119')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('10144873000121')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('10143676000198')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('10157559000183')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()

        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('10157719000194')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.default').should('be.visible').click()
        cy.get('.mat-mdc-menu-item').should('be.visible').click()
      */})

})