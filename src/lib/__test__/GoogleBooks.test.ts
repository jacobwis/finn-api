import * as gb from "../GoogleBooks";

describe(".search()", () => {
  it("dmakl", async () => {
    const res = await gb.search("the hunger games");
  });
});

describe(".findById()", () => {
  it("should return the correct result", async () => {
    const res = await gb.findByID("RJxWIQOvoZUC");

    expect(res).toEqual({
      kind: "books#volume",
      id: "RJxWIQOvoZUC",
      etag: "jyrwUOLpKy8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Gail Saunders-Smith"],
        publisher: "Capstone",
        publishedDate: "1998",
        description:
          "Simple text and photographs depict the parts of flowers and their pollination.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1560657693"
          },
          {
            type: "ISBN_13",
            identifier: "9781560657699"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 24,
        printedPageCount: 28,
        dimensions: {
          height: "19.00 cm",
          width: "15.20 cm",
          thickness: "0.60 cm"
        },
        printType: "BOOK",
        categories: [
          "Juvenile Nonfiction / Science & Nature / Flowers & Plants"
        ],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.0.0.preview.1",
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
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=RJxWIQOvoZUC&hl=&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=RJxWIQOvoZUC&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-RJxWIQOvoZUC"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=RJxWIQOvoZUC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      }
    });
  });
});
