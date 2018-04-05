import * as Joon from "joon";
import * as db from "../models/db";

const setupTestDB = async () => {
  const joon = await Joon.createInstance("test", true);
  await joon.reset();
  await joon.up();
  await joon.end();
  mockUsers.forEach(async u => {
    await db.any(
      'INSERT INTO users("name", "username", "photoURL", "twitterID") VALUES($1, $2, $3, $4)',
      [u.name, u.username, u.photoURL, u.twitterID]
    );
  });
};

export default setupTestDB;

export const mockUsers = [
  {
    name: "Talya Goadbie",
    username: "tgoadbie0",
    photoURL: "http://dummyimage.com/212x221.png/cc0000/ffffff",
    twitterID: "7179c0a3-8995-4415-bd05-3b3c717fcbae"
  },
  {
    name: "Holly Pheasant",
    username: "hpheasant1",
    photoURL: "http://dummyimage.com/181x114.bmp/ff4444/ffffff",
    twitterID: "91845fa8-68d1-416a-a3d5-492fbba8aa68"
  },
  {
    name: "Tasha Flynn",
    username: "tflynn2",
    photoURL: "http://dummyimage.com/214x147.jpg/cc0000/ffffff",
    twitterID: "aec0a6da-95e1-4dae-bc77-d07ba6874536"
  },
  {
    name: "Kipp Lambird",
    username: "klambird3",
    photoURL: "http://dummyimage.com/197x222.png/ff4444/ffffff",
    twitterID: "feb139d5-761e-4c85-ab3f-17057e3d7770"
  },
  {
    name: "Jana Gibbons",
    username: "jgibbons4",
    photoURL: "http://dummyimage.com/170x234.bmp/5fa2dd/ffffff",
    twitterID: "834a623b-7a9f-418e-9256-2fe1aee8b989"
  },
  {
    name: "Piotr Skym",
    username: "pskym5",
    photoURL: "http://dummyimage.com/162x212.png/ff4444/ffffff",
    twitterID: "8edb9f90-f7c3-4a7b-bfc8-38f42b611280"
  },
  {
    name: "Avrom Norrington",
    username: "anorrington6",
    photoURL: "http://dummyimage.com/116x241.jpg/5fa2dd/ffffff",
    twitterID: "49f9d475-e2e1-41b2-a071-065a389a2e3f"
  },
  {
    name: "Bel Constantine",
    username: "bconstantine7",
    photoURL: "http://dummyimage.com/159x101.png/5fa2dd/ffffff",
    twitterID: "98a0ffcc-e0f4-4c15-b0e3-39e822f5891e"
  },
  {
    name: "Alvira Vaudre",
    username: "avaudre8",
    photoURL: "http://dummyimage.com/153x147.bmp/5fa2dd/ffffff",
    twitterID: "daf8dde0-6d3d-4f69-b850-fd4d2c54510a"
  },
  {
    name: "Loren Winship",
    username: "lwinship9",
    photoURL: "http://dummyimage.com/177x132.jpg/5fa2dd/ffffff",
    twitterID: "bc15755d-f432-471b-8cb8-8b69774f4d60"
  },
  {
    name: "Adriano Assender",
    username: "aassendera",
    photoURL: "http://dummyimage.com/115x195.png/cc0000/ffffff",
    twitterID: "4bc86ac5-3c9d-4e22-a9e6-9f964c2be7e8"
  },
  {
    name: "Kaye Spur",
    username: "kspurb",
    photoURL: "http://dummyimage.com/216x162.bmp/cc0000/ffffff",
    twitterID: "ca58dce5-7564-4faa-aeef-4aabd59a5ff5"
  },
  {
    name: "Jody Ziehm",
    username: "jziehmc",
    photoURL: "http://dummyimage.com/219x250.bmp/5fa2dd/ffffff",
    twitterID: "b0d05f95-3e1c-4520-bb92-fd5dac0b94f7"
  },
  {
    name: "Lavena O'Scannill",
    username: "loscannilld",
    photoURL: "http://dummyimage.com/175x221.jpg/5fa2dd/ffffff",
    twitterID: "5eb9f702-895e-414a-856a-f3007c4f9ca2"
  },
  {
    name: "Conroy Stradling",
    username: "cstradlinge",
    photoURL: "http://dummyimage.com/243x134.png/ff4444/ffffff",
    twitterID: "cfdc4e74-d3b0-47b5-a22f-9acd5753dfe8"
  }
];
