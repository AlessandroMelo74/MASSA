Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.visit('https://confirme30-dev.confirmeonline.com.br/auth/login')

    cy.get('#mat-input-0').type(user)
    cy.get('.ng-invalid.ng-dirty > .form-field-password > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(password, { log: false })
    cy.contains(' ACESSAR ').click()
    
  }

  login()
})

Cypress.Commands.add('Sair', (
  ) => {
    const Sair = () => {
    cy.get('.default').should('be.visible').click()
    cy.get('.mat-mdc-menu-item').should('be.visible').click()
    }
    Sair()

  })