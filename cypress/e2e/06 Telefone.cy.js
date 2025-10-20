describe('Criando nova Consulta Telefone', function() {
        Cypress._.times(3, () => {
        it('Consulta por Telefone', function() {
              cy.login()         
              
              cy.ProjetoTelefone()
      
              cy.Sair() 
           })
          })
        })
