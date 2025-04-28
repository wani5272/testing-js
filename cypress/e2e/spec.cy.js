describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://berufsbildung-vs.ch");
    cy.viewport(1920, 2080);
    cy.get(
      '#nav-21 > [href="https://www.berufsbildung-vs.ch/berufslehre"] > span'
    ).click();
    cy.get("#listing_search_input_49").type("Informatik");
    cy.get(".button").click();
    cy.contains("Informatiker/in EFZ (EMVs)").scrollIntoView();
    cy.contains(".listing-entry-inline", "EMVs")
      .find('[class="listing_entry_link"]')
      .click();
  });
});
