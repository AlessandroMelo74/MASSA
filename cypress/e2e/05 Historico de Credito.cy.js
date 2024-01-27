Cypress.on('window:before:load', windows => {

})
describe('Historico de Credito', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme30-stg.confirmeonline.com.br/')
        })
       
      it('Historico de Credito', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-4').should('be.visible').click()
        cy.get('#mat-input-4').type('67321429768')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-5').type('10385731817')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-6').type('03231005620')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-7').type('99595729787')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-8').type('10156870000108')               
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-9').type('10157719000194')
        cy.get('.btn-section__search > .mdc-button__label').click()
        cy.get('.mdc-button__label > span').click()
        cy.get('#mat-input-10').type('10143676000198')
        cy.get('.btn-section__search > .mdc-button__label').click()
        
        cy.Sair()

      })

    })