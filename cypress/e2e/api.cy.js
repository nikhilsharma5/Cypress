describe("API Automation", () => {
  it("POST", () => {
    cy.fixture("post.json").then((data) => {
      cy.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        body: data,
      }).then((response) => {
        expect(response.body).to.have.key("id", "userId", "body", "title");
        expect(response.body).to.have.any.keys(["id", "userId"]);
        // try {
        //   expect(response.body).to.have.any.keys(["aid"]);
        // } catch {
        //   throw Error("Invalid key try fixing logic");
        // }
        cy.log(response.body);
      });
    });
  });

  it("PUT", () => {
    cy.fixture("post.json").then((data) => {
      data.userId = 2;
      cy.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT",
        body: data,
      }).then((response) => {
        expect(response.body).to.have.key("id", "userId", "body", "title");
        expect(response.body).to.have.any.keys(["id", "userId"]);
        // try {
        //   expect(response.body).to.have.any.keys(["aid"]);
        // } catch {
        //   throw Error("Invalid key try fixing logic");
        // }
        cy.log(response.body);
      });
    });
  });

  it("PATCH", () => {
    cy.fixture("post.json").then((data) => {
      data.title = "shhh";
      cy.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PATCH",
        body: data,
      }).then((response) => {
        expect(response.body).to.have.key("id", "userId", "body", "title");
        expect(response.body).to.have.any.keys(["id", "userId"]);
        // try {
        //   expect(response.body).to.have.any.keys(["aid"]);
        // } catch {
        //   throw Error("Invalid key try fixing logic");
        // }
        cy.log(response.body);
      });
    });
  });
});
