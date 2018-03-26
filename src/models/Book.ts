import * as cache from "../lib/cache";
import { Volume, findByID } from "../lib/GoogleBooks";

export class Book {
  public static async findByID(id: string) {
    const CACHE_KEY = `BOOK:${id}`;

    const fromCache = await cache.get<Book>(CACHE_KEY);

    if (fromCache) {
      return fromCache;
    }

    const volume = await findByID(id);
    const book = Book.fromVolume(volume);

    cache.set(CACHE_KEY, book);

    return book;
  }

  public static fromVolume(volume: Volume) {
    return new Book({
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors,
      publisher: volume.volumeInfo.publisher,
      description: volume.volumeInfo.description
    });
  }

  public id: string;
  public title: string;
  public authors: string[];
  public publisher: string;
  public description: string;

  public constructor(params: Partial<Book>) {
    this.id = params.id;
    this.title = params.title;
    this.authors = params.authors;
    this.publisher = params.publisher;
    this.description = params.description;
  }
}
