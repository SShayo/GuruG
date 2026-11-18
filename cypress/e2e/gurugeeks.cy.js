describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login successfully", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
  });

  it("should not login successfully and display error", () => {
    cy.get("#username").type("tomsmit");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid");
  });

  it("should not login successfully and display error", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your password is invalid");
  });
})