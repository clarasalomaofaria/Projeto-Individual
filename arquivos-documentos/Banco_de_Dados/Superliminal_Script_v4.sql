
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
	titulo VARCHAR(100),
	descricao VARCHAR(500),
    tipo VARCHAR(50),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);

CREATE TABLE voto (
	id INT PRIMARY KEY AUTO_INCREMENT,
	valor VARCHAR(45),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE votacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(500),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP
);





