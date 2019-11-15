USE ReviewDB;

CREATE TABLE notebooks (
  id int auto_increment not null primary key,
  person varchar(255),
  thing varchar(255)
);

/* run this file by running the command `mysql -u root -p < schema.sql` */