describe('Criando nova Consulta por CNPJ', function() {
  Cypress._.times(3, () => {
  it('Consulta por CNPJ ', function() {
        cy.login()         
        
        cy.ProjetoCNPJ()

        cy.Sair() 
     })
    })
  })