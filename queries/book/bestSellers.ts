import axios from "axios";
import * as Book from "../../models/book";
import * as nyt from "../../lib/nyt";
import * as gb from "../../utils/googleBooks";

const bestSellers = async () => {
  const nytResults = await nyt.getBestSellerList();

  let volumes = [];
  for (const result of nytResults.results) {
    const volume = await gb.getVolumeByTitle(result.book_details[0].title);
    if (volume) {
      volumes.push(volume);
    }
  }
  return volumes.map(volume => Book.bookFromVolume(volume));
};

export default bestSellers;
