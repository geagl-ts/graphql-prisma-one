CREATE TABLE IF NOT EXISTS "public"."Editorial" (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre TEXT
);


CREATE TABLE IF NOT EXISTS "public"."Libro" (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre VARCHAR(60),
  ade VARCHAR(4),
  "ideditorial" INTEGER NOT NULL,
  FOREIGN KEY ("ideditorial") REFERENCES "public"."Editorial"(id)
);

CREATE TABLE IF NOT EXISTS "public"."Autor" (
  id SERIAL PRIMARY KEY NOT NULL,
  nombre VARCHAR(60)
);

DROP TABLE IF EXISTS "public"."LibroAutor";
CREATE TABLE IF NOT EXISTS "public"."LibroAutor" (
  id SERIAL PRIMARY KEY NOT NULL,
  "idlibro" INTEGER NOT NULL,
  FOREIGN KEY ("idlibro") REFERENCES "public"."Libro"(id),
  "idautor" INTEGER NOT NULL,
  FOREIGN KEY ("idautor") REFERENCES "public"."Autor"(id)
);