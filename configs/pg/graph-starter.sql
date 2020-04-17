-- -------------------------------------------------------------
-- TablePlus 3.3.0(300)
--
-- https://tableplus.com/
--
-- Database: graphql-starter
-- Generation Time: 2020-04-17 10:10:53.2410
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Book_id_seq";

-- Table Definition
CREATE TABLE "public"."Book" (
    "id" int4 NOT NULL DEFAULT nextval('"Book_id_seq"'::regclass),
    "libraryId" int8 NOT NULL,
    "name" varchar NOT NULL,
    "year" varchar NOT NULL,
    "createdAt" timestamp NOT NULL,
    "updatedAt" timestamp NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Library_id_seq";

-- Table Definition
CREATE TABLE "public"."Library" (
    "id" int4 NOT NULL DEFAULT nextval('"Library_id_seq"'::regclass),
    "name" varchar NOT NULL,
    "createdAt" timestamp NOT NULL,
    "updatedAt" timestamp NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Book" ("id", "libraryId", "name", "year", "createdAt", "updatedAt") VALUES
('1', '1', 'Clean Code', '2008', '2020-04-16 00:00:00', '2020-04-16 00:00:00'),
('2', '1', 'The Clean Coder', '2011', '2020-04-16 00:00:00', '2020-04-16 00:00:00'),
('3', '2', 'Learn Javascript Visually', '2014', '2020-04-16 00:00:00', '2020-04-16 00:00:00'),
('4', '2', 'R Programming', '2019', '2020-04-16 00:00:00', '2020-04-16 00:00:00');

INSERT INTO "public"."Library" ("id", "name", "createdAt", "updatedAt") VALUES
('1', 'San Francisco', '2020-04-16 11:45:11.895', '2020-04-16 11:45:11.895'),
('2', 'Los Angeles', '2020-04-16 11:45:11.895', '2020-04-16 11:45:11.895');

ALTER TABLE "public"."Book" ADD FOREIGN KEY ("libraryId") REFERENCES "public"."Library"("id") ON DELETE CASCADE ON UPDATE CASCADE;
