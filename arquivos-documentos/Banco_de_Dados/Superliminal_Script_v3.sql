
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
FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);

CREATE TABLE votacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(500)
);

CREATE TABLE votacao_has_voto (
fk_votacao INT,
fk_voto INT,
FOREIGN KEY (fk_votacao) REFERENCES votacao (id),
FOREIGN KEY (fk_voto) REFERENCES voto (id),
PRIMARY KEY (fk_votacao, fk_voto)
);


