import { faker } from '@faker-js/faker';

// Login Command
Cypress.Commands.add('login', (user = Cypress.env('user_name'), password = Cypress.env('user_password')) => {
  const login = () => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.get('#mat-input-0').type(user);
    cy.get('#mat-mdc-form-field-label-1 > mat-label').should('be.visible').type(password, { log: false });
    cy.get('.mdc-button__label').click();
    cy.contains('Olá CREDILINK', { timeout: 15000 }).should('be.visible');
    cy.url().should('include', '/search');
  };
  login();
});

// Logout Command
Cypress.Commands.add('Sair', () => {
  cy.get('.default').should('be.visible').click();
  cy.get('.mat-mdc-menu-item').should('be.visible').click();
});

// ProjetoCPF Command
Cypress.Commands.add('ProjetoCPF', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').contains('CPF').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.cpf);
    cy.get('#mat-mdc-checkbox-0-input').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-mdc-checkbox-5 > .mdc-form-field').click();
    cy.get('.mat-mdc-form-field-type-mat-input > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(PF.cpf);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(3000);
  });
});

// ProjetoCNPJ Command
Cypress.Commands.add('ProjetoCNPJ', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').contains('CNPJ').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.cnpj);
    cy.get('#mat-mdc-checkbox-0-input').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-3').type(PF.cnpj);
    cy.get('#mat-mdc-checkbox-6 > .mdc-form-field').click();
    cy.get('.btn-section__search > .mdc-button__label').click().wait(3000);
  });
});

// ProjetoObito Command
Cypress.Commands.add('ProjetoObito', () => {
  cy.get('[formcontrolname="searchCategory"]').click();
  cy.get('[role="listbox"]').contains('Óbito').should('be.visible').click();
  cy.get('#mat-input-2').type('00781180856');
  cy.get('#mat-input-3').type('NILSON KAZUO');
  cy.get('.btn-section__search > .mdc-button__label').click();
  cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
  cy.get('#mat-input-6').type('01234567890');
  cy.get('#mat-input-7').type('FRANCISCA PEREIRA{enter}');
  cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
  cy.get('#mat-input-10').type('00401347761');
  cy.get('#mat-input-11').type('CARLA CRISTINA{enter}');
});

// ProjetoHistoricoCredito Command
Cypress.Commands.add('ProjetoHistoricoCredito', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').contains('Histórico de Crédito').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.cpf);
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-3').type(PF.cnpj);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
    cy.get('#mat-input-4').type(PF.cpf);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
  });
});

// ProjetoTelefone Command
Cypress.Commands.add('ProjetoTelefone', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').contains('Telefone').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.telefone);
    cy.get('#mat-mdc-checkbox-0-input').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-mdc-checkbox-5 > .mdc-form-field').click();
    cy.get('#mat-input-3').type(PF.telefone);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
    cy.get('#mat-mdc-checkbox-10 > .mdc-form-field').click();
    cy.get('#mat-input-4').type(PF.telefone);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
  });
});

// ProjetoPessoaFisica Command
Cypress.Commands.add('ProjetoPessoaFisica', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').contains('Nome (Pessoa Física)').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.nome);
    cy.get('.mb-4 > .col-5 > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(PF.data_nasc);
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-6').type(PF.nome);
    cy.get('#mat-mdc-form-field-label-11 > mat-label').type(PF.data_nasc);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
  });
});

// ProjetoRazaoSocial Command
Cypress.Commands.add('ProjetoRazaoSocial', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').scrollTo('bottom').contains('Razão social ').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.razaosocial);
    cy.get('.mb-4 > .col-4 > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(PF.data_abert);
    cy.get('.btn-section__search > .mdc-button__label').should('be.visible').click().wait(2000);
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-6').type(PF.razaosocial);
    cy.get('#mat-mdc-form-field-label-11 > mat-label').type(PF.data_abert);
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
  });
});

// ProjetoEndereco Command
Cypress.Commands.add('ProjetoEndereço', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').scrollTo('bottom').contains('Endereço').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.endereco);
    cy.get('#mat-input-3').type(PF.numero);
    cy.get('.mat-mdc-select-placeholder').click();
    cy.get('#mat-option-28').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-9').type(PF.endereco);
    cy.get('#mat-input-10').type(PF.numero);
    cy.get('.mat-mdc-select-placeholder').click();
    cy.get('#mat-option-71').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
  });
});

// ProjetoCep Command
Cypress.Commands.add('ProjetoCep', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"]').click();
    cy.get('[role="listbox"]').scrollTo('bottom').contains('CEP').should('be.visible').click();
    cy.get('#mat-input-2').type(PF.cep);
    cy.get('#mat-input-3').type(PF.numero);
    cy.get('.mdc-label > span').should('be.visible').click();
    cy.get('.btn-section__search > .mdc-button__label').click();
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000);
    cy.get('#mat-input-7').type(PF.cep);
    cy.get('#mat-mdc-checkbox-114 > div > label > span').click();
    cy.get('.btn-section__search > .mdc-button__label').click().wait(2000);
  });
});

// ProjetoVeiculos Command
Cypress.Commands.add('ProjetoVeiculos', project => {
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
    cy.get('[formcontrolname="searchCategory"').click()
    cy.get('[role="listbox"]').scrollTo('bottom').contains('Veículo').should('be.visible').click()                
    cy.get('#mat-input-4').type(PF.renavam)
    cy.get('.btn-section__search > .mdc-button__label').click()
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000)
  });
    cy.fixture('data.json').then(data => {
      const randomIndex = Math.floor(Math.random() * data.PF.length);
      const PF = data.PF[randomIndex];
    cy.get('#mat-input-10').type(PF.placa)                
    cy.get('.btn-section__search > .mdc-button__label').click()
    cy.get('.mdc-button__label > span').should('be.visible').click().wait(2000)
  });
  cy.fixture('data.json').then(data => {
    const randomIndex = Math.floor(Math.random() * data.PF.length);
    const PF = data.PF[randomIndex];
  cy.get('#mat-input-16').type(PF.chassi)               
  cy.get('.btn-section__search > .mdc-button__label').click()  
});

});