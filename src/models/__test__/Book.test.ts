import { Book } from "../Book";

jest.mock("../../lib/cache");

describe("Book.findByID", () => {
  it("should return the correct data", async () => {
    const book = await Book.findByID("RJxWIQOvoZUC");
    expect(book).toEqual({
      id: "RJxWIQOvoZUC",
      title: "Flowers",
      authors: ["Gail Saunders-Smith"],
      publisher: "Capstone",
      description:
        "Simple text and photographs depict the parts of flowers and their pollination.",
      covers: {
        smallThumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE707sRXEdLx7WLsXbzf9jB9O3z2BH6IjcyNNI71pDy-YlaRxoYBcj2iFSs1a_DcjDbgtZhXOkIo1N2cT6Tlu2nEYX_n8uCeSxOvqQvChGGzFc1U_6W6yfbztQOp-ymIyOFBbC1jw&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72w4Br9aiMsuwmRRMWDKVA4o8DEAYCDAeOXszrtfhKVAy401Ond0sn5A11-vZn0tahdsmECYgNRMsfsyU9CM05Cbnfre6CnFGhhNSPzH1X8Jj6YolKlA6lpfgYEreym_UryiCvE&source=gbs_api",
        small:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73QGdCssHVSG3qOTOC4YlELQk3oYJ5zuzaMuFnUVYO7tJ08E2j0KWaw851EUyMKdTKfzkh_kWGUFYpC2hfL-5dEeXXv6Gk0NMVVgIeeqhr1tUuO5iYcyB8HjR-gSYg2sffOh9Wo&source=gbs_api",
        medium:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71Zve1zqIgClyQrBW4fJUU4UDljfqEROCrvJ0913scit1fg4PGoclDNbP6JfrBHmAqPIrzeAj2MLXdNR5UPFhjv1KqmwOpYfUfUS5A1iiuUNkJ8o57LNIObcAgsUjWnIOpdtYUW&source=gbs_api",
        large:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71TrgIJV4-eIvQ18Znn6iu7x2dLXBGXjw-Q3GlGLxx8r8DVmjAdbzVpfkB8I9U93051yLx5m5Hj56l12n1A4g4LW5Wxkb2kLIGvQHPEA1JZhEwsi2LT9RWaUJbqcPh8vR4rPLoA&source=gbs_api",
        extraLarge:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72M_RTRlnAb8r1xTaBV2BQ7ddSatTWJq4oKJ5vt68X1X-PYMajPmRIbp5uWid3cTwbdo1V6ZXls6m7iDiLFk3NkeE5KW5IrXv0tBpj2t4Kdg9wyc-QEyoIXg2e1AiNmPnnKzpFN&source=gbs_api"
      }
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
        description: "A book",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE707sRXEdLx7WLsXbzf9jB9O3z2BH6IjcyNNI71pDy-YlaRxoYBcj2iFSs1a_DcjDbgtZhXOkIo1N2cT6Tlu2nEYX_n8uCeSxOvqQvChGGzFc1U_6W6yfbztQOp-ymIyOFBbC1jw&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72w4Br9aiMsuwmRRMWDKVA4o8DEAYCDAeOXszrtfhKVAy401Ond0sn5A11-vZn0tahdsmECYgNRMsfsyU9CM05Cbnfre6CnFGhhNSPzH1X8Jj6YolKlA6lpfgYEreym_UryiCvE&source=gbs_api",
          small:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73QGdCssHVSG3qOTOC4YlELQk3oYJ5zuzaMuFnUVYO7tJ08E2j0KWaw851EUyMKdTKfzkh_kWGUFYpC2hfL-5dEeXXv6Gk0NMVVgIeeqhr1tUuO5iYcyB8HjR-gSYg2sffOh9Wo&source=gbs_api",
          medium:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71Zve1zqIgClyQrBW4fJUU4UDljfqEROCrvJ0913scit1fg4PGoclDNbP6JfrBHmAqPIrzeAj2MLXdNR5UPFhjv1KqmwOpYfUfUS5A1iiuUNkJ8o57LNIObcAgsUjWnIOpdtYUW&source=gbs_api",
          large:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71TrgIJV4-eIvQ18Znn6iu7x2dLXBGXjw-Q3GlGLxx8r8DVmjAdbzVpfkB8I9U93051yLx5m5Hj56l12n1A4g4LW5Wxkb2kLIGvQHPEA1JZhEwsi2LT9RWaUJbqcPh8vR4rPLoA&source=gbs_api",
          extraLarge:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72M_RTRlnAb8r1xTaBV2BQ7ddSatTWJq4oKJ5vt68X1X-PYMajPmRIbp5uWid3cTwbdo1V6ZXls6m7iDiLFk3NkeE5KW5IrXv0tBpj2t4Kdg9wyc-QEyoIXg2e1AiNmPnnKzpFN&source=gbs_api"
        }
      }
    };

    const book = Book.fromVolume(volume);
    expect(book).toEqual({
      id: "131890",
      title: "The Hunger Games",
      authors: ["JK Rowling"],
      publisher: "Harper Collins",
      description: "A book",
      covers: {
        smallThumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE707sRXEdLx7WLsXbzf9jB9O3z2BH6IjcyNNI71pDy-YlaRxoYBcj2iFSs1a_DcjDbgtZhXOkIo1N2cT6Tlu2nEYX_n8uCeSxOvqQvChGGzFc1U_6W6yfbztQOp-ymIyOFBbC1jw&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72w4Br9aiMsuwmRRMWDKVA4o8DEAYCDAeOXszrtfhKVAy401Ond0sn5A11-vZn0tahdsmECYgNRMsfsyU9CM05Cbnfre6CnFGhhNSPzH1X8Jj6YolKlA6lpfgYEreym_UryiCvE&source=gbs_api",
        small:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73QGdCssHVSG3qOTOC4YlELQk3oYJ5zuzaMuFnUVYO7tJ08E2j0KWaw851EUyMKdTKfzkh_kWGUFYpC2hfL-5dEeXXv6Gk0NMVVgIeeqhr1tUuO5iYcyB8HjR-gSYg2sffOh9Wo&source=gbs_api",
        medium:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71Zve1zqIgClyQrBW4fJUU4UDljfqEROCrvJ0913scit1fg4PGoclDNbP6JfrBHmAqPIrzeAj2MLXdNR5UPFhjv1KqmwOpYfUfUS5A1iiuUNkJ8o57LNIObcAgsUjWnIOpdtYUW&source=gbs_api",
        large:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71TrgIJV4-eIvQ18Znn6iu7x2dLXBGXjw-Q3GlGLxx8r8DVmjAdbzVpfkB8I9U93051yLx5m5Hj56l12n1A4g4LW5Wxkb2kLIGvQHPEA1JZhEwsi2LT9RWaUJbqcPh8vR4rPLoA&source=gbs_api",
        extraLarge:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72M_RTRlnAb8r1xTaBV2BQ7ddSatTWJq4oKJ5vt68X1X-PYMajPmRIbp5uWid3cTwbdo1V6ZXls6m7iDiLFk3NkeE5KW5IrXv0tBpj2t4Kdg9wyc-QEyoIXg2e1AiNmPnnKzpFN&source=gbs_api"
      }
    });
  });

  it("should return an instance of Book", () => {
    const volume = {
      id: "131890",
      volumeInfo: {
        title: "The Hunger Games",
        authors: ["JK Rowling"],
        publisher: "Harper Collins",
        description: "A book",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE707sRXEdLx7WLsXbzf9jB9O3z2BH6IjcyNNI71pDy-YlaRxoYBcj2iFSs1a_DcjDbgtZhXOkIo1N2cT6Tlu2nEYX_n8uCeSxOvqQvChGGzFc1U_6W6yfbztQOp-ymIyOFBbC1jw&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72w4Br9aiMsuwmRRMWDKVA4o8DEAYCDAeOXszrtfhKVAy401Ond0sn5A11-vZn0tahdsmECYgNRMsfsyU9CM05Cbnfre6CnFGhhNSPzH1X8Jj6YolKlA6lpfgYEreym_UryiCvE&source=gbs_api",
          small:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73QGdCssHVSG3qOTOC4YlELQk3oYJ5zuzaMuFnUVYO7tJ08E2j0KWaw851EUyMKdTKfzkh_kWGUFYpC2hfL-5dEeXXv6Gk0NMVVgIeeqhr1tUuO5iYcyB8HjR-gSYg2sffOh9Wo&source=gbs_api",
          medium:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71Zve1zqIgClyQrBW4fJUU4UDljfqEROCrvJ0913scit1fg4PGoclDNbP6JfrBHmAqPIrzeAj2MLXdNR5UPFhjv1KqmwOpYfUfUS5A1iiuUNkJ8o57LNIObcAgsUjWnIOpdtYUW&source=gbs_api",
          large:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71TrgIJV4-eIvQ18Znn6iu7x2dLXBGXjw-Q3GlGLxx8r8DVmjAdbzVpfkB8I9U93051yLx5m5Hj56l12n1A4g4LW5Wxkb2kLIGvQHPEA1JZhEwsi2LT9RWaUJbqcPh8vR4rPLoA&source=gbs_api",
          extraLarge:
            "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72M_RTRlnAb8r1xTaBV2BQ7ddSatTWJq4oKJ5vt68X1X-PYMajPmRIbp5uWid3cTwbdo1V6ZXls6m7iDiLFk3NkeE5KW5IrXv0tBpj2t4Kdg9wyc-QEyoIXg2e1AiNmPnnKzpFN&source=gbs_api"
        }
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
