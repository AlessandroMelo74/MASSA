Cypress.on('window:before:load', windows => {

})
describe('CNPJ', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme30-dev.confirmeonline.com.br/auth/login')
        })
       
      it('CNPJ', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-2').should('be.visible').click()
        cy.get('#mat-input-4').type('82901000000127')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-5').type('33530486012569{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-6').type('33252156010424{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-7').type('33252156000119{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-8').type('10144873000121{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-9').type('10143676000198{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-10').type('10143676000198{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-11').type('10157559000183{enter}')
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-12').type('10157719000194{enter}')

        cy.Sair()
       
    })

})