Cypress.on('window:before:load', windows => {

})
describe('Perfil Comportamental', function() {
    const THREE_SECONDS_IN_ML = 3000
      beforeEach(function() {
        cy.visit('https://confirme30-stg.confirmeonline.com.br/')
        })
       
      it('Perfil Comportamental', function() {
        cy.login()       
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-0').should('be.visible').click()
        cy.get('#mat-input-4').type('07432529779')
        cy.get('.btn-section__search > .mdc-button__label').click()  
        cy.get('.mdc-button__label > span').should('be.visible').click()
        cy.get('#mat-input-5').type('14134392764{enter}')
        cy.Sair()
        
        cy.login()
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-0').should('be.visible').click()
        cy.get('#mat-input-4').type('06923890756')
        cy.get('.btn-section__search > .mdc-button__label').click()  
        cy.get('.mdc-button__label > span').should('be.visible').click()
        cy.get('#mat-input-5').type('04251089707{enter}')  
        cy.Sair()

        cy.login()
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click()
        cy.get('#mat-option-0').should('be.visible').click()
        cy.get('#mat-input-4').type('66359414449')
        cy.get('.btn-section__search > .mdc-button__label').click()  
        cy.get('.mdc-button__label > span').should('be.visible').click()
        cy.get('#mat-input-5').type('13301611656{enter}')
      
        cy.Sair()

    })

})