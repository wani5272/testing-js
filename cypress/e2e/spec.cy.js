describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      {
        url: "**",
        middleware: true,
      },
      (req) => {
        req.on("response", (res) => {
          res.setThrottle(1208);
        });
      }
    );
  });
  it("bfo-website", () => {
    cy.visit("https://berufsbildung-vs.ch");
    cy.viewport(1920, 1080);
    cy.get(
      '#nav-21 > [href="https://www.berufsbildung-vs.ch/berufslehre"] > span'
    ).click();
    cy.get("#listing_search_input_49").type("Informatik");
    cy.get(".button").click();
    cy.contains(".listing-entry-inline", "Informatiker/in EFZ (EMVs)")
      .find('[class="listing_entry_link"]')
      .click();
    cy.contains("Voraussetzungen");
    cy.contains("Schnuppertage");
    cy.contains("Anmeldung");
    cy.get(".resource_background > img").should("be.visible");
  });
});
