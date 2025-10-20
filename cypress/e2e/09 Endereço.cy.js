describe('Criando nova por Endereço', function() {
  Cypress._.times(3, () => {
  it('Consulta por Endereço', function() {
        cy.login()         
        
        cy.ProjetoEndereço()

        cy.Sair() 
     })
    })
  })