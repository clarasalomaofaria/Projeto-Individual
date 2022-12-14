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
	FOREIGN KEY (fk_valores_quiz) REFERENCES valores_quiz (id), 
    UNIQUE INDEX votoUnico (fk_usuario, fk_valores_quiz)
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
(2, 'Nunca mais ouvir música ao vivo'),
(2, 'Nunca mais ouvir música gravada'),
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
(9, 'Personalidade incrível'),
(9, 'Beleza extraordinaria'),
(10, 'Dormir 15 horas'),
(10, 'Dormir 3 horas'),
(11, 'Pular 5 anos da sua vida'),
(11, 'Voltar 5 anos da sua vida'),
(12, 'Famoso nessa vida'),
(12, 'Eternamente famoso após sua morte');

CREATE TABLE highscore (
id INT PRIMARY KEY AUTO_INCREMENT,
score INT,
dt DATETIME DEFAULT CURRENT_TIMESTAMP,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
  
INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(1,11),
(1,12),
(1,13),
(1,14),
(1,15),
(1,16),
(1,17),
(1,18),
(1,19),
(1,20),
(1,21),
(1,22),
(1,23),
(1,24);

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
