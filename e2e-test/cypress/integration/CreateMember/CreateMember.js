import { Before, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Before({ tags: "@creatememberpage" }, () => {
  const username = 'admin'
  const password = 'password'
  cy.visit('');
  cy.get('[data-testid=username]').type(username);
  cy.get('[data-testid=password]').type(password);
  cy.get('#login-form').submit();
  cy.get('h1').should('be.text', 'Dashboard');
  cy.visit('/admin/members');
  cy.get('h1').should('be.text', 'Members');
});

When('I click create link', () => {
  cy.get('[data-testid="create-member-link"]').click()
})

When('I fill {string} as {string}', (key, value) => {
  cy.get(`input[name=${key}]`).type(value);
})

Then('I should be redirected to a memmbers page', () => {
  cy.get('h1').should('be.text', 'Members');
})
