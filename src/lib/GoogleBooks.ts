import axios from "axios";

export interface Volume {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
}

export const search = (keyword: string) => {
  console.log(keyword);
};

export const findByID = async (id: string) => {
  const res = await axios.get<Volume>(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );
  return res.data;
};
