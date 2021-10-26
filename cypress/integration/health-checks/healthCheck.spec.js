describe("Check Health Check Navigations", () => {
  it("Check Health Check Navigations", () => {
    cy.visit("http://localhost:3006/");
    cy.url().should("include", "/login");
    cy.get("[data-cy=email]").type("newlease");
  });
});
