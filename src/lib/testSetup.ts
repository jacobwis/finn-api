import * as Joon from "joon";
import { User } from "../models";

export const setupTestDB = async () => {
  const joon = await Joon.createInstance("test", true);
  await joon.reset();
  await joon.up();
  await joon.end();
  await seedUsers();
};

export const seedUsers = async () => {
  const mockUsers = [
    {
      name: "Pavia Berceros",
      username: "pberceros0",
      emailAddress: "pberceros0@va.gov",
      password: "dbnGtkg"
    },
    {
      name: "Celestyna Clinch",
      username: "cclinch1",
      emailAddress: "cclinch1@prweb.com",
      password: "ycI93A7m"
    },
    {
      name: "Haily Winkett",
      username: "hwinkett2",
      emailAddress: "hwinkett2@nbcnews.com",
      password: "YHUPfCRL0ce"
    },
    {
      name: "Zacharias Sworne",
      username: "zsworne3",
      emailAddress: "zsworne3@discuz.net",
      password: "mWuCsRVB"
    },
    {
      name: "Josephina Pervoe",
      username: "jpervoe4",
      emailAddress: "jpervoe4@yale.edu",
      password: "wbYsVFTni"
    },
    {
      name: "Terri-jo Bransdon",
      username: "tbransdon5",
      emailAddress: "tbransdon5@ocn.ne.jp",
      password: "ag7fXYw"
    },
    {
      name: "Dallas Tebbitt",
      username: "dtebbitt6",
      emailAddress: "dtebbitt6@studiopress.com",
      password: "AgczD9jIT"
    },
    {
      name: "Jenda Zavittieri",
      username: "jzavittieri7",
      emailAddress: "jzavittieri7@newsvine.com",
      password: "IYiy1yC"
    },
    {
      name: "Josephine Doody",
      username: "jdoody8",
      emailAddress: "jdoody8@github.io",
      password: "31X9SX"
    },
    {
      name: "Malvina Tatton",
      username: "mtatton9",
      emailAddress: "mtatton9@sourceforge.net",
      password: "eSvc2ieZR"
    },
    {
      name: "Say Sheward",
      username: "sshewarda",
      emailAddress: "sshewarda@cdc.gov",
      password: "y3VV01RRck3"
    },
    {
      name: "Peria Woolpert",
      username: "pwoolpertb",
      emailAddress: "pwoolpertb@ed.gov",
      password: "2edOVD0"
    },
    {
      name: "Barny Juares",
      username: "bjuaresc",
      emailAddress: "bjuaresc@drupal.org",
      password: "8gNVDB"
    },
    {
      name: "Hughie McEneny",
      username: "hmcenenyd",
      emailAddress: "hmcenenyd@360.cn",
      password: "jDIvA8"
    },
    {
      name: "Glori Casaletto",
      username: "gcasalettoe",
      emailAddress: "gcasalettoe@irs.gov",
      password: "mgG7oRqGQh"
    },
    {
      name: "Arlene Duly",
      username: "adulyf",
      emailAddress: "adulyf@elegantthemes.com",
      password: "CzTK81"
    },
    {
      name: "Blondie Saura",
      username: "bsaurag",
      emailAddress: "bsaurag@booking.com",
      password: "Qm2L7rm9nT"
    },
    {
      name: "Maggie Wassell",
      username: "mwassellh",
      emailAddress: "mwassellh@behance.net",
      password: "wRnUD2TFl"
    },
    {
      name: "Zebulen felip",
      username: "zfelipi",
      emailAddress: "zfelipi@acquirethisname.com",
      password: "PPh1Oo2Ts"
    },
    {
      name: "Jayson Ralton",
      username: "jraltonj",
      emailAddress: "jraltonj@clickbank.net",
      password: "LPchY7s"
    }
  ];

  for (const user of mockUsers) {
    await User.create(user);
  }
};
