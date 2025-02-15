drop database if exists db_api;
create database db_api;
use db_api;
create table productos (id int primary key auto_increment, nombre varchar(250), sku varchar(12) unique, isDeleted boolean default false, createdAt datetime default current_timestamp, deletedAt datetime default null);
INSERT INTO productos (nombre, sku) VALUES
('Laptop Lenovo', 'LEN123456789'),
('Smartphone Samsung', 'SAM987654321'),
('Teclado Mecánico', 'TEC000111222'),
('Mouse Inalámbrico', 'MOU123321987'),
('Monitor Curvo', 'MON123987456'),
('Auriculares Sony', 'AUR456789321'),
('Cámara Web Logitech', 'CAM654321987'),
('Disco Duro Externo', 'DIS987654123'),
('Memoria RAM Kingston', 'RAM111222333'),
('Router TP-Link', 'ROU987654321'),
('Tarjeta Gráfica NVIDIA', 'TAR222333444'),
('CPU AMD Ryzen', 'CPU555666777'),
('Impresora HP', 'IMP888999000'),
('Silla Ergonómica', 'SIL333444555'),
('Estabilizador Eléctrico', 'EST777888999');
