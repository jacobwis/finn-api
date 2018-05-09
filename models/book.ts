import { URL } from "url";
import * as gb from "../utils/googleBooks";
import { SearchOptions, Volume } from "../utils/googleBooks";

function formatCoverURL(original: string) {
  if (original) {
    const url = new URL(original);
    url.searchParams.delete("edge");
    return url.toString();
  }
}

class Book {
  public static async findByCategory(
    category: string,
    options?: SearchOptions
  ) {
    const results = await gb.getVolumesByCategory(category, options);
    if (results.items) {
      return results.items.map(volume => Book.fromVolume(volume));
    }
  }

  public static async findByID(id: string) {
    const volume = await gb.getVolumeByID(id);
    return Book.fromVolume(volume);
  }

  public static fromVolume(volume: Volume) {
    return {
      id: volume.id,
      title: volume.volumeInfo.title || "",
      subtitle: volume.volumeInfo.subtitle,
      authors: volume.volumeInfo.authors,
      description: volume.volumeInfo.description,
      publisher: volume.volumeInfo.publisher,
      categories: volume.volumeInfo.categories,
      covers: {
        thumbnail: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.thumbnail)
          : null,
        small: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.small)
          : null,
        medium: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.medium)
          : null,
        large: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.large)
          : null,
        smallThumbnail: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.smallThumbnail)
          : null,
        extraLarge: volume.volumeInfo.imageLinks
          ? formatCoverURL(volume.volumeInfo.imageLinks.extraLarge)
          : null
      }
    };
  }

  public static async search(query: string, options?: SearchOptions) {
    const results = await gb.search(query, options);

    return results.items.map(item => Book.fromVolume(item));
  }

  public id: string;
  public title: string;
  public subtitle: string;
  public authors: string[];
  public description: string;
  public publisher: string;
  public categories: string[];
  public covers: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    smallThumbnail: string;
    extraLarge: string;
  };
}

export default Book;
