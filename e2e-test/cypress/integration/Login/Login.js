import { Before, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.visit('');
});

When('I fill username as {string} and password as {string}', (username, password) => {
  if (username) {
    cy.get('[data-testid=username]').type(username);
  }
  if (password) {
    cy.get('[data-testid=password]').type(password);
  }
});

And('I click on the login button', () => {
  cy.get('#login-form').submit();
});

Then('I should be seen message {string} and {string}', (usernameError, passwordError) => {
  cy.get('[data-testid=username-error]').should('be.text', usernameError);
  cy.get('[data-testid=password-error]').should('be.text', passwordError);
})

Then('I should be redirected to a dashboard page', () => {
  cy.get('h1').should('be.text', 'Dashboard');
})

Then('I should be seen message as {string}', (message) => {
  cy.get('[data-testid=login-error]').should('be.text', message);
})
