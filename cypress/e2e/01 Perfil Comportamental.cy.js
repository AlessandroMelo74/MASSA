Cypress.on('window:before:load', windows => {

})
describe('Perfil Comportamental', function() {
        beforeEach(function() {
        cy.login()
        })
       
      it('Perfil Comportamental', function() {
             
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