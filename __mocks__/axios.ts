

const get = (url: string, config: any) => {
  if (url === "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC") {
    return volumeResponse;
  }
};

export default { get };

const volumeResponse = {
  data: {
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
      categories: ["Juvenile Nonfiction / Science & Nature / Flowers & Plants"],
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
  }
};

const volumePage = {
  "kind": "books#volumes",
  "totalItems": 3616,
  "items": [
  {
  "kind": "books#volume",
  "id": "dD9_uTXl7roC",
  "etag": "306Zw1/ptc8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/dD9_uTXl7roC",
  "volumeInfo": {
  "title": "The Language of Flowers",
  "subtitle": "A Novel",
  "authors": [
  "Vanessa Diffenbaugh"
  ],
  "publisher": "Ballantine Books",
  "publishedDate": "2011-08-23",
  "description": "NEW YORK TIMES BESTSELLER The Victorian language of flowers was used to convey romantic expressions: honeysuckle for devotion, asters for patience, and red roses for love. But for Victoria Jones, it’s been more useful in communicating mistrust and solitude. After a childhood spent in the foster-care system, she is unable to get close to anybody, and her only connection to the world is through flowers and their meanings. Now eighteen and emancipated from the system with nowhere to go, Victoria realizes she has a gift for helping others through the flowers she chooses for them. But an unexpected encounter with a mysterious stranger has her questioning what’s been missing in her life. And when she’s forced to confront a painful secret from her past, she must decide whether it’s worth risking everything for a second chance at happiness. Look for special features inside. Join the Circle for author chats and more.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780345525567"
  },
  {
  "type": "ISBN_10",
  "identifier": "0345525566"
  }
  ],
  "readingModes": {
  "text": true,
  "image": false
  },
  "pageCount": 336,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 4,
  "ratingsCount": 242,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.11.4.0.preview.2",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=dD9_uTXl7roC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=dD9_uTXl7roC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=dD9_uTXl7roC&pg=PP1&dq=flowers&hl=&cd=1&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=dD9_uTXl7roC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-dD9_uTXl7roC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=dD9_uTXl7roC&rdid=book-dD9_uTXl7roC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Language_of_Flowers-sample-epub.acsm?id=dD9_uTXl7roC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=dD9_uTXl7roC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "NEW YORK TIMES BESTSELLER The Victorian language of flowers was used to convey romantic expressions: honeysuckle for devotion, asters for patience, and red roses for love."
  }
  },
  {
  "kind": "books#volume",
  "id": "1hfMDQAAQBAJ",
  "etag": "wof4Vy8wJQU",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/1hfMDQAAQBAJ",
  "volumeInfo": {
  "title": "The Flower Book",
  "authors": [
  "Rachel Siegfried"
  ],
  "publisher": "Penguin",
  "publishedDate": "2017-02-07",
  "description": "The Flower Book explores 60 flowers, bloom-by-bloom in stunning portraiture. Lush macrophotography allows readers to see the details of each featured flower up close, from the amaryllis in spring, snapdragon in summer, and dahlia in fall to tropical wonders such as orchids and more. Intimate portraits of each flower include quick-reference profiles with tips for choosing the best blooms, care for cut stems, arranging recommendations, colors, shapes, and even growing tips to transform the home, from yard to tabletop. Gorgeous photographs throughout spotlight 30 sample floral arrangements that show how to design and build custom floral arrangements using featured blooms. Plus, a step-by-step techniques section walks beginners through the basics of foliage and fillers, bouquets, and arrangements to make this book as practical as it is beautiful. The Flower Book celebrates all the wonderful qualities of flowers-their sheer beauty, infinite variety, and power to evoke admiration-bloom by exquisite bloom.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9781465464538"
  },
  {
  "type": "ISBN_10",
  "identifier": "1465464530"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 224,
  "printType": "BOOK",
  "categories": [
  "Crafts & Hobbies"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.1.1.0.preview.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=1hfMDQAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=2&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=1hfMDQAAQBAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-1hfMDQAAQBAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 25.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 25.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=1hfMDQAAQBAJ&rdid=book-1hfMDQAAQBAJ&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 25990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 25990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Flower_Book-sample-pdf.acsm?id=1hfMDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=1hfMDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "The Flower Book explores 60 flowers, bloom-by-bloom in stunning portraiture."
  }
  },
  {
  "kind": "books#volume",
  "id": "ogs_KDUQLSsC",
  "etag": "yhBKDSImHGg",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ogs_KDUQLSsC",
  "volumeInfo": {
  "title": "Flowers",
  "authors": [
  "Gail Saunders Smith"
  ],
  "publisher": "Capstone",
  "publishedDate": "2004-09-01",
  "description": "Simple text and photographs depict the parts of flowers and their pollination.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0736848649"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780736848640"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 24,
  "printType": "BOOK",
  "categories": [
  "Juvenile Nonfiction"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=ogs_KDUQLSsC&printsec=frontcover&dq=flowers&hl=&cd=3&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=ogs_KDUQLSsC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=ogs_KDUQLSsC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=ogs_KDUQLSsC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Simple text and photographs depict the parts of flowers and their pollination."
  }
  },
  {
  "kind": "books#volume",
  "id": "OUXkBgAAQBAJ",
  "etag": "6BDhQ3J6UY8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/OUXkBgAAQBAJ",
  "volumeInfo": {
  "title": "Sidewalk Flowers",
  "authors": [
  "JonArno Lawson"
  ],
  "publisher": "Groundwood Books Ltd",
  "publishedDate": "2015-02-22",
  "description": "Sidewalk Flowers has received four starred reviews! In this wordless picture book, a little girl collects wildflowers while her distracted father pays her little attention. Each flower becomes a gift, and whether the gift is noticed or ignored, both giver and recipient are transformed by their encounter. “Written” by award-winning poet JonArno Lawson and brought to life by illustrator Sydney Smith, Sidewalk Flowers is an ode to the importance of small things, small people and small gestures.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9781554984329"
  },
  {
  "type": "ISBN_10",
  "identifier": "1554984327"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 32,
  "printType": "BOOK",
  "categories": [
  "Juvenile Fiction"
  ],
  "averageRating": 4,
  "ratingsCount": 3,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "0.1.0.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=OUXkBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=OUXkBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=OUXkBgAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=4&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=OUXkBgAAQBAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-OUXkBgAAQBAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 14.95,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=OUXkBgAAQBAJ&rdid=book-OUXkBgAAQBAJ&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 14950000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Sidewalk_Flowers-sample-pdf.acsm?id=OUXkBgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=OUXkBgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Sidewalk Flowers has received four starred reviews! In this wordless picture book, a little girl collects wildflowers while her distracted father pays her little attention."
  }
  },
  {
  "kind": "books#volume",
  "id": "h-b8pBh_DhQC",
  "etag": "0lhNLom3SqQ",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/h-b8pBh_DhQC",
  "volumeInfo": {
  "title": "Flowers",
  "publisher": "Clarkson Potter",
  "publishedDate": "2012-11-06",
  "description": "The author and recognized fashion expert shows off pictures of the flowers she cultivated and the arrangements she created in and around her eighteenth-century Connecticut estate.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780770436766"
  },
  {
  "type": "ISBN_10",
  "identifier": "0770436765"
  }
  ],
  "readingModes": {
  "text": false,
  "image": false
  },
  "pageCount": 288,
  "printType": "BOOK",
  "categories": [
  "Gardening"
  ],
  "averageRating": 4.5,
  "ratingsCount": 2,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.0.0.preview.0",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=h-b8pBh_DhQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=h-b8pBh_DhQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=h-b8pBh_DhQC&printsec=frontcover&dq=flowers&hl=&cd=5&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=h-b8pBh_DhQC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=h-b8pBh_DhQC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=h-b8pBh_DhQC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "The author and recognized fashion expert shows off pictures of the flowers she cultivated and the arrangements she created in and around her eighteenth-century Connecticut estate."
  }
  },
  {
  "kind": "books#volume",
  "id": "3FaXG_JHaokC",
  "etag": "RhoRsROGilg",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/3FaXG_JHaokC",
  "volumeInfo": {
  "title": "The Flowers",
  "authors": [
  "Dagoberto Gilb"
  ],
  "publisher": "Grove/Atlantic, Inc.",
  "publishedDate": "2009-02-17",
  "description": "Sonny Bravo is a tender, unusually smart fifteen-year-old who is living with his vivacious mother in a large city where intense prejudice is not just white against black, but also brown. When Sonny’s mother, Silvia, suddenly marries an Okie building contractor named Cloyd Longpre, they are uprooted to a small apartment building, Los Flores. As Sonny sweeps its sidewalks, he meets his neighbors and becomes ensnared in their lives: Cindy, an eighteen-year-old druggie who is married and bored; Nica, a cloistered Mexican girl who cares for her infant brother but who is never allowed to leave their unit. The other tenants range from Pink, an albino black man who sells old cars in front of the building, to Bud, a muscled-up construction worker who hates blacks and Mexicans, even while he’s married to a Mexican-American woman. Dagoberto Gilb, in arguably his most powerful work yet, has written an inspiring novel about hate, pain, anger, and love that transcends age, race, and time. Gilb’s novel displays the fearlessness and wit that have helped make him one of this country’s most authentic and original voices.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "1555848222"
  },
  {
  "type": "ISBN_13",
  "identifier": "9781555848224"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 256,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 3,
  "ratingsCount": 3,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.3.2.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=3FaXG_JHaokC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=3FaXG_JHaokC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=3FaXG_JHaokC&printsec=frontcover&dq=flowers&hl=&cd=6&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=3FaXG_JHaokC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-3FaXG_JHaokC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 13.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=3FaXG_JHaokC&rdid=book-3FaXG_JHaokC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 13990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Flowers-sample-epub.acsm?id=3FaXG_JHaokC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Flowers-sample-pdf.acsm?id=3FaXG_JHaokC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=3FaXG_JHaokC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Dagoberto Gilb, in arguably his most powerful work yet, has written an inspiring novel about hate, pain, anger, and love that transcends age, race, and time."
  }
  },
  {
  "kind": "books#volume",
  "id": "6yEsDwAAQBAJ",
  "etag": "FamWuIt6J7I",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/6yEsDwAAQBAJ",
  "volumeInfo": {
  "title": "The Sun and Her Flowers",
  "authors": [
  "Rupi Kaur"
  ],
  "publisher": "Andrews McMeel Publishing",
  "publishedDate": "2017-10-03",
  "description": "Divided into five chapters and illustrated by Kaur, the sun and her flowers is a journey of wilting, falling, rooting, rising, and blooming. A celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root rise in order to bloom",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9781449488895"
  },
  {
  "type": "ISBN_10",
  "identifier": "1449488897"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 256,
  "printType": "BOOK",
  "categories": [
  "Poetry"
  ],
  "averageRating": 3.5,
  "ratingsCount": 8,
  "maturityRating": "MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.5.6.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=6yEsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=6yEsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=6yEsDwAAQBAJ&pg=PP1&dq=flowers&hl=&cd=7&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=6yEsDwAAQBAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-6yEsDwAAQBAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 7.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=6yEsDwAAQBAJ&rdid=book-6yEsDwAAQBAJ&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 7990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Sun_and_Her_Flowers-sample-epub.acsm?id=6yEsDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Sun_and_Her_Flowers-sample-pdf.acsm?id=6yEsDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=6yEsDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "A celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root rise in ..."
  }
  },
  {
  "kind": "books#volume",
  "id": "qXAsDwAAQBAJ",
  "etag": "LWu2XaKv7vo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/qXAsDwAAQBAJ",
  "volumeInfo": {
  "title": "Hope For the Flowers",
  "subtitle": "A parable about life, revolution, hope, caterpillars & butterflies",
  "authors": [
  "Trina Paulus"
  ],
  "publisher": "Hope For the Flowers LLC",
  "publishedDate": "2017-07-13",
  "description": "A perfect gift to anyone, any age, any religion or none at all. Hope's theme of life, moving through seeming death to a new and more beautiful life, has touched the hearts of millions of people. Hope for the Flowers is for young and old, lovers, husbands and wives. It's a book to learn to read with, or to comfort those who are dying or grieving. In the tale, the caterpillar heroes, Stripe and Yellow, want something more from life than eating and growing bigger. They get caught up in a \"caterpillar pillar,\" a squirming mass of bodies, each determined to reach a top so far away it can't be seen. Finally disillusioned, they discover that the way for the caterpillars to find their particular \"more,\" who they really are, is to enter the cocoon and \"...risk for the butterfly.\" Hope for the Flowers has helped people gain the courage to leave jobs, change their lives and explore their love for another human being. A modern classic. Three million copies sold in English and beloved around the world in other languages.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780988940505"
  },
  {
  "type": "ISBN_10",
  "identifier": "0988940507"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 160,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 4,
  "ratingsCount": 17,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.1.1.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=qXAsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=qXAsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=qXAsDwAAQBAJ&pg=PP1&dq=flowers&hl=&cd=8&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=qXAsDwAAQBAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-qXAsDwAAQBAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 7.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 7.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=qXAsDwAAQBAJ&rdid=book-qXAsDwAAQBAJ&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 7990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 7990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Hope_For_the_Flowers-sample-epub.acsm?id=qXAsDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Hope_For_the_Flowers-sample-pdf.acsm?id=qXAsDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=qXAsDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "It&#39;s a book to learn to read with, or to comfort those who are dying or grieving. In the tale, the caterpillar heroes, Stripe and Yellow, want something more from life than eating and growing bigger."
  }
  },
  {
  "kind": "books#volume",
  "id": "8_DfMSS9r9cC",
  "etag": "v+AlGCB/sr8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/8_DfMSS9r9cC",
  "volumeInfo": {
  "title": "Diversity and Evolutionary Biology of Tropical Flowers",
  "authors": [
  "Peter K. Endress"
  ],
  "publisher": "Cambridge University Press",
  "publishedDate": "1996-07-25",
  "description": "A unique account of the structure, biology and evolution of tropical flowering plants.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0521565103"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780521565103"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 511,
  "printType": "BOOK",
  "categories": [
  "Nature"
  ],
  "averageRating": 5,
  "ratingsCount": 1,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.0.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=8_DfMSS9r9cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=8_DfMSS9r9cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=8_DfMSS9r9cC&printsec=frontcover&dq=flowers&hl=&cd=9&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=8_DfMSS9r9cC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Diversity_and_Evolutionary_Biology_of_Tr.html?hl=&id=8_DfMSS9r9cC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=8_DfMSS9r9cC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "This volume concentrates on tropical flowers in which, whilst sharing many of the features seen in temperate flowers, exhibit phenomena which are purely tropical."
  }
  },
  {
  "kind": "books#volume",
  "id": "CElIqGBvyusC",
  "etag": "G1JO13+E0VI",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/CElIqGBvyusC",
  "volumeInfo": {
  "title": "Flowers In The Attic",
  "authors": [
  "V.C. Andrews"
  ],
  "publisher": "Simon and Schuster",
  "publishedDate": "2011-02-08",
  "description": "Now a major Lifetime movie event—the classic story of forbidden love that captured the world’s imagination and earned V.C. Andrews a fiercely devoted fanbase. Book One of the Dollanganger family saga. At the top of the stairs there are four secrets hidden. Blond, beautiful, innocent, and struggling to stay alive . . . They were a perfect family, golden and carefree—until a heartbreaking tragedy shattered their happiness. Now, for the sake of an inheritance that will ensure their future, the children must be hidden away out of sight, as if they never existed. Kept on the top floor of their grandmother’s vast mansion, their loving mother assures them it will be just for a little while. But as brutal days swell into agonizing months and years, Cathy, Chris, and twins Cory and Carrie, realize their survival is at the mercy of their cruel and superstitious grandmother . . . and this cramped and helpless world may be the only one they ever know. Book One of the Dollanganger series, the sequels include Petals in the Wind, If There Be Thorns, Seeds of Yesterday, and Garden of Shadows. Then experience the attic from Christopher’s point of view in Christopher’s Diary: Secrets of Foxworth and Christopher’s Diary: Echoes of Dollanganger.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9781451636949"
  },
  {
  "type": "ISBN_10",
  "identifier": "1451636946"
  }
  ],
  "readingModes": {
  "text": true,
  "image": false
  },
  "pageCount": 416,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 3.5,
  "ratingsCount": 78,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.28.30.0.preview.2",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=CElIqGBvyusC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=CElIqGBvyusC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=CElIqGBvyusC&printsec=frontcover&dq=flowers&hl=&cd=10&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=CElIqGBvyusC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-CElIqGBvyusC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 7.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 6.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=CElIqGBvyusC&rdid=book-CElIqGBvyusC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 7990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 6990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Flowers_In_The_Attic-sample-epub.acsm?id=CElIqGBvyusC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=CElIqGBvyusC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Book One of the Dollanganger series, the sequels include Petals in the Wind, If There Be Thorns, Seeds of Yesterday, and Garden of Shadows."
  }
  },
  {
  "kind": "books#volume",
  "id": "2bCdaZ7KvDsC",
  "etag": "qo01dcZgzcw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/2bCdaZ7KvDsC",
  "volumeInfo": {
  "title": "The Language of Flowers",
  "subtitle": "The Floral Offering: a Token of Affection and Esteem; Comprising the Language and Poetry of Flowers ...",
  "authors": [
  "Henrietta Dumont"
  ],
  "publishedDate": "1852",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "HARVARD:32044013658547"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 300,
  "printType": "BOOK",
  "categories": [
  "Flower language"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.full.3",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=2bCdaZ7KvDsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=2bCdaZ7KvDsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=2bCdaZ7KvDsC&printsec=frontcover&dq=flowers&hl=&cd=11&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=2bCdaZ7KvDsC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-2bCdaZ7KvDsC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=2bCdaZ7KvDsC&rdid=book-2bCdaZ7KvDsC&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.epub?id=2bCdaZ7KvDsC&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.pdf?id=2bCdaZ7KvDsC&hl=&output=pdf&sig=ACfU3U1n9agbciLzFXS4cd_vmKAJsTiEZA&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=2bCdaZ7KvDsC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "ru5-f3YRyNIC",
  "etag": "6004TAeNqu8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ru5-f3YRyNIC",
  "volumeInfo": {
  "title": "Flowers of a Moment",
  "subtitle": "Poems",
  "authors": [
  "Ŭn Ko"
  ],
  "publisher": "BOA Editions, Ltd.",
  "publishedDate": "2006",
  "description": "180 brief zen poems from Korea's most beloved poet and four-time Nobel Prize nominee.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "1929918887"
  },
  {
  "type": "ISBN_13",
  "identifier": "9781929918881"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 103,
  "printType": "BOOK",
  "categories": [
  "History"
  ],
  "averageRating": 4.5,
  "ratingsCount": 2,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=ru5-f3YRyNIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=ru5-f3YRyNIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=ru5-f3YRyNIC&printsec=frontcover&dq=flowers&hl=&cd=12&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=ru5-f3YRyNIC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_of_a_Moment.html?hl=&id=ru5-f3YRyNIC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=ru5-f3YRyNIC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "180 brief zen poems from Korea&#39;s most beloved poet and four-time Nobel Prize nominee."
  }
  },
  {
  "kind": "books#volume",
  "id": "8GZRAAAAMAAJ",
  "etag": "m7Psvt883G0",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/8GZRAAAAMAAJ",
  "volumeInfo": {
  "title": "Flowers",
  "subtitle": "abstract form II",
  "authors": [
  "Morris Benz"
  ],
  "publisher": "San Jacinto Pub Co",
  "publishedDate": "1979-06",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "UOM:39015057639935"
  }
  ],
  "readingModes": {
  "text": false,
  "image": false
  },
  "pageCount": 225,
  "printType": "BOOK",
  "categories": [
  "Crafts & Hobbies"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "preview-1.0.0",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=8GZRAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=8GZRAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=8GZRAAAAMAAJ&q=flowers&dq=flowers&hl=&cd=13&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=8GZRAAAAMAAJ&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=8GZRAAAAMAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "NO_PAGES",
  "embeddable": false,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=8GZRAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "NONE",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "YlW7mgEACAAJ",
  "etag": "Ddzd2NA8qPU",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/YlW7mgEACAAJ",
  "volumeInfo": {
  "title": "Flowers Coloring Book",
  "subtitle": "Beautiful Pictures from the Garden of Nature",
  "publisher": "Chartwell Books",
  "publishedDate": "2013-07-31",
  "description": "Calling kids and art lovers of all ages: get creative and make the flowers in this beautiful coloring book spring to life by adding your own color and detail. Use the imaginative outlines in this book to produce your own beautiful works of art featuring natural flowers with colored pencils. Each delightful scenario is guaranteed to bring out your creative instincts, enabling you to complete it with colors of your choosing. Also check out the other volumes in this gorgeous coloring book series, featuring fairies, victoriana patterns, tattoos, and impressionist artwork. By the end you will have a gallery of personalized pictures that you will be proud to call your own.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0785830413"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780785830412"
  }
  ],
  "readingModes": {
  "text": false,
  "image": false
  },
  "pageCount": 128,
  "printType": "BOOK",
  "categories": [
  "Games"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "preview-1.0.0",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=YlW7mgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=YlW7mgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=YlW7mgEACAAJ&dq=flowers&hl=&cd=14&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=YlW7mgEACAAJ&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_Coloring_Book.html?hl=&id=YlW7mgEACAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "NO_PAGES",
  "embeddable": false,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=YlW7mgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "NONE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Calling kids and art lovers of all ages: get creative and make the flowers in this beautiful coloring book spring to life by adding your own color and detail."
  }
  },
  {
  "kind": "books#volume",
  "id": "6roh_cQf1N0C",
  "etag": "3U8lEWPfgEw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/6roh_cQf1N0C",
  "volumeInfo": {
  "title": "Plants and Flowers of Hawai_i",
  "authors": [
  "S. H. Sohmer",
  "R. Gustafson"
  ],
  "publisher": "University of Hawaii Press",
  "publishedDate": "1987-01",
  "description": "The Hawaiian islands, isolated by thousands of miles of ocean for millions of years, posses a unique assemblage of native flowers and plants. This text describes more than 130 indigenous and endemic species of Hawaiian plants, their characteristics and habitats, and how they came to be. The photographs aim to provide an easy and accurate means of recognizing a given plant and serve as a permanent record of the Hawaiian islands' fast-disappearing native flora.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0824810961"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780824810962"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 160,
  "printType": "BOOK",
  "categories": [
  "Gardening"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "2.0.0.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=6roh_cQf1N0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=6roh_cQf1N0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=6roh_cQf1N0C&printsec=frontcover&dq=flowers&hl=&cd=15&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=6roh_cQf1N0C&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Plants_and_Flowers_of_Hawai_i.html?hl=&id=6roh_cQf1N0C"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Plants_and_Flowers_of_Hawai_i-sample-pdf.acsm?id=6roh_cQf1N0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=6roh_cQf1N0C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "This text describes more than 130 indigenous and endemic species of Hawaiian plants, their characteristics and habitats, and how they came to be."
  }
  },
  {
  "kind": "books#volume",
  "id": "WZ2Dqb42exQC",
  "etag": "v+yRQNYgPlE",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/WZ2Dqb42exQC",
  "volumeInfo": {
  "title": "Interpretative Phenomenological Analysis",
  "subtitle": "Theory, Method and Research",
  "authors": [
  "Jonathan A Smith",
  "Paul Flowers",
  "Michael Larkin"
  ],
  "publisher": "SAGE",
  "publishedDate": "2009-05-21",
  "description": "'It is not often I can use \"accessible\" and \"phenomenology\" in the same sentence, but reading the new book, Interpretative Phenomenological Analysis...certainly provides me the occasion to do so. I can say this because these authors provide an engaging and clear introduction to a relatively new analytical approach' - The Weekly Qualitative Report Interpretative phenomenological analysis (IPA) is an increasingly popular approach to qualitative inquiry. This handy text covers its theoretical foundations and provides a detailed guide to conducting IPA research. Extended worked examples from the authors' own studies in health, sexuality, psychological distress and identity illustrate the breadth and depth of IPA research. Each of the chapters also offers a guide to other good exemplars of IPA research in the designated area. The final section of the book considers how IPA connects with other contemporary qualitative approaches like discourse and narrative analysis and how it addresses issues to do with validity. The book is written in an accessible style and will be extremely useful to students and researchers in psychology and related disciplines in the health and social sciences.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "1446243257"
  },
  {
  "type": "ISBN_13",
  "identifier": "9781446243251"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 232,
  "printType": "BOOK",
  "categories": [
  "Social Science"
  ],
  "maturityRating": "MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.11.11.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=WZ2Dqb42exQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=WZ2Dqb42exQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=WZ2Dqb42exQC&printsec=frontcover&dq=flowers&hl=&cd=16&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=WZ2Dqb42exQC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-WZ2Dqb42exQC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE_AND_RENTAL",
  "isEbook": true,
  "listPrice": {
  "amount": 50,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 33.94,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=WZ2Dqb42exQC&rdid=book-WZ2Dqb42exQC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 50000000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 33940000,
  "currencyCode": "USD"
  },
  "giftable": true
  },
  {
  "finskyOfferType": 3,
  "listPrice": {
  "amountInMicros": 22500000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 21600000,
  "currencyCode": "USD"
  },
  "rentalDuration": {
  "unit": "DAY",
  "count": 90
  }
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Interpretative_Phenomenological_Analysis-sample-epub.acsm?id=WZ2Dqb42exQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Interpretative_Phenomenological_Analysis-sample-pdf.acsm?id=WZ2Dqb42exQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=WZ2Dqb42exQC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "This handy text covers its theoretical foundations and provides a detailed guide to conducting IPA research."
  }
  },
  {
  "kind": "books#volume",
  "id": "fiBbdJ1sdA8C",
  "etag": "LI7d/e6IP2o",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/fiBbdJ1sdA8C",
  "volumeInfo": {
  "title": "The Language of Flowers",
  "subtitle": "A History",
  "authors": [
  "Beverly Seaton"
  ],
  "publisher": "University of Virginia Press",
  "publishedDate": "2012-10-10",
  "description": "The author traces the phenomenon of ascribing sentimental meaning to floral imagery from its beginnings in Napoleonic France through its later transformations in England and America. At the heart of the book is a depiction of what the three most important flower books from each of the countries divulge about the period and the respective cultures. Seaton shows that the language of flowers was not a single and universally understood correlation of flowers to meanings that men and women used to communicate in matters of love and romance. The language differs from book to book, country to country. To place the language of flowers in social and literary perspective, the author examines the nineteenth-century uses of flowers in everyday life and in ceremonies and rituals and provides a brief history of floral symbolism. She also discusses the sentimental flower book, a genre especially intended for female readers. Two especially valuable features of the book are its table of correlations of flowers and their meanings from different sourcebooks and its complete bibliography of language of flower titles. This book will appeal not only to scholars in Victorian studies and women's studies but also to art historians, book collectors, museum curators, historians of horticulture, and anyone interested in nineteenth-century popular culture.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0813934532"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780813934532"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 234,
  "printType": "BOOK",
  "categories": [
  "Literary Criticism"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.0.0.0.preview.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=fiBbdJ1sdA8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=fiBbdJ1sdA8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=fiBbdJ1sdA8C&pg=PP1&dq=flowers&hl=&cd=17&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-fiBbdJ1sdA8C"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE_AND_RENTAL",
  "isEbook": true,
  "listPrice": {
  "amount": 27.5,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 15.12,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C&rdid=book-fiBbdJ1sdA8C&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 27500000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 15120000,
  "currencyCode": "USD"
  },
  "giftable": true
  },
  {
  "finskyOfferType": 3,
  "listPrice": {
  "amountInMicros": 24750000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 13610000,
  "currencyCode": "USD"
  },
  "rentalDuration": {
  "unit": "DAY",
  "count": 180
  }
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Language_of_Flowers-sample-pdf.acsm?id=fiBbdJ1sdA8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=fiBbdJ1sdA8C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "This book will appeal not only to scholars in Victorian studies and women&#39;s studies but also to art historians, book collectors, museum curators, historians of horticulture, and anyone interested in nineteenth-century popular culture."
  }
  },
  {
  "kind": "books#volume",
  "id": "ktkDAAAAQAAJ",
  "etag": "/Jt+BMH+5pE",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ktkDAAAAQAAJ",
  "volumeInfo": {
  "title": "Flowers and their associations",
  "authors": [
  "Anne Pratt"
  ],
  "publishedDate": "1840",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "OXFORD:590805315"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "full-1.0.0",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=ktkDAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=ktkDAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=ktkDAAAAQAAJ&printsec=frontcover&dq=flowers&hl=&cd=18&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=ktkDAAAAQAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-ktkDAAAAQAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=ktkDAAAAQAAJ&rdid=book-ktkDAAAAQAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/Flowers_and_their_associations.epub?id=ktkDAAAAQAAJ&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/Flowers_and_their_associations.pdf?id=ktkDAAAAQAAJ&hl=&output=pdf&sig=ACfU3U3t31n5hoTWLkxSLsAOK6I3ZhgdHw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=ktkDAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "XHhR-6OGubIC",
  "etag": "YaixmEcKjzc",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/XHhR-6OGubIC",
  "volumeInfo": {
  "title": "Flowers in the Mirror",
  "authors": [
  "Ruzhen Li"
  ],
  "publisher": "Univ of California Press",
  "publishedDate": "1965",
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 310,
  "printType": "BOOK",
  "categories": [
  "China"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=XHhR-6OGubIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=XHhR-6OGubIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=XHhR-6OGubIC&printsec=frontcover&dq=flowers&hl=&cd=19&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=XHhR-6OGubIC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_in_the_Mirror.html?hl=&id=XHhR-6OGubIC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=XHhR-6OGubIC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "gK98gXR8onwC",
  "etag": "tWVXg18UIwc",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
  "volumeInfo": {
  "title": "Flowers for Algernon",
  "subtitle": "One Act",
  "authors": [
  "David Rogers",
  "Daniel Keyes"
  ],
  "publisher": "Dramatic Publishing",
  "publishedDate": "1969",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0871293870"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780871293879"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=gK98gXR8onwC&printsec=frontcover&dq=flowers&hl=&cd=20&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=gK98gXR8onwC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "caeJpIj9SdkC",
  "etag": "TBc2BGCTNIo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/caeJpIj9SdkC",
  "volumeInfo": {
  "title": "Offering Flowers, Feeding Skulls",
  "subtitle": "Popular Goddess Worship in West Bengal",
  "authors": [
  "June McDaniel"
  ],
  "publisher": "Oxford University Press",
  "publishedDate": "2004-08-05",
  "description": "The Indian state of West Bengal is home to one of the world's most vibrant traditions of goddess worship. The year's biggest holidays are devoted to the goddesses Durga and Kali, with lavish rituals, decorated statues, fireworks, and parades. In Offering Flowers, Feeding Skulls, June McDaniel provides a broad, accessibly written overview of Bengali goddess worship. McDaniel identifies three major forms of goddess worship, and examines each through its myths, folklore, songs, rituals, sacred texts, and practitioners. In the folk/tribal strand, which is found in rural areas, local tribal goddesses are worshipped alongside Hindu goddesses, with an emphasis on possession, healing, and animism. The tantric/yogic strand focuses on ritual, meditation, and visualization as ways of experiencing the power of the goddess directly. The devotional or bhakti strand, which is the most popular form, involves the intense love and worship of a particular form of the goddess. McDaniel traces these strands through Bengali culture and explores how they are interwoven with each other as well as with other forms of Hinduism. She also discusses how these practices have been reinterpreted in the West, where goddess worship has gained the values of sexual freedom and psychological healing, but lost its emphases on devotion and asceticism. Offering Flowers, Feeding Skulls takes the reader inside the lives of practicing Shaktas, including holy women, hymn singers, philosophers, visionaries, gurus, ascetics, healers, musicians, and businessmen, and offers vivid descriptions of their rituals, practices, and daily lives. Drawing on years of fieldwork and extensive research, McDaniel paints a rich, expansive portrait of this fascinating religious tradition.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0195347137"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780195347135"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 368,
  "printType": "BOOK",
  "categories": [
  "Religion"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "0.5.4.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=caeJpIj9SdkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=caeJpIj9SdkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=caeJpIj9SdkC&printsec=frontcover&dq=flowers&hl=&cd=21&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=caeJpIj9SdkC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-caeJpIj9SdkC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 46.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 37.12,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=caeJpIj9SdkC&rdid=book-caeJpIj9SdkC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 46990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 37120000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Offering_Flowers_Feeding_Skulls-sample-epub.acsm?id=caeJpIj9SdkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Offering_Flowers_Feeding_Skulls-sample-pdf.acsm?id=caeJpIj9SdkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=caeJpIj9SdkC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "In Offering Flowers, Feeding Skulls, June McDaniel provides a broad, accessibly written overview of Bengali goddess worship."
  }
  },
  {
  "kind": "books#volume",
  "id": "dGEEAAAAQAAJ",
  "etag": "P/fCBsIyNU4",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/dGEEAAAAQAAJ",
  "volumeInfo": {
  "title": "A wreath of wild flowers from New England",
  "authors": [
  "Frances Sargent Osgood"
  ],
  "publishedDate": "1838",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "OXFORD:590738772"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "full-1.0.0",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=dGEEAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=dGEEAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=dGEEAAAAQAAJ&printsec=frontcover&dq=flowers&hl=&cd=22&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=dGEEAAAAQAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-dGEEAAAAQAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=dGEEAAAAQAAJ&rdid=book-dGEEAAAAQAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/A_wreath_of_wild_flowers_from_New_Englan.epub?id=dGEEAAAAQAAJ&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/A_wreath_of_wild_flowers_from_New_Englan.pdf?id=dGEEAAAAQAAJ&hl=&output=pdf&sig=ACfU3U0vW4YcA2-faT0ZwcPAD-jN-MLpJw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=dGEEAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "TEQTAAAAYAAJ",
  "etag": "0x5WQwx6Dsw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/TEQTAAAAYAAJ",
  "volumeInfo": {
  "title": "The Flowers of Persian Literature",
  "subtitle": "Containing Extracts from the Most Celebrated Authors, in Prose and Verse, with a Translation Into English : Being Intended as a Companion to Sir William Jones's Persian Grammar : to which is Prefixed an Essay on the Language and Literature of Persia",
  "authors": [
  "Samuel Rousseau"
  ],
  "publishedDate": "1805",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "HARVARD:HXJ9J1"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 222,
  "printType": "BOOK",
  "categories": [
  "Persian language"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.2.1.0.full.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=TEQTAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=TEQTAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=TEQTAAAAYAAJ&printsec=frontcover&dq=flowers&hl=&cd=23&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=TEQTAAAAYAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-TEQTAAAAYAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=TEQTAAAAYAAJ&rdid=book-TEQTAAAAYAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/The_Flowers_of_Persian_Literature.pdf?id=TEQTAAAAYAAJ&hl=&output=pdf&sig=ACfU3U13hGGgqxa6hs250ya27y3PTtDneg&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=TEQTAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "dvQVAAAAYAAJ",
  "etag": "1SnlheNCW/s",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/dvQVAAAAYAAJ",
  "volumeInfo": {
  "title": "The Voice of Flowers",
  "authors": [
  "Lydia Howard Sigourney"
  ],
  "publishedDate": "1849",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "HARVARD:HN6KYN"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 123,
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.1.0.full.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=dvQVAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=dvQVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=dvQVAAAAYAAJ&pg=PP1&dq=flowers&hl=&cd=24&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=dvQVAAAAYAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-dvQVAAAAYAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=dvQVAAAAYAAJ&rdid=book-dvQVAAAAYAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/The_Voice_of_Flowers.pdf?id=dvQVAAAAYAAJ&hl=&output=pdf&sig=ACfU3U3SsGiwEbSyR16d12OUjSxx4PLjzw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=dvQVAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "k-BG_t55AHUC",
  "etag": "wTZcLONYeTg",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/k-BG_t55AHUC",
  "volumeInfo": {
  "title": "Roger of Wendover's Flowers of History",
  "subtitle": "Comprising the History of England from the Descent of the Saxons to A.D. 1235; Formerly Ascribed to Matthew Paris",
  "authors": [
  "Roger (of Wendover)",
  "Matthew Paris"
  ],
  "publishedDate": "1849",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "HARVARD:32044019191956"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 614,
  "printType": "BOOK",
  "categories": [
  "Great Britain"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.2.3.0.full.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=k-BG_t55AHUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=k-BG_t55AHUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=k-BG_t55AHUC&pg=PP1&dq=flowers&hl=&cd=25&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=k-BG_t55AHUC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-k-BG_t55AHUC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=k-BG_t55AHUC&rdid=book-k-BG_t55AHUC&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/Roger_of_Wendover_s_Flowers_of_History.epub?id=k-BG_t55AHUC&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/Roger_of_Wendover_s_Flowers_of_History.pdf?id=k-BG_t55AHUC&hl=&output=pdf&sig=ACfU3U2H1FvqE2UK82-NCrtYQWjC0py_Fw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=k-BG_t55AHUC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "_oG_iTxP1pIC",
  "etag": "bwfD5bSkx4E",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/_oG_iTxP1pIC",
  "volumeInfo": {
  "title": "Flowers for Algernon",
  "authors": [
  "Daniel Keyes"
  ],
  "publisher": "Houghton Mifflin Harcourt",
  "publishedDate": "2007-12-01",
  "description": "The beloved, classic story of a mentally disabled man whose experimental quest for intelligence mirrors that of Algernon, an extraordinary lab mouse.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0547539630"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780547539638"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 304,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 4,
  "ratingsCount": 159,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.11.9.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=_oG_iTxP1pIC&printsec=frontcover&dq=flowers&hl=&cd=26&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=_oG_iTxP1pIC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-_oG_iTxP1pIC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 8.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 8.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=_oG_iTxP1pIC&rdid=book-_oG_iTxP1pIC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 8990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 8990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Flowers_for_Algernon-sample-epub.acsm?id=_oG_iTxP1pIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Flowers_for_Algernon-sample-pdf.acsm?id=_oG_iTxP1pIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=_oG_iTxP1pIC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache."
  }
  },
  {
  "kind": "books#volume",
  "id": "2ILPYtPB4x0C",
  "etag": "O9jM42hCNs0",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/2ILPYtPB4x0C",
  "volumeInfo": {
  "title": "Flowers Underfoot",
  "subtitle": "Indian Carpets of the Mughal Era",
  "authors": [
  "Daniel S. Walker"
  ],
  "publisher": "Metropolitan Museum of Art",
  "publishedDate": "1997",
  "description": "For this landmark exhibition, forty-two carpets, several previously unpublished, have been gathered worldwide from museums and private collections. With the exhibition and publication of Flowers Underfoot the Metropolitan Museum is proud to honor India's Golden Jubilee, a celebration of fifty years of independence.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780870997884"
  },
  {
  "type": "ISBN_10",
  "identifier": "0870997882"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 199,
  "printType": "BOOK",
  "categories": [
  "Art"
  ],
  "averageRating": 5,
  "ratingsCount": 1,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.0.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=2ILPYtPB4x0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=2ILPYtPB4x0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=2ILPYtPB4x0C&printsec=frontcover&dq=flowers&hl=&cd=27&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=2ILPYtPB4x0C&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_Underfoot.html?hl=&id=2ILPYtPB4x0C"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=2ILPYtPB4x0C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Though exquisite, Indian carpets are little known even to carpet experts. This volume (and the exhibition) focus on the 16th to the 18th century, a peak period for stunning works."
  }
  },
  {
  "kind": "books#volume",
  "id": "HEB3-GIiI98C",
  "etag": "U/Ov8ByHC6E",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/HEB3-GIiI98C",
  "volumeInfo": {
  "title": "The Flowers of Evil",
  "authors": [
  "Charles Baudelaire",
  "James N McGowan"
  ],
  "publisher": "Oxford Paperbacks",
  "publishedDate": "2008-04-17",
  "description": "This bold new translation with facing French text restores once banned poems to their original places and reveals the full richness and variety of the collection.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780199535583"
  },
  {
  "type": "ISBN_10",
  "identifier": "0199535582"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 399,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.6.0.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=HEB3-GIiI98C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=HEB3-GIiI98C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=HEB3-GIiI98C&printsec=frontcover&dq=flowers&hl=&cd=28&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=HEB3-GIiI98C&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/The_Flowers_of_Evil.html?hl=&id=HEB3-GIiI98C"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=HEB3-GIiI98C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "This bold new translation with facing French text restores once banned poems to their original places and reveals the full richness and variety of the collection."
  }
  },
  {
  "kind": "books#volume",
  "id": "-ZlOAAAAIAAJ",
  "etag": "K+n9BWR7KJU",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/-ZlOAAAAIAAJ",
  "volumeInfo": {
  "title": "Morphology of Flowers and Inflorescences",
  "authors": [
  "Focko Weberling"
  ],
  "publisher": "CUP Archive",
  "publishedDate": "1992-09-03",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0521438322"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780521438322"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 423,
  "printType": "BOOK",
  "categories": [
  "Science"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=-ZlOAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=-ZlOAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=-ZlOAAAAIAAJ&printsec=frontcover&dq=flowers&hl=&cd=29&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=-ZlOAAAAIAAJ&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Morphology_of_Flowers_and_Inflorescences.html?hl=&id=-ZlOAAAAIAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=-ZlOAAAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "AmE1AAAAMAAJ",
  "etag": "z5dkxfJF9hw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/AmE1AAAAMAAJ",
  "volumeInfo": {
  "title": "Wayside Flowers",
  "authors": [
  "Harriet Annie Wilkins"
  ],
  "publishedDate": "1876",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "UOM:39015063964384"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 255,
  "printType": "BOOK",
  "categories": [
  "World War, 1914-1918"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.2.1.0.full.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=AmE1AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=AmE1AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=AmE1AAAAMAAJ&pg=PP1&dq=flowers&hl=&cd=30&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=AmE1AAAAMAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-AmE1AAAAMAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=AmE1AAAAMAAJ&rdid=book-AmE1AAAAMAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/Wayside_Flowers.epub?id=AmE1AAAAMAAJ&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/Wayside_Flowers.pdf?id=AmE1AAAAMAAJ&hl=&output=pdf&sig=ACfU3U20_5jEZzLHUqb-bWstO73iA164AA&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=AmE1AAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "ZRIQ-7bktboC",
  "etag": "0b9jwlUMj9I",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ZRIQ-7bktboC",
  "volumeInfo": {
  "title": "A Victorian Flower Dictionary",
  "subtitle": "The Language of Flowers Companion",
  "authors": [
  "Mandy Kirkby"
  ],
  "publisher": "Ballantine Books",
  "publishedDate": "2011-09-20",
  "description": "“A flower is not a flower alone; a thousand thoughts invest it.” Daffodils signal new beginnings, daisies innocence. Lilacs mean the first emotions of love, periwinkles tender recollection. Early Victorians used flowers as a way to express their feelings—love or grief, jealousy or devotion. Now, modern-day romantics are enjoying a resurgence of this bygone custom, and this book will share the historical, literary, and cultural significance of flowers with a whole new generation. With lavish illustrations, a dual dictionary of flora and meanings, and suggestions for creating expressive arrangements, this keepsake is the perfect compendium for everyone who has ever given or received a bouquet. From the Hardcover edition.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780345532879"
  },
  {
  "type": "ISBN_10",
  "identifier": "0345532872"
  }
  ],
  "readingModes": {
  "text": true,
  "image": false
  },
  "pageCount": 192,
  "printType": "BOOK",
  "categories": [
  "Nature"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "4.9.4.0.preview.2",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=ZRIQ-7bktboC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=ZRIQ-7bktboC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=ZRIQ-7bktboC&pg=PP1&dq=flowers&hl=&cd=31&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=ZRIQ-7bktboC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-ZRIQ-7bktboC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 13.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 13.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=ZRIQ-7bktboC&rdid=book-ZRIQ-7bktboC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 13990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 13990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/A_Victorian_Flower_Dictionary-sample-epub.acsm?id=ZRIQ-7bktboC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=ZRIQ-7bktboC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Now, modern-day romantics are enjoying a resurgence of this bygone custom, and this book will share the historical, literary, and cultural significance of flowers with a whole new generation."
  }
  },
  {
  "kind": "books#volume",
  "id": "SK5BAAAAYAAJ",
  "etag": "dJRmZt3F9Ac",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/SK5BAAAAYAAJ",
  "volumeInfo": {
  "title": "Life and Flowers",
  "authors": [
  "Maurice Maeterlinck"
  ],
  "publishedDate": "1907",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "PRNC:32101068573821"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 312,
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.1.0.full.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=SK5BAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=SK5BAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=SK5BAAAAYAAJ&printsec=frontcover&dq=flowers&hl=&cd=32&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=SK5BAAAAYAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-SK5BAAAAYAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=SK5BAAAAYAAJ&rdid=book-SK5BAAAAYAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/Life_and_Flowers.epub?id=SK5BAAAAYAAJ&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/Life_and_Flowers.pdf?id=SK5BAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0HOQsLLCZJcE3epP126wumltho8Q&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=SK5BAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "EicYUOA8OBQC",
  "etag": "rmuL2Ay9VLU",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/EicYUOA8OBQC",
  "volumeInfo": {
  "title": "Swampland Flowers",
  "subtitle": "The Letters and Lectures of Zen Master Ta Hui",
  "authors": [
  "Zonggao",
  "J. C. Cleary"
  ],
  "publisher": "Shambhala Publications",
  "publishedDate": "2006",
  "description": "The writings of the twelfth-century Chinese Zen master Ta Hui are as immediately accessible as those of any contemporary teacher, and this book, which introduced them to the English-speaking world in the 1970s, has become a modern classic—a regular feature of recommended reading lists for Zen centers across America, even though the book has become difficult to find. We are happy to make the book available again after more than a decade of scarcity. J. C. Cleary's translation is as noteworthy for its elegant simplicity as for its accuracy. He has culled from the voluminous writings of Ta Hui Tsung Kao in the Chi Yeuh Lu this selection of letters, sermons, and lectures, some running no longer than a page, which cover a variety of subjects ranging from concern over the illness of a friend's son to the tending of an ox. Ta Hui addresses his remarks mainly to people in lay life and not to his fellow monks. Thus the emphasis throughout is on ways in which those immersed in worldly occupations can nevertheless learn Zen and achieve the liberation promised by the Buddha. These texts, available in English only in this translation, come as a revelation for their lucid thinking and startling wisdom. The translator's essay on Chan (Chinese Zen) Buddhism and his short biography of Ta Hui place the texts in their proper historical perspective.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9781590303184"
  },
  {
  "type": "ISBN_10",
  "identifier": "1590303180"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 125,
  "printType": "BOOK",
  "categories": [
  "Religion"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.2.0.preview.3",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=EicYUOA8OBQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=EicYUOA8OBQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=EicYUOA8OBQC&printsec=frontcover&dq=flowers&hl=&cd=33&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=EicYUOA8OBQC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Swampland_Flowers.html?hl=&id=EicYUOA8OBQC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Swampland_Flowers-sample-epub.acsm?id=EicYUOA8OBQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Swampland_Flowers-sample-pdf.acsm?id=EicYUOA8OBQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=EicYUOA8OBQC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "The writings of the twelfth-century Chinese Zen master are presented in a selection of letters, sermons, and lectures that cover a variety of subjects that emphasize the ways in which Zen can be learned and the liberation promised by the ..."
  }
  },
  {
  "kind": "books#volume",
  "id": "3TcbAAAAYAAJ",
  "etag": "GIUZjJ9yVfw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/3TcbAAAAYAAJ",
  "volumeInfo": {
  "title": "The Procession of the Flowers and Kindred Papers, with an Index of Plants and Animals Mentioned",
  "authors": [
  "Thomas Wentworth Higginson"
  ],
  "publishedDate": "1897",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "HARVARD:32044107258014"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "printType": "BOOK",
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.full.1",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=3TcbAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=3TcbAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=3TcbAAAAYAAJ&pg=PP1&dq=flowers&hl=&cd=34&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=3TcbAAAAYAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-3TcbAAAAYAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=3TcbAAAAYAAJ&rdid=book-3TcbAAAAYAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false,
  "downloadLink": "http://books.google.com/books/download/The_Procession_of_the_Flowers_and_Kindre.epub?id=3TcbAAAAYAAJ&hl=&output=epub&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/The_Procession_of_the_Flowers_and_Kindre.pdf?id=3TcbAAAAYAAJ&hl=&output=pdf&sig=ACfU3U3eS7DVP4ltu4c56JYZ2sKauq3Vlw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=3TcbAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "OI5OZmsjNpIC",
  "etag": "GR3J0x1qIZs",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/OI5OZmsjNpIC",
  "volumeInfo": {
  "title": "Hearts and Flowers",
  "subtitle": "Hand Applique from Start to Finish",
  "authors": [
  "Kathy Delaney"
  ],
  "publisher": "Kansas City Star Books",
  "publishedDate": "2002-01-01",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0971708037"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780971708037"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 132,
  "printType": "BOOK",
  "categories": [
  "Appliqué"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=OI5OZmsjNpIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=OI5OZmsjNpIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=OI5OZmsjNpIC&printsec=frontcover&dq=flowers&hl=&cd=35&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=OI5OZmsjNpIC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Hearts_and_Flowers.html?hl=&id=OI5OZmsjNpIC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=OI5OZmsjNpIC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "c72XDQAAQBAJ",
  "etag": "9UoBhogUTik",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/c72XDQAAQBAJ",
  "volumeInfo": {
  "title": "The Fine Art of Paper Flowers",
  "subtitle": "A Guide to Making Beautiful and Lifelike Botanicals",
  "authors": [
  "Tiffanie Turner"
  ],
  "publisher": "Watson-Guptill",
  "publishedDate": "2017-08-22",
  "description": "An inspiring, practical and gorgeous guide to crafting the most realistic and artful paper flowers for arrangements, art, décor, wearables and more, from San Francisco botanical artist Tiffanie Turner. The Fine Art of Paper Flowers is an elevated art and craft guide that features complete step-by-step instructions for over 30 of Tiffanie Turner’s widely admired, unique, lifelike paper flowers and their foliage, from bougainvillea to English roses to zinnias. In the book, Turner also guides readers through making her signature giant paper peony, shares all of her secrets for special paper treatments, candy-striping, playing with color and creating botanical imperfections, and shows how to turn paper flowers into gorgeous garlands, headdresses, bouquets and more. These stunning creations can be made from simple and inexpensive materials and the book's detailed tutorials and beautiful photography make it easy to achieve dramatic and lifelike results.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780399578380"
  },
  {
  "type": "ISBN_10",
  "identifier": "0399578382"
  }
  ],
  "readingModes": {
  "text": true,
  "image": false
  },
  "pageCount": 264,
  "printType": "BOOK",
  "categories": [
  "Crafts & Hobbies"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.1.1.0.preview.2",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=c72XDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=c72XDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=c72XDQAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=36&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=c72XDQAAQBAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-c72XDQAAQBAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=c72XDQAAQBAJ&rdid=book-c72XDQAAQBAJ&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/The_Fine_Art_of_Paper_Flowers-sample-epub.acsm?id=c72XDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=c72XDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "In the book, Turner also guides readers through making her signature giant paper peony, shares all of her secrets for special paper treatments, candy-striping, playing with color and creating botanical imperfections, and shows how to turn ..."
  }
  },
  {
  "kind": "books#volume",
  "id": "2ol_ZwOJLlUC",
  "etag": "QYrxrZBN+iM",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/2ol_ZwOJLlUC",
  "volumeInfo": {
  "title": "A Thousand Flowers",
  "subtitle": "Social Struggles Against Structural Adjustment in African Universities",
  "authors": [
  "Silvia Federici",
  "Constantine George Caffentzis",
  "Ousseina Alidou"
  ],
  "publisher": "Africa World Press",
  "publishedDate": "2000",
  "description": "Combining theoretical essays with reports and testimonies, this book presents a unique account of the impact of the World Bank's structural adjustment programme on African education. Part I contains an in-depth analysis and critique of the World Bank's policies on the future of African educational systems, while Part II looks at the response of teachers and students to the dismantling of public education and points to the development of a new Pan-Africanist movement.",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0865437734"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780865437739"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 248,
  "printType": "BOOK",
  "categories": [
  "Education"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=2ol_ZwOJLlUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=2ol_ZwOJLlUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=2ol_ZwOJLlUC&pg=PP1&dq=flowers&hl=&cd=37&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=2ol_ZwOJLlUC&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/A_Thousand_Flowers.html?hl=&id=2ol_ZwOJLlUC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=2ol_ZwOJLlUC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Combining theoretical essays with reports and testimonies, this book presents a unique account of the impact of the World Bank&#39;s structural adjustment programme on African education."
  }
  },
  {
  "kind": "books#volume",
  "id": "J086AAAAMAAJ",
  "etag": "g/AMm/Kv0+4",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/J086AAAAMAAJ",
  "volumeInfo": {
  "title": "St. Francis of Assisi (Little Flowers).",
  "subtitle": "Oratorio in a Prologue and Two Parts",
  "authors": [
  "Gabriel Pierné"
  ],
  "publishedDate": "1912",
  "industryIdentifiers": [
  {
  "type": "OTHER",
  "identifier": "UOM:39015023377214"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 231,
  "printType": "BOOK",
  "categories": [
  "Oratorios"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "0.1.0.0.full.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=J086AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=J086AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=J086AAAAMAAJ&pg=PP1&dq=flowers&hl=&cd=38&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=J086AAAAMAAJ&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-J086AAAAMAAJ"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FREE",
  "isEbook": true,
  "buyLink": "https://play.google.com/store/books/details?id=J086AAAAMAAJ&rdid=book-J086AAAAMAAJ&rdot=1&source=gbs_api"
  },
  "accessInfo": {
  "country": "US",
  "viewability": "ALL_PAGES",
  "embeddable": true,
  "publicDomain": true,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": true,
  "downloadLink": "http://books.google.com/books/download/St_Francis_of_Assisi_Little_Flowers.pdf?id=J086AAAAMAAJ&hl=&output=pdf&sig=ACfU3U2mHzir1PWQsfWsP5ZCk0bj3iscgw&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=J086AAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "FULL_PUBLIC_DOMAIN",
  "quoteSharingAllowed": false
  }
  },
  {
  "kind": "books#volume",
  "id": "6Hiu1HoAEP8C",
  "etag": "3z40SDTh0ug",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/6Hiu1HoAEP8C",
  "volumeInfo": {
  "title": "To Us, All Flowers are Roses",
  "subtitle": "Poems",
  "authors": [
  "Lorna Goodison"
  ],
  "publisher": "University of Illinois Press",
  "publishedDate": "1995-01-01",
  "description": "A collection of poems focusing on the culture and people of the Caribbean",
  "industryIdentifiers": [
  {
  "type": "ISBN_10",
  "identifier": "0252064593"
  },
  {
  "type": "ISBN_13",
  "identifier": "9780252064593"
  }
  ],
  "readingModes": {
  "text": false,
  "image": true
  },
  "pageCount": 73,
  "printType": "BOOK",
  "categories": [
  "Poetry"
  ],
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.1.0.preview.1",
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=6Hiu1HoAEP8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=6Hiu1HoAEP8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=6Hiu1HoAEP8C&pg=PP1&dq=flowers&hl=&cd=39&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=6Hiu1HoAEP8C&dq=flowers&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/To_Us_All_Flowers_are_Roses.html?hl=&id=6Hiu1HoAEP8C"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": false
  },
  "pdf": {
  "isAvailable": false
  },
  "webReaderLink": "http://play.google.com/books/reader?id=6Hiu1HoAEP8C&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "A collection of poems focusing on the culture and people of the Caribbean"
  }
  },
  {
  "kind": "books#volume",
  "id": "FjBKXGjN7xgC",
  "etag": "+eW0xotmLJ0",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/FjBKXGjN7xgC",
  "volumeInfo": {
  "title": "Our Lady of the Flowers",
  "authors": [
  "Jean Genet"
  ],
  "publisher": "Grove/Atlantic, Inc.",
  "publishedDate": "1994-01-12",
  "description": "'Our Lady of the Flowers', which is often considered to be Genet's masterpiece, was written entirely in the solitude of a prison cell. the exceptional value of the work lies in its ambiguity.",
  "industryIdentifiers": [
  {
  "type": "ISBN_13",
  "identifier": "9780802194244"
  },
  {
  "type": "ISBN_10",
  "identifier": "0802194249"
  }
  ],
  "readingModes": {
  "text": true,
  "image": true
  },
  "pageCount": 272,
  "printType": "BOOK",
  "categories": [
  "Fiction"
  ],
  "averageRating": 3.5,
  "ratingsCount": 2,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "0.7.7.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=FjBKXGjN7xgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=FjBKXGjN7xgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=FjBKXGjN7xgC&printsec=frontcover&dq=flowers&hl=&cd=40&source=gbs_api",
  "infoLink": "https://play.google.com/store/books/details?id=FjBKXGjN7xgC&source=gbs_api",
  "canonicalVolumeLink": "https://market.android.com/details?id=book-FjBKXGjN7xgC"
  },
  "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
  "amount": 13.99,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amount": 9.99,
  "currencyCode": "USD"
  },
  "buyLink": "https://play.google.com/store/books/details?id=FjBKXGjN7xgC&rdid=book-FjBKXGjN7xgC&rdot=1&source=gbs_api",
  "offers": [
  {
  "finskyOfferType": 1,
  "listPrice": {
  "amountInMicros": 13990000,
  "currencyCode": "USD"
  },
  "retailPrice": {
  "amountInMicros": 9990000,
  "currencyCode": "USD"
  },
  "giftable": true
  }
  ]
  },
  "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Our_Lady_of_the_Flowers-sample-epub.acsm?id=FjBKXGjN7xgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.com/books/download/Our_Lady_of_the_Flowers-sample-pdf.acsm?id=FjBKXGjN7xgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=FjBKXGjN7xgC&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "&#39;Our Lady of the Flowers&#39;, which is often considered to be Genet&#39;s masterpiece, was written entirely in the solitude of a prison cell. the exceptional value of the work lies in its ambiguity."
  }
  }
  ]
  }

  const volumePageTwo = {
    "kind": "books#volumes",
    "totalItems": 3556,
    "items": [
    {
    "kind": "books#volume",
    "id": "6Hiu1HoAEP8C",
    "etag": "Xxd3WWGs0xw",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/6Hiu1HoAEP8C",
    "volumeInfo": {
    "title": "To Us, All Flowers are Roses",
    "subtitle": "Poems",
    "authors": [
    "Lorna Goodison"
    ],
    "publisher": "University of Illinois Press",
    "publishedDate": "1995-01-01",
    "description": "A collection of poems focusing on the culture and people of the Caribbean",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0252064593"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780252064593"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 73,
    "printType": "BOOK",
    "categories": [
    "Poetry"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.0.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=6Hiu1HoAEP8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=6Hiu1HoAEP8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=6Hiu1HoAEP8C&pg=PP1&dq=flowers&hl=&cd=41&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=6Hiu1HoAEP8C&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/To_Us_All_Flowers_are_Roses.html?hl=&id=6Hiu1HoAEP8C"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=6Hiu1HoAEP8C&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "A collection of poems focusing on the culture and people of the Caribbean"
    }
    },
    {
    "kind": "books#volume",
    "id": "FjBKXGjN7xgC",
    "etag": "EZbTRrGTTqQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/FjBKXGjN7xgC",
    "volumeInfo": {
    "title": "Our Lady of the Flowers",
    "authors": [
    "Jean Genet"
    ],
    "publisher": "Grove/Atlantic, Inc.",
    "publishedDate": "1994-01-12",
    "description": "'Our Lady of the Flowers', which is often considered to be Genet's masterpiece, was written entirely in the solitude of a prison cell. the exceptional value of the work lies in its ambiguity.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780802194244"
    },
    {
    "type": "ISBN_10",
    "identifier": "0802194249"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 272,
    "printType": "BOOK",
    "categories": [
    "Fiction"
    ],
    "averageRating": 3.5,
    "ratingsCount": 2,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "0.7.7.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=FjBKXGjN7xgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=FjBKXGjN7xgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=FjBKXGjN7xgC&printsec=frontcover&dq=flowers&hl=&cd=42&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=FjBKXGjN7xgC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-FjBKXGjN7xgC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 13.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 9.99,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=FjBKXGjN7xgC&rdid=book-FjBKXGjN7xgC&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 13990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 9990000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Our_Lady_of_the_Flowers-sample-epub.acsm?id=FjBKXGjN7xgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Our_Lady_of_the_Flowers-sample-pdf.acsm?id=FjBKXGjN7xgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=FjBKXGjN7xgC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "&#39;Our Lady of the Flowers&#39;, which is often considered to be Genet&#39;s masterpiece, was written entirely in the solitude of a prison cell. the exceptional value of the work lies in its ambiguity."
    }
    },
    {
    "kind": "books#volume",
    "id": "Pv1eUCKdP-QC",
    "etag": "XDDCz5EMPPw",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Pv1eUCKdP-QC",
    "volumeInfo": {
    "title": "Caring for Cut Flowers",
    "authors": [
    "Rod Jones"
    ],
    "publisher": "Landlinks Press",
    "publishedDate": "2001",
    "description": "Shows florists and growers how to make cut flowers last longer.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0643066314"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780643066311"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 191,
    "printType": "BOOK",
    "categories": [
    "Science"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=Pv1eUCKdP-QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Pv1eUCKdP-QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Pv1eUCKdP-QC&printsec=frontcover&dq=flowers&hl=&cd=43&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=Pv1eUCKdP-QC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Caring_for_Cut_Flowers.html?hl=&id=Pv1eUCKdP-QC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=Pv1eUCKdP-QC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Shows florists and growers how to make cut flowers last longer."
    }
    },
    {
    "kind": "books#volume",
    "id": "4JbJsgEACAAJ",
    "etag": "O1AIlqRBL3o",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/4JbJsgEACAAJ",
    "volumeInfo": {
    "title": "The Flowers",
    "authors": [
    "Lisa Cooper"
    ],
    "publishedDate": "2016-03",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1743363389"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781743363386"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 256,
    "printType": "BOOK",
    "categories": [
    "Flower arrangement"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=4JbJsgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=4JbJsgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=4JbJsgEACAAJ&dq=flowers&hl=&cd=44&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=4JbJsgEACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Flowers.html?hl=&id=4JbJsgEACAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=4JbJsgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Dr Lisa Cooper&#39;s The Flowers gives us the opportunity to peer into the practices and vistas of someone who works with flowers daily as a leading floral designer and artist."
    }
    },
    {
    "kind": "books#volume",
    "id": "37ie3bXoiyYC",
    "etag": "lICNzWbHu0o",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/37ie3bXoiyYC",
    "volumeInfo": {
    "title": "A Year Full of Flowers",
    "subtitle": "Fresh Ideas to Bring Flowers Into Your Life Everyday",
    "authors": [
    "Jim McCann",
    "Julie McCann-Mulligan",
    "Bo Niles"
    ],
    "publisher": "Rodale",
    "publishedDate": "2004-10-20",
    "description": "Introduces a series of innovative and creative ways to bring flowers into one's life throughout every season of the year, offering helpful instruction in the basics of flower arranging, from essential equipment and techniques to guidance on design principles of color, balance, texture, and proportion, accompanied by helpful shortcuts, insider secrets, and more. Original. 50,000 first printing.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1579549047"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781579549046"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 264,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=37ie3bXoiyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=37ie3bXoiyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=37ie3bXoiyYC&printsec=frontcover&dq=flowers&hl=&cd=45&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=37ie3bXoiyYC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/A_Year_Full_of_Flowers.html?hl=&id=37ie3bXoiyYC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=37ie3bXoiyYC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Introduces a series of innovative and creative ways to bring flowers into one&#39;s life throughout every season of the year, offering helpful instruction in the basics of flower arranging, from essential equipment and techniques to guidance on ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "uVbGOE3jwWUC",
    "etag": "CH9oIh5/CyQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/uVbGOE3jwWUC",
    "volumeInfo": {
    "title": "Flowers from Hell",
    "authors": [
    "Jim Harper"
    ],
    "publisher": "Noir Publishing",
    "publishedDate": "2008",
    "description": "Over the past decade, Japan has become a key player on the contemporary horror scene, producing some of the most influential and critically respected genre movies of recent years. Whether it's the subtle chills of Ring, the graphic brutality of Audition or the zombie-fuelled mayhem of Versus, leading Japanese horror has had a major impact throughout the world. From its origins in the mid-80s to the multi-million dollar franchises of today, Flowers from Hell traces the evolution of this consistently inventive and influential horror phenomenon.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780953656479"
    },
    {
    "type": "ISBN_10",
    "identifier": "0953656470"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 192,
    "printType": "BOOK",
    "categories": [
    "Performing Arts"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.0.3.0.preview.3",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=uVbGOE3jwWUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=uVbGOE3jwWUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=uVbGOE3jwWUC&printsec=frontcover&dq=flowers&hl=&cd=46&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=uVbGOE3jwWUC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_from_Hell.html?hl=&id=uVbGOE3jwWUC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Flowers_from_Hell-sample-epub.acsm?id=uVbGOE3jwWUC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=uVbGOE3jwWUC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "From its origins in the mid-80s to the multi-million dollar franchises of today, Flowers from Hell traces the evolution of this consistently inventive and influential horror phenomenon."
    }
    },
    {
    "kind": "books#volume",
    "id": "4quu5MeuuKkC",
    "etag": "0yV4ZAK6MWE",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/4quu5MeuuKkC",
    "volumeInfo": {
    "title": "The Sentiment of Flowers",
    "subtitle": "Or, Language of Flora. Embracing an Account of Nearly Three Hundred Different Flowers, with Their Powers in Language...",
    "authors": [
    "Robert Tyas"
    ],
    "publishedDate": "1840",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "HARVARD:32044018919183"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 276,
    "printType": "BOOK",
    "categories": [
    "Flower language"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.1.0.full.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=4quu5MeuuKkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=4quu5MeuuKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=4quu5MeuuKkC&printsec=frontcover&dq=flowers&hl=&cd=47&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=4quu5MeuuKkC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-4quu5MeuuKkC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=4quu5MeuuKkC&rdid=book-4quu5MeuuKkC&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/The_Sentiment_of_Flowers.pdf?id=4quu5MeuuKkC&hl=&output=pdf&sig=ACfU3U3fKVR4bDlJGx0DjT6bNimjNf_sHg&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=4quu5MeuuKkC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "Em3qCrgafuoC",
    "etag": "TZmw1UdoXKA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Em3qCrgafuoC",
    "volumeInfo": {
    "title": "The Meaning of Flowers",
    "subtitle": "Myth, Language & Lore",
    "authors": [
    "Gretchen Scoble",
    "Ann Field"
    ],
    "publisher": "Chronicle Books",
    "publishedDate": "1998-04-01",
    "description": "Looks at over sixty blossoms, from the amaryllis to the daisy, providing the legends and lore associated with each one",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0811819310"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780811819312"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 104,
    "printType": "BOOK",
    "categories": [
    "Gardening"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.2.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=Em3qCrgafuoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Em3qCrgafuoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Em3qCrgafuoC&printsec=frontcover&dq=flowers&hl=&cd=48&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=Em3qCrgafuoC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Meaning_of_Flowers.html?hl=&id=Em3qCrgafuoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=Em3qCrgafuoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Looks at over sixty blossoms, from the amaryllis to the daisy, providing the legends and lore associated with each one"
    }
    },
    {
    "kind": "books#volume",
    "id": "PVS4ZCp3AkoC",
    "etag": "6zLtVsObvY0",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/PVS4ZCp3AkoC",
    "volumeInfo": {
    "title": "Flowers of the Bible",
    "authors": [
    "Helga Curtis"
    ],
    "publisher": "DRG Wholesale",
    "publishedDate": "2003-01-01",
    "description": "Featured in this book are full-size applique patterns for 29 flowers that are mentioned in the Bible. The flowers and their foilage are in a circular design on a square block.\"",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1592170129"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781592170128"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 129,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=PVS4ZCp3AkoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=PVS4ZCp3AkoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=PVS4ZCp3AkoC&printsec=frontcover&dq=flowers&hl=&cd=49&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=PVS4ZCp3AkoC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_of_the_Bible.html?hl=&id=PVS4ZCp3AkoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=PVS4ZCp3AkoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Featured in this book are full-size applique patterns for 29 flowers that are mentioned in the Bible. The flowers and their foilage are in a circular design on a square block.&quot;"
    }
    },
    {
    "kind": "books#volume",
    "id": "R0kaAQAAIAAJ",
    "etag": "DwP9ZZ7pbs4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/R0kaAQAAIAAJ",
    "volumeInfo": {
    "title": "The Casket, Or, Flowers of Literature, Wit & Sentiment",
    "publishedDate": "1833",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "UCAL:B3009049"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "printType": "BOOK",
    "categories": [
    "American periodicals"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.2.1.0.full.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=R0kaAQAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=R0kaAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=R0kaAQAAIAAJ&printsec=frontcover&dq=flowers&hl=&cd=50&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=R0kaAQAAIAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-R0kaAQAAIAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=R0kaAQAAIAAJ&rdid=book-R0kaAQAAIAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/The_Casket_Or_Flowers_of_Literature_Wit.pdf?id=R0kaAQAAIAAJ&hl=&output=pdf&sig=ACfU3U1Mp9ak1KI8joChz7Y3j1vF6twbgw&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=R0kaAQAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "wMAOAQAAIAAJ",
    "etag": "1g+jrCDZMBc",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/wMAOAQAAIAAJ",
    "volumeInfo": {
    "title": "The Language of Flowers",
    "publishedDate": "1835",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "STANFORD:36105024317716"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 326,
    "printType": "BOOK",
    "categories": [
    "Plants"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "2.1.0.0.full.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=wMAOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=wMAOAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=wMAOAQAAIAAJ&printsec=frontcover&dq=flowers&hl=&cd=51&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=wMAOAQAAIAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-wMAOAQAAIAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=wMAOAQAAIAAJ&rdid=book-wMAOAQAAIAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false,
    "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.epub?id=wMAOAQAAIAAJ&hl=&output=epub&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.pdf?id=wMAOAQAAIAAJ&hl=&output=pdf&sig=ACfU3U0HoFsAiBEvMe43ziWoNxnDbQa1mQ&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=wMAOAQAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "5zEm8wvk2EgC",
    "etag": "At2FlCveHm8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/5zEm8wvk2EgC",
    "volumeInfo": {
    "title": "Flowers",
    "authors": [
    "Nicola Tuxworth"
    ],
    "publisher": "LORENZ BOOKS",
    "publishedDate": "1996",
    "description": "This is a colourful and stimulating series of photographic word books for pre-school learning. Visually exciting, fun to use, and drawing on familiar, simple things, these books will delight and entertain children aged 2-5.'",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1859673147"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781859673140"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 20,
    "printType": "BOOK",
    "categories": [
    "Juvenile Nonfiction"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=5zEm8wvk2EgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=5zEm8wvk2EgC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=5zEm8wvk2EgC&q=flowers&dq=flowers&hl=&cd=52&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=5zEm8wvk2EgC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=5zEm8wvk2EgC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=5zEm8wvk2EgC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "This is a colourful and stimulating series of photographic word books for pre-school learning. Visually exciting, fun to use, and drawing on familiar, simple things, these books will delight and entertain children aged 2-5.&#39;"
    }
    },
    {
    "kind": "books#volume",
    "id": "qyEOAAAAQAAJ",
    "etag": "1yBdBHYUhZ4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/qyEOAAAAQAAJ",
    "volumeInfo": {
    "title": "Flowers of loveliness, 12 groups of female figures designed by E.T. Parris, with poetical illustr. by the countess of Blessington",
    "authors": [
    "Edmund Thomas Parris",
    "Marguerite Gardiner (countess of Blessington.)"
    ],
    "publishedDate": "1836",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "OXFORD:590764972"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "full-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=qyEOAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=qyEOAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=qyEOAAAAQAAJ&printsec=frontcover&dq=flowers&hl=&cd=53&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=qyEOAAAAQAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-qyEOAAAAQAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=qyEOAAAAQAAJ&rdid=book-qyEOAAAAQAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/Flowers_of_loveliness_12_groups_of_femal.pdf?id=qyEOAAAAQAAJ&hl=&output=pdf&sig=ACfU3U0oMw3PPYdN9NnTvY-eXaFNZwuPOA&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=qyEOAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "PK1ZX3u7CPcC",
    "etag": "y6pcVpXGtxA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/PK1ZX3u7CPcC",
    "volumeInfo": {
    "title": "200 Crochet Flowers, Embellishments & Trims",
    "authors": [
    "Claire Crompton"
    ],
    "publisher": "David & Charles",
    "publishedDate": "2011-03-08",
    "description": "Enhanced by twenty project ideas, offers two hundred crochet stitches, embellishments, and trims, with every stitch shown as a swatch and the pattern given in both written and diagram form.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780715338438"
    },
    {
    "type": "ISBN_10",
    "identifier": "0715338439"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 128,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "averageRating": 1,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.1.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=PK1ZX3u7CPcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=PK1ZX3u7CPcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=PK1ZX3u7CPcC&printsec=frontcover&dq=flowers&hl=&cd=54&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=PK1ZX3u7CPcC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/200_Crochet_Flowers_Embellishments_Trims.html?hl=&id=PK1ZX3u7CPcC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true
    },
    "webReaderLink": "http://play.google.com/books/reader?id=PK1ZX3u7CPcC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Enhanced by twenty project ideas, offers two hundred crochet stitches, embellishments, and trims, with every stitch shown as a swatch and the pattern given in both written and diagram form."
    }
    },
    {
    "kind": "books#volume",
    "id": "geqZIHfOY-gC",
    "etag": "FIOwGSE9hHs",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/geqZIHfOY-gC",
    "volumeInfo": {
    "title": "Garden Flowers Iron-On Transfer Patterns",
    "authors": [
    "Claire Bryant"
    ],
    "publisher": "Courier Corporation",
    "publishedDate": "1989-06-01",
    "description": "Here is an outstanding collection of 49 beautiful royalty-free floral patterns ready to provide the all-important starting point for your next needlework or craft project, whether you plan to embroider designs on a tablecloth, applique a cushion, or decorate a chair back. Simply remove the specially treated transfer pattern from the book, place it exactly where you wish it to appear on your fabric or other medium, press it with a warm iron, and the design will appear neatly in place, ready for you to begin work! Varying in size from big, bold hollyhocks and tiger lilies to smaller, more delicate sprigs of spring snowflakes and periwinkles, and including such specialties as a spray of daffodils and a basket of mixed flowers, the designs may be applied to fabrics, wood, and most flat surfaces that absorb ink. Step-by-step instructions show you how to transfer a design (which may be reused several times) quickly and easily onto linens, clothing, wall hangings, cushions, furniture, and much more.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0486259854"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780486259857"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 48,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.0.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=geqZIHfOY-gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=geqZIHfOY-gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=geqZIHfOY-gC&pg=PP1&dq=flowers&hl=&cd=55&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=geqZIHfOY-gC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Garden_Flowers_Iron_On_Transfer_Patterns.html?hl=&id=geqZIHfOY-gC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=geqZIHfOY-gC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Here is an outstanding collection of 49 beautiful royalty-free floral patterns ready to provide the all-important starting point for your next needlework or craft project, whether you plan to embroider designs on a tablecloth, applique a ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "z-F2Xvl9ArcC",
    "etag": "1H/vwm296/k",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/z-F2Xvl9ArcC",
    "volumeInfo": {
    "title": "The Blood of Flowers",
    "subtitle": "A Novel",
    "authors": [
    "Anita Amirrezvani"
    ],
    "publisher": "Little, Brown",
    "publishedDate": "2007-06-05",
    "description": "In 17th-century Persia, a 14-year-old woman believes she will be married within the year. But when her beloved father dies, she and her mother find themselves alone and without a dowry. With nowhere else to go, they are forced to sell the brilliant turquoise rug the young woman has woven to pay for their journey to Isfahan, where they will work as servants for her uncle, a rich rug designer in the court of the legendary Shah Abbas the Great. Despite her lowly station, the young woman blossoms as a brilliant designer of carpets, a rarity in a craft dominated by men. But while her talent flourishes, her prospects for a happy marriage grow dim. Forced into a secret marriage to a wealthy man, the young woman finds herself faced with a daunting decision: forsake her own dignity, or risk everything she has in an effort to create a new life. \"Anita Amirrezvani has written a sensuous and transporting first novel filled with the colors, tastes and fragrances of life in seventeenth-century Isfahan...Amirrezvani clearly knows and loves the ways of old Iran, and brings them to life with the cadences of a skilled story-spinner.\" -- Geraldine Brooks, author of March \"An engrossing, enthralling tale of a girl's quest for self-determination in the fascinating other world that was seventeenth-century Iran.\" -- Emma Donoghue, author of Touchy Subjects and Life Mask",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780316006507"
    },
    {
    "type": "ISBN_10",
    "identifier": "0316006505"
    }
    ],
    "readingModes": {
    "text": true,
    "image": false
    },
    "pageCount": 400,
    "printType": "BOOK",
    "categories": [
    "Fiction"
    ],
    "averageRating": 4,
    "ratingsCount": 45,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "0.0.1.0.preview.2",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=z-F2Xvl9ArcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=z-F2Xvl9ArcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=z-F2Xvl9ArcC&printsec=frontcover&dq=flowers&hl=&cd=56&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=z-F2Xvl9ArcC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-z-F2Xvl9ArcC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 9.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 9.99,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=z-F2Xvl9ArcC&rdid=book-z-F2Xvl9ArcC&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 9990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 9990000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/The_Blood_of_Flowers-sample-epub.acsm?id=z-F2Xvl9ArcC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=z-F2Xvl9ArcC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "A sensuous and richly-imagined historical novel that centers on a skilled young carpet weaver, her arranged marriage, and her quest for self-determination in 17th-century Persia."
    }
    },
    {
    "kind": "books#volume",
    "id": "566AlluiHT0C",
    "etag": "kzzu9aUH080",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/566AlluiHT0C",
    "volumeInfo": {
    "title": "Flowers, Dragons & Pine Trees",
    "subtitle": "Asian Textiles in the Spencer Museum of Art",
    "authors": [
    "Mary M. Dusenbury",
    "Carol Bier"
    ],
    "publisher": "Hudson Hills",
    "publishedDate": "2004",
    "description": "Written for both specialist and general audiences, this stunning volume places new research within a comprehensive socio-historic context, including information on technique, production, iconography, function, patronage, and trade. Five maps, a glossary",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1555952380"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781555952389"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 312,
    "printType": "BOOK",
    "categories": [
    "Art"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=566AlluiHT0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=566AlluiHT0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=566AlluiHT0C&printsec=frontcover&dq=flowers&hl=&cd=57&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=566AlluiHT0C&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_Dragons_Pine_Trees.html?hl=&id=566AlluiHT0C"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=566AlluiHT0C&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "This comprehensive volume brings the hidden treasures of the collection to light with beautiful illustrations, compelling history, and new viewpoints on the rich and ancient textile traditions of Asia."
    }
    },
    {
    "kind": "books#volume",
    "id": "wWg5AAAAIAAJ",
    "etag": "iOkwcwR73s4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/wWg5AAAAIAAJ",
    "volumeInfo": {
    "title": "The Culture of Flowers",
    "authors": [
    "Jack Goody"
    ],
    "publisher": "CUP Archive",
    "publishedDate": "1993-02-25",
    "description": "An analysis of the symbolic and transactional uses of flowers in secular life and religious ritual from ancient Egypt to modern times.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0521414415"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780521414418"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 462,
    "printType": "BOOK",
    "categories": [
    "Nature"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.1.0.preview.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=wWg5AAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=wWg5AAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=wWg5AAAAIAAJ&printsec=frontcover&dq=flowers&hl=&cd=58&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=wWg5AAAAIAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Culture_of_Flowers.html?hl=&id=wWg5AAAAIAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=wWg5AAAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "An analysis of the symbolic and transactional uses of flowers in secular life and religious ritual from ancient Egypt to modern times."
    }
    },
    {
    "kind": "books#volume",
    "id": "3IC7CwAAQBAJ",
    "etag": "2G8CRVuQwNI",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/3IC7CwAAQBAJ",
    "volumeInfo": {
    "title": "Killers of the Flower Moon",
    "subtitle": "The Osage Murders and the Birth of the FBI",
    "authors": [
    "David Grann"
    ],
    "publisher": "Vintage",
    "publishedDate": "2017-04-18",
    "description": "NEW YORK TIMES BESTSELLER - NATIONAL BOOK AWARD FINALIST \"Disturbing and riveting...It will sear your soul.\" —Dave Eggers, New York Times Book Review SHELF AWARENESS'S BEST BOOK OF 2017 Named a best book of the year by Wall Street Journal, The Boston Globe, San Francisco Chronicle, GQ, Time, Newsday, Entertainment Weekly, Time Magazine, NPR's Maureen Corrigan, NPR's \"On Point,\" Vogue, Smithsonian, Cosmopolitan, Seattle Times, Bloomberg, Lit Hub's \"Ultimate Best Books,\" Library Journal, Paste, Kirkus, Slate.com and Book Browse From New Yorker staff writer David Grann, #1 New York Times best-selling author of The Lost City of Z, a twisting, haunting true-life murder mystery about one of the most monstrous crimes in American history In the 1920s, the richest people per capita in the world were members of the Osage Indian nation in Oklahoma. After oil was discovered beneath their land, they rode in chauffeured automobiles, built mansions, and sent their children to study in Europe. Then, one by one, the Osage began to be killed off. The family of an Osage woman, Mollie Burkhart, became a prime target. Her relatives were shot and poisoned. And it was just the beginning, as more and more members of the tribe began to die under mysterious circumstances. In this last remnant of the Wild West—where oilmen like J. P. Getty made their fortunes and where desperadoes like Al Spencer, the “Phantom Terror,” roamed—many of those who dared to investigate the killings were themselves murdered. As the death toll climbed to more than twenty-four, the FBI took up the case. It was one of the organization’s first major homicide investigations and the bureau badly bungled the case. In desperation, the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to unravel the mystery. White put together an undercover team, including one of the only American Indian agents in the bureau. The agents infiltrated the region, struggling to adopt the latest techniques of detection. Together with the Osage they began to expose one of the most chilling conspiracies in American history. In Killers of the Flower Moon, David Grann revisits a shocking series of crimes in which dozens of people were murdered in cold blood. Based on years of research and startling new evidence, the book is a masterpiece of narrative nonfiction, as each step in the investigation reveals a series of sinister secrets and reversals. But more than that, it is a searing indictment of the callousness and prejudice toward American Indians that allowed the murderers to operate with impunity for so long. Killers of the Flower Moon is utterly compelling, but also emotionally devastating.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780385534253"
    },
    {
    "type": "ISBN_10",
    "identifier": "0385534256"
    }
    ],
    "readingModes": {
    "text": true,
    "image": false
    },
    "pageCount": 352,
    "printType": "BOOK",
    "categories": [
    "True Crime"
    ],
    "averageRating": 4,
    "ratingsCount": 45,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.3.3.0.preview.2",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=3IC7CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=3IC7CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=3IC7CwAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=59&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=3IC7CwAAQBAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-3IC7CwAAQBAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 13.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 13.99,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=3IC7CwAAQBAJ&rdid=book-3IC7CwAAQBAJ&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 13990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 13990000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Killers_of_the_Flower_Moon-sample-epub.acsm?id=3IC7CwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=3IC7CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Based on years of research and startling new evidence, the book is a masterpiece of narrative nonfiction, as each step in the investigation reveals a series of sinister secrets and reversals."
    }
    },
    {
    "kind": "books#volume",
    "id": "2u8YAAAAYAAJ",
    "etag": "CuisBFAoXWg",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/2u8YAAAAYAAJ",
    "volumeInfo": {
    "title": "Wild Flowers",
    "authors": [
    "Anne Pratt"
    ],
    "publishedDate": "1852",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "HARVARD:32044106356975"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "printType": "BOOK",
    "categories": [
    "Botany"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "full-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=2u8YAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=2u8YAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=2u8YAAAAYAAJ&printsec=frontcover&dq=flowers&hl=&cd=60&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=2u8YAAAAYAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-2u8YAAAAYAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=2u8YAAAAYAAJ&rdid=book-2u8YAAAAYAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/Wild_Flowers.pdf?id=2u8YAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1VVhKt9h4A5AUTPo-lcsZueivJDQ&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=2u8YAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "4FlYU1GuicoC",
    "etag": "elXir7gF2fw",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/4FlYU1GuicoC",
    "volumeInfo": {
    "title": "Vertical Gardening",
    "subtitle": "Grow Up, Not Out, for More Vegetables and Flowers in Much Less Space",
    "authors": [
    "Derek Fell"
    ],
    "publisher": "Rodale",
    "publishedDate": "2011-04-26",
    "description": "The biggest mistake gardeners make each season is starting out too big and then quickly realizing their large plot requires too much weeding, watering, and backbreaking labor. Vertical gardening guarantees a better outcome from the day the trowel hits the soil--by shrinking the amount of \"floor\" space needed and focusing on climbing plants that are less prone to insects, diseases, and animal pests. Notable author and gardener Derek Fell has tried and tested thousands of varieties of vegetables, flowers, and fruits and recommends the best plants for space-saving vertical gardening. His grow-up, grow-down system also shows which ground-level plants make good companions underneath and alongside climbing plants. Best of all, many of Fell's greatest climbers and mutually beneficial plants are available in seed packets in every local garden center. With a mix of DIY and commercially available string supports, trellises, pergolas, raised beds, skyscraper gardens, and topsy-turvy planters, the vertical garden system reduces work, increases yields, makes harvesting easier, and can be practiced in spaces as small as a container or a one-by-four-foot strip. Vertical Gardening features 100 color photos of the author's own vertical methods and showcases beautiful, troublefree perennials, shrubs, vegetables, annuals, and fruit perfect for this new, rewarding way to garden.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781609613990"
    },
    {
    "type": "ISBN_10",
    "identifier": "1609613996"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 384,
    "printType": "BOOK",
    "categories": [
    "Gardening"
    ],
    "averageRating": 5,
    "ratingsCount": 5,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "0.8.9.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=4FlYU1GuicoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=4FlYU1GuicoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=4FlYU1GuicoC&printsec=frontcover&dq=flowers&hl=&cd=61&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=4FlYU1GuicoC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-4FlYU1GuicoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 23.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 11.23,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=4FlYU1GuicoC&rdid=book-4FlYU1GuicoC&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 23990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 11230000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Vertical_Gardening-sample-epub.acsm?id=4FlYU1GuicoC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Vertical_Gardening-sample-pdf.acsm?id=4FlYU1GuicoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=4FlYU1GuicoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Notable author and gardener Derek Fell has tried and tested thousands of varieties of vegetables, flowers, and fruits and recommends the best plants for space-saving vertical gardening."
    }
    },
    {
    "kind": "books#volume",
    "id": "btu3cShwuf4C",
    "etag": "UtxKqxbV9TA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/btu3cShwuf4C",
    "volumeInfo": {
    "title": "Flowers",
    "subtitle": "Inspiration, arrangements, displays, color",
    "authors": [
    "Gillian Haslam"
    ],
    "publishedDate": "2004",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1405439602"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781405439602"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 96,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=btu3cShwuf4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=btu3cShwuf4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=btu3cShwuf4C&q=flowers&dq=flowers&hl=&cd=62&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=btu3cShwuf4C&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=btu3cShwuf4C"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=btu3cShwuf4C&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "PwQDAAAAYAAJ",
    "etag": "cy/u4PWYVcE",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/PwQDAAAAYAAJ",
    "volumeInfo": {
    "title": "The Flower Garden, Or, Breck's Book of Flowers",
    "subtitle": "In which are Described All the Various Hardy Herbaceous Perennials, Annuals, Shrubby Plants, and Evergreen Trees, Desirable for Ornamental Purposes, with Directions for Their Cultivation",
    "authors": [
    "Joseph Breck"
    ],
    "publishedDate": "1858",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "HARVARD:32044103115176"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 395,
    "printType": "BOOK",
    "categories": [
    "Floriculture"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "full-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=PwQDAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=PwQDAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=PwQDAAAAYAAJ&printsec=frontcover&dq=flowers&hl=&cd=63&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=PwQDAAAAYAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-PwQDAAAAYAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=PwQDAAAAYAAJ&rdid=book-PwQDAAAAYAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false,
    "downloadLink": "http://books.google.com/books/download/The_Flower_Garden_Or_Breck_s_Book_of_Flo.epub?id=PwQDAAAAYAAJ&hl=&output=epub&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/The_Flower_Garden_Or_Breck_s_Book_of_Flo.pdf?id=PwQDAAAAYAAJ&hl=&output=pdf&sig=ACfU3U06LU2FByoi4oyRiNTXjo2s722uBw&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=PwQDAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "Xj1dAwAAQBAJ",
    "etag": "PW2wxwltyWU",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Xj1dAwAAQBAJ",
    "volumeInfo": {
    "title": "Edible Medicinal And Non-Medicinal Plants",
    "subtitle": "Volume 7, Flowers",
    "authors": [
    "T. K. Lim"
    ],
    "publisher": "Springer Science & Business Media",
    "publishedDate": "2013-11-08",
    "description": "This book continues as volume 7 of a multi-compendium on Edible Medicinal and Non-Medicinal Plants. It covers plant species with edible flowers from families Acanthaceae to Facaceae in a tabular form and seventy five selected species from Amaryllidaceae, Apocynaceae, Asclepiadaceae, Asparagaceae, Asteraceae, Balsaminaceae, Begoniaceae, Bignoniaceae, Brassicaceae, Cactaceae, Calophyllaceae, Caprifoliaceae, Caryophyllaceae, Combretaceae, Convolvulaceae, Costaceae, Doryanthaceae and Fabaceae in detail. This work will be of significant interest to scientists, medical practitioners, pharmacologists, ethnobotanists, horticulturists, food nutritionists, botanists, agriculturists, conservationists, lecturers, students and the general public. Topics covered include: taxonomy; common/English and vernacular names; origin and distribution; agroecology; edible plant parts and uses; botany; nutritive/pharmacological properties, medicinal uses, nonedible uses; and selected references.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9789400773950"
    },
    {
    "type": "ISBN_10",
    "identifier": "9400773951"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 1102,
    "printType": "BOOK",
    "categories": [
    "Science"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.8.6.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=Xj1dAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Xj1dAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Xj1dAwAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=64&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=Xj1dAwAAQBAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-Xj1dAwAAQBAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE_AND_RENTAL",
    "isEbook": true,
    "listPrice": {
    "amount": 269,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 215.2,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=Xj1dAwAAQBAJ&rdid=book-Xj1dAwAAQBAJ&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 269000000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 215200000,
    "currencyCode": "USD"
    },
    "giftable": true
    },
    {
    "finskyOfferType": 3,
    "listPrice": {
    "amountInMicros": 94150000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 81910000,
    "currencyCode": "USD"
    },
    "rentalDuration": {
    "unit": "DAY",
    "count": 90
    }
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Edible_Medicinal_And_Non_Medicinal_Plant-sample-epub.acsm?id=Xj1dAwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Edible_Medicinal_And_Non_Medicinal_Plant-sample-pdf.acsm?id=Xj1dAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=Xj1dAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "This book continues as volume 7 of a multi-compendium on Edible Medicinal and Non-Medicinal Plants."
    }
    },
    {
    "kind": "books#volume",
    "id": "AjbOwAMLUCUC",
    "etag": "dtrmlUqEdJ8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/AjbOwAMLUCUC",
    "volumeInfo": {
    "title": "Flowers A to Z with Donna Dewberry",
    "authors": [
    "Donna Dewberry"
    ],
    "publisher": "North Light Books",
    "publishedDate": "2004-06-20",
    "description": "Painting your favorite flowers is easy with Donna Dewberry! Add the beauty and elegance of painted flowers to your projects. It's quick and fun with Donna Dewberry's popular one-stroke technique! This easy-to-use reference provides all of the instruction and inspiration you need to successfully paint more than 50 garden flowers and wildflowers in an array of stunning colors. Donna provides complete instruction beginning with step-by-step photos of her basic one-stroke painting technique. You'll discover the secrets of painting leaves, vines and other foliage common to a variety of flowers. With handy color charts and tips on painting flower petals of all kinds, you'll learn how to create unique floral designs that can be used on furniture, walls, picture frames and more, with fabulous results every time.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781440321986"
    },
    {
    "type": "ISBN_10",
    "identifier": "1440321981"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 144,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "3.5.5.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=AjbOwAMLUCUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=AjbOwAMLUCUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=AjbOwAMLUCUC&printsec=frontcover&dq=flowers&hl=&cd=65&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=AjbOwAMLUCUC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-AjbOwAMLUCUC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 24.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 14.74,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=AjbOwAMLUCUC&rdid=book-AjbOwAMLUCUC&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 24990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 14740000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true
    },
    "pdf": {
    "isAvailable": true
    },
    "webReaderLink": "http://play.google.com/books/reader?id=AjbOwAMLUCUC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Painting your favorite flowers is easy with Donna Dewberry! Add the beauty and elegance of painted flowers to your projects. It&#39;s quick and fun with Donna Dewberry&#39;s popular one-stroke technique!"
    }
    },
    {
    "kind": "books#volume",
    "id": "ordTwAfCqGcC",
    "etag": "SUTkOI+eURk",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/ordTwAfCqGcC",
    "volumeInfo": {
    "title": "Bead Flowers",
    "authors": [
    "Minako Shimonagase"
    ],
    "publisher": "Japan Publications Trading",
    "publishedDate": "2005-01-01",
    "description": "Bead Flowers is a Japan Publications publication.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "4889961909"
    },
    {
    "type": "ISBN_13",
    "identifier": "9784889961904"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 96,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "averageRating": 5,
    "ratingsCount": 2,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.1.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=ordTwAfCqGcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=ordTwAfCqGcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=ordTwAfCqGcC&printsec=frontcover&dq=flowers&hl=&cd=66&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=ordTwAfCqGcC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Bead_Flowers.html?hl=&id=ordTwAfCqGcC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=ordTwAfCqGcC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Bead Flowers is a Japan Publications publication."
    }
    },
    {
    "kind": "books#volume",
    "id": "VvLzNZLkSDcC",
    "etag": "Wqk/ZQtyVUk",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/VvLzNZLkSDcC",
    "volumeInfo": {
    "title": "Among Flowers",
    "subtitle": "A Walk in the Himalaya",
    "authors": [
    "Jamaica Kincaid"
    ],
    "publisher": "National Geographic Books",
    "publishedDate": "2011-06-15",
    "description": "In this delightful hybrid of a book—part memoir and part travel journal—the bestselling author takes us deep into the mountains of Nepal with a trio of botanist friends in search of native Himalayan plants that will grow in her Vermont garden. Alighting from a plane in the dramatic Annapurna Valley, the ominous signs of Nepal's Maoist guerrillas are all around—an alarming presence that accompanies the travelers throughout their trek. Undaunted, the group sets off into the mountains with Sherpas and bearers, entering an exotic world of spectacular landscapes, vertiginous slopes, isolated villages, herds of yaks, and giant rhododendron, thirty feet tall. The landscape and flora and so much else of what Kincaid finds in the Himalaya—including fruit bats, colorful Buddhist prayer flags, and the hated leeches that plague much of the trip—are new to her, and she approaches it all with an acute sense of wonder and a deft eye for detail. In beautiful, introspective prose, Kincaid intertwines the harrowing Maoist encounters with exciting botanical discoveries, fascinating daily details, and lyrical musings on gardens, nature, home, and family. From the Trade Paperback edition.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781426209017"
    },
    {
    "type": "ISBN_10",
    "identifier": "1426209010"
    }
    ],
    "readingModes": {
    "text": true,
    "image": false
    },
    "pageCount": 208,
    "printType": "BOOK",
    "categories": [
    "Travel"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.0.0.preview.2",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=VvLzNZLkSDcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=VvLzNZLkSDcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=VvLzNZLkSDcC&printsec=frontcover&dq=flowers&hl=&cd=67&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=VvLzNZLkSDcC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Among_Flowers.html?hl=&id=VvLzNZLkSDcC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Among_Flowers-sample-epub.acsm?id=VvLzNZLkSDcC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=VvLzNZLkSDcC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "From the Trade Paperback edition."
    }
    },
    {
    "kind": "books#volume",
    "id": "i_5C8VB5vNoC",
    "etag": "My/3lJVdcEM",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/i_5C8VB5vNoC",
    "volumeInfo": {
    "title": "For the Love of Nature",
    "subtitle": "E.E. Gostelow's Birds & Flowers",
    "authors": [
    "Christobel Mattingley"
    ],
    "publisher": "National Library Australia",
    "publishedDate": "2010",
    "description": "Ebenezer Edward Gostelow (1866-1944) began his 50-year-long teaching career at the age of 15. He was a keen naturalist and took every opportunity to study the local plants and birds. Gostelow would liven up his blackboards with captivating chalk drawings of birds and flowers. Gostelow's watercolours of the local flora are detailed and delicate. Many depict in minute detail the buds, flowers (often in cross-section), leaves and seeds. On each painting he has recorded common and scientific names, and places and dates of collection. He had an eye for composition, arranging the items in the painting exquisitely. For the Love of Nature presents a short biography, followed by a portfolio section of more than 80 images of birds and flowers.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780642276964"
    },
    {
    "type": "ISBN_10",
    "identifier": "064227696X"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 158,
    "printType": "BOOK",
    "categories": [
    "Artists"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.2.0.preview.3",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=i_5C8VB5vNoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=i_5C8VB5vNoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=i_5C8VB5vNoC&pg=PP1&dq=flowers&hl=&cd=68&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=i_5C8VB5vNoC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/For_the_Love_of_Nature.html?hl=&id=i_5C8VB5vNoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/For_the_Love_of_Nature-sample-epub.acsm?id=i_5C8VB5vNoC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=i_5C8VB5vNoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "He had an eye for composition, arranging the items in the painting exquisitely. For the Love of Nature presents a short biography, followed by a portfolio section of more than 80 images of birds and flowers."
    }
    },
    {
    "kind": "books#volume",
    "id": "PcrwAAAAMAAJ",
    "etag": "lltQjNMqnFg",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/PcrwAAAAMAAJ",
    "volumeInfo": {
    "title": "Familiar flowers of field and garden",
    "authors": [
    "Ferdinand Schuyler Mathews"
    ],
    "publishedDate": "1915",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "UOM:39015004592625"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 308,
    "printType": "BOOK",
    "categories": [
    "Botany"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "full-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=PcrwAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=PcrwAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=PcrwAAAAMAAJ&printsec=frontcover&dq=flowers&hl=&cd=69&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=PcrwAAAAMAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-PcrwAAAAMAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=PcrwAAAAMAAJ&rdid=book-PcrwAAAAMAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/Familiar_flowers_of_field_and_garden.pdf?id=PcrwAAAAMAAJ&hl=&output=pdf&sig=ACfU3U2c8C6LqDKuQ78_dB5v0oCCT-nIEw&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=PcrwAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "KN5TUmGSPaoC",
    "etag": "UYY/AHMcObQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/KN5TUmGSPaoC",
    "volumeInfo": {
    "title": "Making Bead Flowers and Bouquets",
    "authors": [
    "Virginia Nathanson"
    ],
    "publisher": "Courier Corporation",
    "publishedDate": "2011-11",
    "description": "Step-by-step instructions and scores of illustrations show aspiring beadworkers how to assemble more than 50 botanically accurate specimens of African violets, hyacinths, sunflowers, miniature versions of irises, jonquils, tea roses, and many other glittering beauties. Also, helpful suggestions for creating table decorations, attractive bouquets, and festive Christmas ornaments.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0486422461"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780486422466"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 192,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.1.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=KN5TUmGSPaoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=KN5TUmGSPaoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=KN5TUmGSPaoC&printsec=frontcover&dq=flowers&hl=&cd=70&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=KN5TUmGSPaoC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Making_Bead_Flowers_and_Bouquets.html?hl=&id=KN5TUmGSPaoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=KN5TUmGSPaoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Step-by-step instructions and scores of illustrations show aspiring beadworkers how to assemble more than 50 botanically accurate specimens of African violets, hyacinths, sunflowers, miniature versions of irises, jonquils, tea roses, and ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "Qvw2AgAAQBAJ",
    "etag": "OnpoFp+R8Vo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Qvw2AgAAQBAJ",
    "volumeInfo": {
    "title": "Bulletproof Flowers for the South",
    "authors": [
    "Jim Wilson"
    ],
    "publisher": "Taylor Trade Publishing",
    "publishedDate": "1999-10-01",
    "description": "Bulletproof Flowers for the South illustrates how to plant, grow, and care for a large variety of hardy Southern flowers. Including an A-Z encyclopedia of Southern favorites and twenty comprehensive lists of favorite flowers from expert nurseries around the South, this beautifully illustrated book presents superior long-blooming, heat-resistant flowers.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781461708551"
    },
    {
    "type": "ISBN_10",
    "identifier": "1461708559"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 192,
    "printType": "BOOK",
    "categories": [
    "Gardening"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.2.1.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=Qvw2AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Qvw2AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Qvw2AgAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=71&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=Qvw2AgAAQBAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-Qvw2AgAAQBAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 31.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 17.27,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=Qvw2AgAAQBAJ&rdid=book-Qvw2AgAAQBAJ&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 31990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 17270000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Bulletproof_Flowers_for_the_South-sample-epub.acsm?id=Qvw2AgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Bulletproof_Flowers_for_the_South-sample-pdf.acsm?id=Qvw2AgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=Qvw2AgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "The former co-host of the PBS show The Victory Garden illustrates how to plant, grow, and care for a variety of heat-resistant Southern flowers."
    }
    },
    {
    "kind": "books#volume",
    "id": "AiI-XwAACAAJ",
    "etag": "vMk1XdHAdVE",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/AiI-XwAACAAJ",
    "volumeInfo": {
    "title": "Quilled Flowers",
    "subtitle": "A Garden of 35 Paper Projects",
    "authors": [
    "Alli Bartkowski"
    ],
    "publisher": "Lark Books",
    "publishedDate": "2012",
    "description": "\"Roll, mold, and shape colorful strips of paper into a bevy of petals, blooms, and bouquets for all occasions\"--P. [4] of cover.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "145470120X"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781454701200"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 128,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=AiI-XwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=AiI-XwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=AiI-XwAACAAJ&dq=flowers&hl=&cd=72&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=AiI-XwAACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Quilled_Flowers.html?hl=&id=AiI-XwAACAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=AiI-XwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "&quot;Roll, mold, and shape colorful strips of paper into a bevy of petals, blooms, and bouquets for all occasions&quot;--P. [4] of cover."
    }
    },
    {
    "kind": "books#volume",
    "id": "bIT4aGgoXwQC",
    "etag": "u5TNEp790oM",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/bIT4aGgoXwQC",
    "volumeInfo": {
    "title": "Throwed Away",
    "subtitle": "Failures of Progress in Eastern North Carolina",
    "authors": [
    "Linda Flowers"
    ],
    "publisher": "Univ. of Tennessee Press",
    "publishedDate": "1992-08",
    "description": "Flowers (English, North Carolina Wesleyan College) is not a sociologist, demographer, or historian. She is guided by personal memory and experience, reading and conversations, in this insightful study of the demise of tenant farming and the failures of industrialization in the rural South since 1960. Annotation copyrighted by Book News, Inc., Portland, OR",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0870497677"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780870497674"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 241,
    "printType": "BOOK",
    "categories": [
    "History"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=bIT4aGgoXwQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=bIT4aGgoXwQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=bIT4aGgoXwQC&printsec=frontcover&dq=flowers&hl=&cd=73&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=bIT4aGgoXwQC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Throwed_Away.html?hl=&id=bIT4aGgoXwQC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=bIT4aGgoXwQC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Flowers (English, North Carolina Wesleyan College) is not a sociologist, demographer, or historian."
    }
    },
    {
    "kind": "books#volume",
    "id": "uD59CgAAQBAJ",
    "etag": "GOuW1Q+8kDY",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/uD59CgAAQBAJ",
    "volumeInfo": {
    "title": "Myths and Legends of Flowers, Trees, Fruits and Plants",
    "authors": [
    "Charles M. Skinner"
    ],
    "publisher": "Read Books Ltd",
    "publishedDate": "2013-04-16",
    "description": "Originally published in 1911, this early work by Charles M. Skinner is both expensive and hard to find in its first edition. It delves deep into the mythology of the natural world and uncovers legends of times long forgotton. This is a fascinating work and highly recommended for all folklore enthusiasts. Many of the earliest books, particularly those dating back to the 1900s and before, are now extremely scarce. We are republishing these classic works in affordable, high quality, modern editions, using the original text and artwork.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781447497790"
    },
    {
    "type": "ISBN_10",
    "identifier": "1447497791"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 310,
    "printType": "BOOK",
    "categories": [
    "Nature"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.2.1.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=uD59CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=uD59CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=uD59CgAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=74&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=uD59CgAAQBAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-uD59CgAAQBAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FOR_SALE",
    "isEbook": true,
    "listPrice": {
    "amount": 7.99,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amount": 6.15,
    "currencyCode": "USD"
    },
    "buyLink": "https://play.google.com/store/books/details?id=uD59CgAAQBAJ&rdid=book-uD59CgAAQBAJ&rdot=1&source=gbs_api",
    "offers": [
    {
    "finskyOfferType": 1,
    "listPrice": {
    "amountInMicros": 7990000,
    "currencyCode": "USD"
    },
    "retailPrice": {
    "amountInMicros": 6150000,
    "currencyCode": "USD"
    },
    "giftable": true
    }
    ]
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Myths_and_Legends_of_Flowers_Trees_Fruit-sample-epub.acsm?id=uD59CgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Myths_and_Legends_of_Flowers_Trees_Fruit-sample-pdf.acsm?id=uD59CgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=uD59CgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "This is a fascinating work and highly recommended for all folklore enthusiasts. Many of the earliest books, particularly those dating back to the 1900s and before, are now extremely scarce."
    }
    },
    {
    "kind": "books#volume",
    "id": "wMNfLwEACAAJ",
    "etag": "B9GmxWbkfgw",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/wMNfLwEACAAJ",
    "volumeInfo": {
    "title": "Slow Flowers",
    "subtitle": "Four Seasons of Locally Grown Bouquets from the Garden, Meadow and Farm",
    "authors": [
    "Debra Prinzing"
    ],
    "publisher": "St Lynns Press",
    "publishedDate": "2013-02-01",
    "description": "Arranged by seasons, describes how to create fifty-two bouquets using only locally sources materials.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0983272689"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780983272687"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 143,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=wMNfLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=wMNfLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=wMNfLwEACAAJ&dq=flowers&hl=&cd=75&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=wMNfLwEACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Slow_Flowers.html?hl=&id=wMNfLwEACAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=wMNfLwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "In this lushly photographed book, the DIY floral designer will find expert tips, bouquet recipes, eco-friendly arranging techniques... and a comprehensive index with climate zone information for each botanical ingredient."
    }
    },
    {
    "kind": "books#volume",
    "id": "QFTRFnQ55qoC",
    "etag": "fO0eJ9skYX8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/QFTRFnQ55qoC",
    "volumeInfo": {
    "title": "Flowers Of Wisdom",
    "authors": [
    "P.C. Babu"
    ],
    "publisher": "Discovery Publishing House",
    "publishedDate": "2003-01-01",
    "description": "Wisdom is flowering from every nook and corner of the world and it is guiding the human race in progressing ahead with all successes. The wisdom of Nagarjuna, Aarya, Confucius, Lao Tzu, Muhammad, Laotse, Zoroaster, Talmud, Solomon, Buddha, Basavanna, Guru Nanak, Thiru Kural, Vemana, Asia, Jainism, Mahabharata etc., are explained in detail in this book. The book on the wisdom of the whole world will make the mankind memorable.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "8171416950"
    },
    {
    "type": "ISBN_13",
    "identifier": "9788171416950"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 350,
    "printType": "BOOK",
    "categories": [
    "Conduct of life"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.0.1.0.preview.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=QFTRFnQ55qoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=QFTRFnQ55qoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=QFTRFnQ55qoC&printsec=frontcover&dq=flowers&hl=&cd=76&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=QFTRFnQ55qoC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_Of_Wisdom.html?hl=&id=QFTRFnQ55qoC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=QFTRFnQ55qoC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "The wisdom of Nagarjuna, Aarya, Confucius, Lao Tzu, Muhammad, Laotse, Zoroaster, Talmud, Solomon, Buddha, Basavanna, Guru Nanak, Thiru Kural, Vemana, Asia, Jainism, Mahabharata etc., are explained in detail in this book."
    }
    },
    {
    "kind": "books#volume",
    "id": "Zf4YAAAAYAAJ",
    "etag": "bbrvmLrej5U",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/Zf4YAAAAYAAJ",
    "volumeInfo": {
    "title": "Passion-flowers",
    "authors": [
    "Julia Ward Howe"
    ],
    "publishedDate": "1854",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "HARVARD:RSL1N1"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 186,
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.1.0.full.1",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=Zf4YAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Zf4YAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Zf4YAAAAYAAJ&pg=PP1&dq=flowers&hl=&cd=77&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=Zf4YAAAAYAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-Zf4YAAAAYAAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "FREE",
    "isEbook": true,
    "buyLink": "https://play.google.com/store/books/details?id=Zf4YAAAAYAAJ&rdid=book-Zf4YAAAAYAAJ&rdot=1&source=gbs_api"
    },
    "accessInfo": {
    "country": "US",
    "viewability": "ALL_PAGES",
    "embeddable": true,
    "publicDomain": true,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false,
    "downloadLink": "http://books.google.com/books/download/Passion_flowers.epub?id=Zf4YAAAAYAAJ&hl=&output=epub&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "downloadLink": "http://books.google.com/books/download/Passion_flowers.pdf?id=Zf4YAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0Fpbt2qR3BamqSgDrOQaJ_6auy2w&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=Zf4YAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "aQiVs5il1osC",
    "etag": "BcH9G6oyKjo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/aQiVs5il1osC",
    "volumeInfo": {
    "title": "The Book of Dried Flowers",
    "subtitle": "A Complete Guide to Growing, Drying and Arranging",
    "authors": [
    "Malcolm Hillier",
    "Colin Hilton"
    ],
    "publisher": "Simon and Schuster",
    "publishedDate": "1986",
    "description": "This is the most practical and most beautiful book ever produced on the subject. It contains a complete guide to the techniques of drying and arranging flowers--and also gives advice on how to grow flowers in the garden for drying.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780671619398"
    },
    {
    "type": "ISBN_10",
    "identifier": "067161939X"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 192,
    "printType": "BOOK",
    "categories": [
    "Crafts & Hobbies"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=aQiVs5il1osC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=aQiVs5il1osC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=aQiVs5il1osC&printsec=frontcover&dq=flowers&hl=&cd=78&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=aQiVs5il1osC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Book_of_Dried_Flowers.html?hl=&id=aQiVs5il1osC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=aQiVs5il1osC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "This is the most practical and most beautiful book ever produced on the subject. It contains a complete guide to the techniques of drying and arranging flowers--and also gives advice on how to grow flowers in the garden for drying."
    }
    },
    {
    "kind": "books#volume",
    "id": "-LcrCgAAQBAJ",
    "etag": "0PiOeZWDy54",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/-LcrCgAAQBAJ",
    "volumeInfo": {
    "title": "The Reason for Flowers",
    "subtitle": "Their History, Culture, Biology, and How They Change Our Lives",
    "authors": [
    "Stephen Buchmann"
    ],
    "publisher": "Simon and Schuster",
    "publishedDate": "2015-07-21",
    "description": "Cultural history at its best—the engaging, lively, and definitive story of the beauty, sexuality, ecology, myths, lore, and economics of the world’s flowers, written by a passionately devoted author and scientist, and illustrated with his stunning photographs. Flowers, and the fruits that follow, feed, clothe, sustain, and inspire all humanity. They have done so since before recorded history. Flowers are used to celebrate all-important occasions, to express love, and are also the basis of global industries. Americans buy ten million flowers a day and perfumes are a worldwide industry worth $30 billion dollars annually. Yet, we know little about flowers, their origins, bizarre sex lives, or how humans relate and depend upon them. Stephen Buchmann takes us along on an exploratory journey of the roles flowers play in the production of our foods, spices, medicines, perfumes, while simultaneously bringing joy and health. Flowering plants continue to serve as inspiration in our myths and legends, in the fine and decorative arts, and in literary works of prose and poetry. Flowers seduce us—and animals, too—through their myriad shapes, colors, textures, and scents. And because of our extraordinary appetite for more unusual and beautiful “super flowers,” plant breeders have created such unnatural blooms as blue roses and black petunias to cater to the human world of haute couture fashion. In so doing, the nectar and pollen vital to the bees, butterflies, and bats of the world, are being reduced. Buchmann explains the unfortunate consequences, and explores how to counter them by growing the right flowers. Here, he integrates fascinating stories about the many colorful personalities who populate the world of flowers, and the flowers and pollinators themselves, with a research-based narrative that illuminates just why there is, indeed, a Reason for Flowers.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781476755526"
    },
    {
    "type": "ISBN_10",
    "identifier": "1476755523"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 352,
    "printType": "BOOK",
    "categories": [
    "History"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=-LcrCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=-LcrCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=-LcrCgAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=79&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=-LcrCgAAQBAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Reason_for_Flowers.html?hl=&id=-LcrCgAAQBAJ"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=-LcrCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "An exploration of the roles flowers play in the production of our foods, spices, medicines, and perfumes reveals their origins, myriad shapes, colors, textures and scents, bizarre sex lives, and how humans-- and the natural world-- relate ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "B81USoplwkAC",
    "etag": "bb4TKzuApCg",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/B81USoplwkAC",
    "volumeInfo": {
    "title": "Flowers in Salt",
    "subtitle": "The Beginnings of Feminist Consciousness in Modern Japan",
    "authors": [
    "Sharon L. Sievers"
    ],
    "publisher": "Stanford University Press",
    "publishedDate": "1983",
    "description": "\"This carefully researched and original monograph describes the lives and thoughts of a series of women who sought fairer economic, social and political roles for women during Japan's first half-century of modernization...It is of interest not only to students of feminism but also to anyone who wishes to understand modern Japan.\" [Choice].",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "0804713820"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780804713825"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 240,
    "printType": "BOOK",
    "categories": [
    "Social Science"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.0.0.0.preview.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=B81USoplwkAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=B81USoplwkAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=B81USoplwkAC&printsec=frontcover&dq=flowers&hl=&cd=80&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=B81USoplwkAC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_in_Salt.html?hl=&id=B81USoplwkAC"
    },
    "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=B81USoplwkAC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "&quot;This carefully researched and original monograph describes the lives and thoughts of a series of women who sought fairer economic, social and political roles for women during Japan&#39;s first half-century of modernization."
    }
    }
    ]
    }