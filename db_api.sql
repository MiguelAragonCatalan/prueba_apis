drop database if exists db_api;
create database db_api;
use db_api;
create table productos (id int primary key auto_increment, nombre varchar(250), sku varchar(12) unique, isDeleted boolean default false, createdAt datetime default current_timestamp, deletedAt datetime default null);
