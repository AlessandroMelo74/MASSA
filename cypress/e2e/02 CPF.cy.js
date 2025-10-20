describe('Criando nova Consulta por CPF', function() {
        Cypress._.times(3, () => {
        it('Consulta por CPF ', function() {
              cy.login()         
              
             cy.ProjetoCPF()
    
              cy.Sair() 
           })
          })
        })