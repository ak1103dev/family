describe('Login Page', function () {
  beforeEach(() => {
    cy.visit('');
  });

  describe('Input correct username and password', () => {
    describe('then click login button', () => {
      it('should redirect to a dashboard page', () => {
        cy.get('[data-testid=username]').type('admin');
        cy.get('[data-testid=password]').type('password');
        cy.get('#login-form').submit();

        cy.get('h1').should('be.text', 'Dashboard');
      })
    })
  })

  describe('No input username and password', () => {
    describe('then click login button', () => {
      it('should show required field', () => {
        cy.get('#login-form').submit();

        cy.get('[data-testid=username-error]').should('be.text', 'username is required.');
        cy.get('[data-testid=password-error]').should('be.text', 'password is required.');
      })
    })
  })

  describe('Input wrong username', () => {
    describe('then click login button', () => {
      it('should show login failed', () => {
        cy.get('[data-testid=username]').type('user');
        cy.get('[data-testid=password]').type('ggg');
        cy.get('#login-form').submit();

        cy.get('[data-testid=login-error]').should('be.text', 'Login failed');
      })
    })
  })

  describe('Input correct username and wrong password', () => {
    describe('then click login button', () => {
      it('should show login failed', () => {
        cy.get('[data-testid=username]').type('admin');
        cy.get('[data-testid=password]').type('ggg');
        cy.get('#login-form').submit();

        cy.get('[data-testid=login-error]').should('be.text', 'Login failed');
      })
    })
  })
})