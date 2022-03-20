/*USER TABLE*/

CREATE TABLE public.users (
    "_id" serial NOT NULL,
    "username" varchar NOT NULL, 
    "password" varchar NOT NULL,
    "name" varchar NOT NULL, 
    "phone" varchar NOT NULL,
    "em1_name" varchar,
    "em1_phone" varchar,
    "em2_name" varchar,
    "em2_phone" varchar,
    "em3_name" varchar,
    "em3_phone" varchar
);

/* em = emergency contacts */