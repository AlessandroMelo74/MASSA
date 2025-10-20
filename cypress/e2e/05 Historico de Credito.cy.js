describe('Criando nova Consulta Histórico de Crédito', function() {
        Cypress._.times(3, () => {
        it('Consulta por Histórico de Crédito ', function() {
              cy.login()         
              
              cy.ProjetoHistoricoCredito()
      
              cy.Sair() 
           })
          })
        })