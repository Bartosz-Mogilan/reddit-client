describe("My Reddit App E2E Tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("loads initial posts on the homepage", () => {
      cy.get("[class*='postList']").find("[class*='card']").should("have.length.greaterThan", 0);
    });
  
    it("allows searching posts", () => {
      cy.get("input[placeholder='Search posts...']").type("react");
      cy.get("[class*='postList']")
        .find("[class*='postTitle']")
        .each(($el) => {
          cy.wrap($el).should("contain.text", "react");
        });
    });
  
    it("allows filtering posts", () => {
      cy.contains("New").click();
      cy.get("[class*='postList']").find("[class*='card']").should("exist");
    });
  
    it("shows detailed view when a post is clicked", () => {
      cy.get("[class*='postList']")
        .find("[class*='card']")
        .first()
        .click();
      cy.contains("← Back").should("exist");
    });
  
    it("has a working scroll-to-top button", () => {
      cy.scrollTo("bottom");
      cy.get("[data-cy='scroll-to-top']").should("be.visible").click();
      cy.window().its("pageYOffset").should("equal", 0);
    });
  });
  