/* UP */
create table "reading_list_items" (
  "id" serial primary key,
  "bookID" varchar,
  "userID" integer,
  "hasRead" boolean
);
/* DOWN */
drop table "reading_list_items";
