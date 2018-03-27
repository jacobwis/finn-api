/* UP */
create table users(
  "id" serial primary key,
  "name" varchar,
  "username" varchar,
  "emailAddress" varchar,
  "password" varchar
);
/* DOWN */
drop table users;
