CREATE TABLE  "toDoTable"(
"id" SERIAL PRIMARY KEY NOT NULL,
"task" varchar(250) NOT NULL,
"complete" BOOLEAN DEFAULT FALSE);





INSERT INTO "toDoTable" ("id","task","complete")
VALUES (2,'shower', 'true'),

(4,'family','true'),
(5,'water','true'),
(6,'computer','false');
