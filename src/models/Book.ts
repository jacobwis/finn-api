import { Volume, findByID, SearchOptions, search } from "../lib/GoogleBooks";

export class Book {
  public static async findByID(id: string) {
    const volume = await findByID(id);

    return Book.fromVolume(volume);
  }

  public static fromVolume(volume: Volume) {
    return new Book({
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors,
      publisher: volume.volumeInfo.publisher,
      description: volume.volumeInfo.description,
      covers: volume.volumeInfo.imageLinks
    });
  }

  public static async search(keyword: string, options: SearchOptions) {
    const results = await search(keyword, options);

    return results.items.map(item => Book.fromVolume(item));
  }

  public id: string;
  public title: string;
  public authors: string[];
  public publisher: string;
  public description: string;
  public covers: {
    [key: string]: string;
  };

  public constructor(params: Partial<Book>) {
    this.id = params.id;
    this.title = params.title;
    this.authors = params.authors;
    this.publisher = params.publisher;
    this.description = params.description;
    this.covers = params.covers;
  }

  public async isOnList() {
    return false;
  }
}
