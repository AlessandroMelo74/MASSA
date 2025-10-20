describe('Criando nova por Razão Social', function() {
        Cypress._.times(3, () => {
        it('Consulta por Razão Social', function() {
              cy.login()         
              
              cy.ProjetoRazaoSocial()
      
              cy.Sair() 
           })
          })
        })
