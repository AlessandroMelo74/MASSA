describe('Criando nova Consulta por Veiculos', function() {
        Cypress._.times(3, () => {
        it('Consulta por Veiculos', function() {
              cy.login()         
              
             cy.ProjetoVeiculos()
    
              cy.Sair() 
           })
          })
        })