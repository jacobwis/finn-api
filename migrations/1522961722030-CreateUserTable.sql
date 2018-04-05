/* UP */
create table users(
  "id" serial primary key,
  "name" varchar,
  "username" varchar,
  "photoURL" varchar,
  "twitterID" varchar
);
/* DOWN */
drop table users;
