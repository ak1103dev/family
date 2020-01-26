import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
 
Given('I am on the homepage', () => {
  cy.visit('');
});

When('I fill the search input with the {string} term', (term) => {
  cy.get('.search-field').type(term);
});

Then('the book {string} should be visible on the list in the shopping cart', (bookName) => {
  cy.get('div[data-testid="shoppingCart"]').contains(bookName).as('addedBook');
});
 
And('I should be able to add more items of the same type', () => {
  cy.get('@addedBook').find('button[data-testid="addButton"]')
});
