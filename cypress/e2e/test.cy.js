describe("test file description", () => {
  it("i want to access gmail.com and verify title", () => {
    cy.viewport("samsung-s10");
    cy.visit("www.gmail.com");
    cy.contains("Sign in")
      .invoke("text")
      .then((text) => {
        expect(text).contains("Sign");
      });
    cy.contains("Enter an email or phone number").should("not.exist");
    cy.contains("Next").click();
    cy.contains("Enter an email or phone number").should("be.visible");
    cy.contains("Enter an email or phone number").should(
      "have.css",
      "font-size",
      "12px"
    );
    cy.contains("Enter an email or phone number").should("be.visible");
  });

  it("another api test", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments?postId=1",
    }).then((response) => {
      cy.log(response.body);
      for (let obj of response.body) {
        if (obj.name === "vero eaque aliquid doloribus et culpa")
          cy.log(obj.name);
      }
    });
  });
});
