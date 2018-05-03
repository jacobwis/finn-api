/* UP */
alter table "reading_list_items" add "hasRead" boolean DEFAULT false;
/* DOWN */
alter table "reading_list_items" drop "hasRead";

