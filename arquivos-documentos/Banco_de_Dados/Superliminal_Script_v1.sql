
CREATE DATABASE superliminal;

USE superliminal;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE postagem (
	idPostagem INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(500),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE voto (
idVoto INT PRIMARY KEY AUTO_INCREMENT,
valor VARCHAR(45),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE votacao (
	idVotacao INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(500)
);

CREATE TABLE votacao_has_voto (
fkVotacao INT,
fkVoto INT,
FOREIGN KEY (fkVotacao) REFERENCES votacao (idVotacao),
FOREIGN KEY (fkVoto) REFERENCES voto (idVoto),
PRIMARY KEY (fkVotacao, fkVoto)
);

drop database superliminal;

