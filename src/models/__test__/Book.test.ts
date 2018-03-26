import { Book } from "../Book";

describe("Book.findByID", () => {
  it("should return the correct data", async () => {
    const book = await Book.findByID("RJxWIQOvoZUC");
    expect(book).toEqual({
      id: "RJxWIQOvoZUC",
      title: "Flowers",
      authors: ["Gail Saunders-Smith"],
      publisher: "Capstone",
      description:
        "Simple text and photographs depict the parts of flowers and their pollination."
    });
  });
});

describe("Book.fromVolume()", () => {
  it("should transform a volumes data into a Book", () => {
    const volume = {
      id: "131890",
      volumeInfo: {
        title: "The Hunger Games",
        authors: ["JK Rowling"],
        publisher: "Harper Collins",
        description: "A book"
      }
    };

    const book = Book.fromVolume(volume);
    expect(book).toEqual({
      id: "131890",
      title: "The Hunger Games",
      authors: ["JK Rowling"],
      publisher: "Harper Collins",
      description: "A book"
    });
  });

  it("should return an instance of Book", () => {
    const volume = {
      id: "131890",
      volumeInfo: {
        title: "The Hunger Games",
        authors: ["JK Rowling"],
        publisher: "Harper Collins",
        description: "A book"
      }
    };

    const book = Book.fromVolume(volume);

    expect(book).toBeInstanceOf(Book);
  });
});

describe("new Book()", () => {
  it("should correctly assign properties", () => {
    const testData = {
      id: "131890",
      title: "The Hunger Games",
      authors: ["JK Rowling"],
      publisher: "Harper Collins",
      description: "A book"
    };

    const book = new Book(testData);
    expect(book).toHaveProperty("id", testData.id);
    expect(book).toHaveProperty("title", testData.title);
    expect(book).toHaveProperty("authors", testData.authors);
    expect(book).toHaveProperty("publisher", testData.publisher);
    expect(book).toHaveProperty("description", testData.description);
  });
});
