describe('Criando nova Consulta por Obito', function() {
        Cypress._.times(1, () => {
        it('Consulta por Obito', function() {
              cy.login()         
              
              cy.ProjetoObito()
      
              cy.Sair() 
           })
          })
        })