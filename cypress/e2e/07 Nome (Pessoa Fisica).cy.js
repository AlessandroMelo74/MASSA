describe('Criando nova por Nome (Pessoa Fisica)', function() {
        Cypress._.times(3, () => {
        it('Consulta por Nome (Pessoa Fisica)', function() {
              cy.login()         
              
              cy.ProjetoPessoaFisica()
      
              cy.Sair() 
           })
          })
        })