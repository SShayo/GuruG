








/*describe('ParaBank Banking Application', () => {

  beforeEach(() => {
    cy.visit('/index.htm');
  });

  it('should display the banking homepage', () => {

    cy.contains('ParaBank')
      .should('be.visible');

    cy.get('input[name="username"]')
      .should('be.visible');

    cy.get('input[name="password"]')
      .should('be.visible');

  });

  it('should display an error for invalid login', () => {

    cy.get('input[name="username"]')
      .type('invaliduser123');

    cy.get('input[name="password"]')
      .type('WrongPassword123');

    cy.get('input[value="Log In"]').click();

    cy.get('#rightPanel')
      .should('contain', 'Error');

  });

  it('should navigate to the registration page', () => {

    cy.contains('Register')
      .click();

    cy.url().should('include', 'register.htm');

    cy.get('input[name="customer.firstName"]')
      .should('be.visible');

  });

  it('should navigate to the forgot login information page', () => {

    cy.contains('Forgot login info?')
      .click();

    cy.url().should('include', 'lookup.htm');

    cy.get('input[name="firstName"]')
      .should('be.visible');

  });

});
*/