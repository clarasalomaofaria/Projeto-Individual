
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
    descricao VARCHAR(50),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_quiz INT,
    FOREIGN KEY (fk_quiz) REFERENCES quiz (id)
);

CREATE TABLE valores_quiz (
	fk_questoes INT,
    valor_1 VARCHAR(45),
    valor_2 VARCHAR(45),
    valor_3 VARCHAR(45),
    valor_4 VARCHAR(45),
    valor_5 VARCHAR(45),
    valor_6 VARCHAR(45),
	valor_7 VARCHAR(45),
	valor_8 VARCHAR(45),
	valor_9 VARCHAR(45),
	valor_10 VARCHAR(45),
    FOREIGN KEY (fk_questoes) REFERENCES questoes (id),
    PRIMARY KEY (fk_questoes)
);

CREATE TABLE voto (
	id INT PRIMARY KEY AUTO_INCREMENT,
	valor VARCHAR(45),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
    fk_questoes INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
	FOREIGN KEY (fk_questoes) REFERENCES questoes (id)
);







