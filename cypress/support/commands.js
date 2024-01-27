Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('https://confirme30-dev.confirmeonline.com.br')

    cy.get('#mat-input-0').type(user)
    cy.get('.ng-invalid.ng-dirty > .form-field-password > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(password, { log: false })
    cy.contains(' ACESSAR ').click()
    
  }
  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
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