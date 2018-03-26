const Book = require("../Book");

describe("new Book()", () => {
  it("should correctly assign parameters", () => {
    const book = new Book({
      id: "19028",
      title: "The Hunger Games"
    });

    expect(book).toHaveProperty("id", "19028");
    expect(book).toHaveProperty("title", "The Hunger Games");
  });
});
