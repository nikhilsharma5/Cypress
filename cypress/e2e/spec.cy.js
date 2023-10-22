describe("template spec", () => {
  it("ui", () => {
    cy.visit("https://sharma-nikhil.com");
    cy.contains("Resume & Cover Letter").click();
    cy.contains("Expand").click();
    cy.contains("Nikhil Sharma").click();
  });

  it("api - with expect-eq", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/comments?postId=1",
      method: "GET",
    }).then((response) => {
      expect(response.body[0].name).to.eq("id labore ex et quam laborum");
      cy.log(response.body);
    });
  });

  it("deep eq", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.title).to.deep.eq("delectus aut autem");
      cy.log(response.body);
    });
  });

  it("nested", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body).to.have.nested.property("title");
      expect(response.body).to.nested.include({ userId: 1 });
      cy.log(response.body);
    });
  });

  it("ordered - for arrays in response", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      // expect(response.body).to.have.ordered.<key>([1,2]);
      cy.log(response.body);
    });
  });

  it("any-all key", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body).to.have.any.keys(["userId", "userid"]);
      expect(response.body).to.have.all.keys([
        "completed",
        "id",
        "title",
        "userId",
      ]);
      cy.log(response.body);
    });
  });

  it("includes - works on an array", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect([1, 2, 3]).to.include(1);
      cy.log(response.body);
    });
  });

  it("includes - works on an array", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.userId).to.be.an("number");
      cy.log(response.body);
    });
  });

  it("to be true or false", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.completed).to.be.false;
      cy.log(response.body);
    });
  });

  it("to be null", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.completed).to.be.not.null;
      cy.log(response.body);
    });
  });

  it("to be undefined", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.completed).to.be.not.undefined;
      cy.log(response.body);
    });
  });

  it("to be exist", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.userId).to.exist;
      cy.log(response.body);
    });
  });

  it("to be empty", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body).to.be.not.empty;
      cy.log(response.body);
    });
  });

  it("to be instance of", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect([1, 2, 3]).to.be.instanceOf(Array);
      cy.log(response.body);
    });
  });

  it("to check length", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.title).to.have.length.of.at.most(20);
      cy.log(response.body);
    });
  });

  it("to have property", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body).to.be.have.property("userId");
      cy.log(response.body);
    });
  });

  it("verify length of a string", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.title).to.have.lengthOf(18);
      cy.log(response.body);
    });
  });

  it("match regex", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      expect(response.body.title).to.match(/^[a-zA-z1-9]+/);
      cy.log(response.body);
    });
  });

  it("to have keys", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      cy.log(response.body);
      expect(response.body).to.have.keys("userId", "id", "title", "completed");
    });
  });

  /*
  it("throwing exception", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      cy.log(response.body);
      try {
        divide();
      } catch (err) {
        expect(divide()).to.throw("Invalid Key Found");
      }
    });
  });

  const divide = function () {
    throw Error("Random Error");
  };
  */

  it("satisfy a condition", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.userId).to.satisfy((num) => num > 0);
    });
  });

  it("close to logic for a number -> which looks up a range from x +/- y", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.userId).to.closeTo(5, 4);
    });
  });

  /*
  multiple level validations in json response = deep.property
  ownPorperty = to.have.own.property('length')
  ownPropertyDescriptor
  */
});
