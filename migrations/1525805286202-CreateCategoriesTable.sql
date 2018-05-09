/* UP */
CREATE TABLE "categories"(
  "id" varchar primary key,
  "name" varchar,
  "gb_name" varchar,
  "parent" varchar
);
/* DOWN */
DROP TABLE "categories";

