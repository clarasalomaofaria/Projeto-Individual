-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE superliminal;

USE superliminal;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(70),
	descricao VARCHAR(3000),
    tipo VARCHAR(50),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);

CREATE TABLE quiz (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
descricao VARCHAR(200),
dt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questoes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_quiz INT,
    FOREIGN KEY (fk_quiz) REFERENCES quiz (id)
);

CREATE TABLE valores_quiz (
	id INT AUTO_INCREMENT,
	fk_questoes INT,
    valor VARCHAR(100),
    FOREIGN KEY (fk_questoes) REFERENCES questoes (id),
    PRIMARY KEY (id, fk_questoes)
);

CREATE TABLE voto (
	id INT PRIMARY KEY AUTO_INCREMENT,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
    fk_valores_quiz INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
	FOREIGN KEY (fk_valores_quiz) REFERENCES valores_quiz (id) 
);

INSERT INTO quiz (titulo, descricao) VALUES
('Quiz de duas opções', 'Esse quiz dá ao usuário duas opções e o deixa escolher a opção preferida');

INSERT INTO questoes (titulo, fk_quiz) VALUES
('Questão 01', 1),
('Questão 02', 1),
('Questão 03', 1),
('Questão 04', 1),
('Questão 05', 1),
('Questão 06', 1),
('Questão 07', 1),
('Questão 08', 1),
('Questão 09', 1),
('Questão 10', 1),
('Questão 11', 1),
('Questão 12', 1);

INSERT INTO valores_quiz (fk_questoes, valor) VALUES
(1, 'Poder viajar ao passado'),
(1, 'Poder viajar ao futuro'),
(2, 'Música ao vivo'),
(2, 'Música gravada'),
(3, 'Ser rico em um trabalho que você odeia'),
(3, 'Não ter tanto dinheiro em um trabalho que você ama'),
(4, 'Morar na Antártica'),
(4, 'Morar no Sahara'),
(5, 'Verão'),
(5, 'Inverno'),
(6, 'Poder de teleportar'),
(6, 'Poder de ler mentes'),
(7, 'Melhor jogador do pior time'),
(7, 'Pior jogador do melhor time'),
(8, 'Famoso'),
(8, 'Rico'),
(9, 'Personalidade incrivel'),
(9, 'Beleza extraordinaria'),
(10, 'Dormir 15 horas'),
(10, 'Dormir 3 horas'),
(11, 'Pular 5 anos da sua vida'),
(11, 'Voltar 5 anos da sua vida'),
(12, 'Famoso nessa vida'),
(12, 'Eternamente famoso após sua morte');

-- CREATE DATABASE aquatech;

-- USE aquatech;

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );


-- /*
-- comando para sql server - banco remoto - ambiente de produção
-- */

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50),
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	descricao VARCHAR(300)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- CREATE TABLE medida (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
-- );

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
