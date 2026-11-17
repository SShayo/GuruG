describe("Login", () => {
  beforeEach(() => cy.visit("/login"));

  it("logs in with valid credentials", () => {
    cy.get('[data-cy="email"]').type("user@test.com");
    cy.get('[data-cy="password"]').type("Password123");
    cy.get('[data-cy="submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.contains("Welcome").should("be.visible");
  });

  it("shows an error for invalid credentials", () => {
    cy.get('[data-cy="email"]').type("user@test.com");
    cy.get('[data-cy="password"]').type("wrong");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]').should("be.visible").and("contain", "Invalid");
  });
});