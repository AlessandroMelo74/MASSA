describe('Criando nova Consulta por CEP', function() {
        Cypress._.times(3, () => {
        it('Consulta por CEP ', function() {
              cy.login()         
              
              cy.ProjetoCep()
      
              cy.Sair() 
           })
          })
        })