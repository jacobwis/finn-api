import { URL } from "url";
import * as gb from "../utils/googleBooks";
import { Volume } from "../utils/googleBooks";

interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  categories: string[];
  covers: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    smallThumbnail: string;
    extraLarge: string;
  };
}

export async function getBookByID(id: string) {
  const volume = await gb.getVolumeByID(id);
  const book = bookFromVolume(volume);
  return book;
}

export const bookFromVolume = (volume: Volume): Book => ({
  id: volume.id,
  title: volume.volumeInfo.title || "",
  subtitle: volume.volumeInfo.subtitle,
  authors: volume.volumeInfo.authors,
  publisher: volume.volumeInfo.publisher,
  categories: volume.volumeInfo.categories,
  covers: {
    thumbnail: formatCoverURL(volume.volumeInfo.imageLinks.thumbnail),
    small: formatCoverURL(volume.volumeInfo.imageLinks.small),
    medium: formatCoverURL(volume.volumeInfo.imageLinks.medium),
    large: formatCoverURL(volume.volumeInfo.imageLinks.large),
    smallThumbnail: formatCoverURL(volume.volumeInfo.imageLinks.smallThumbnail),
    extraLarge: formatCoverURL(volume.volumeInfo.imageLinks.extraLarge)
  }
});

function formatCoverURL(original: string) {
  if (original) {
    const url = new URL(original);
    url.searchParams.delete("edge");
    return url.toString();
  }
}
