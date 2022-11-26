
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
truncate table voto;
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 2 ;

INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES
(2,21);
select * from voto;

truncate table voto;

-- SELECT CASE WHEN fk_usuario = 1 AND fk_valores_quiz = 1 THEN btnClick1 = 1 ELSE btnClick1 = 0 END AS BTNCLICK FROM voto;

-- SELECT CASE WHEN fk_usuario = 1 AND fk_valores_quiz = 1 THEN btnClick1 = 1 ELSE btnClick1 = 0 END AS BTNCLICK FROM voto;

SELECT CASE WHEN fk_usuario = 1 AND fk_valores_quiz = 1 THEN 1 ELSE 2 END AS BTNCLICK1 FROM voto WHERE fk_valores_quiz = 1 AND fk_usuario = 1;

-- SELECT OrderID, Quantity,
-- CASE WHEN Quantity > 30 THEN 'The quantity is greater than 30'
-- WHEN Quantity = 30 THEN 'The quantity is 30'
-- ELSE 'The quantity is under 30'
-- END AS QuantityText
-- FROM OrderDetails;

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

INSERT INTO highscore (score, fk_usuario) VALUES (10, 1);

SELECT score FROM highscore WHERE fk_usuario = 1;
delete from usuario where id > 2;
select * from highscore;
truncate table highscore;
select * from highscore h JOIN usuario u ON h.fk_usuario = u.id;
select * from usuario;
INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES
(2, 4);
truncate table highscore;
truncate table voto;
select * from voto v
	join valores_quiz q on v.fk_valores_quiz = q.id;
SELECT * FROM valores_quiz;  
  
SELECT DISTINCT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1) /
 (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
	 (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1)  AS votos, vq.valor AS valor FROM voto v
		JOIN valores_quiz vq 
			ON vq.id = v.fk_valores_quiz
				JOIN questoes q 
					ON vq.fk_questoes = q.id
						WHERE v.fk_valores_quiz = 1;
                        
SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2) /
 (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
	 (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2)  AS votos, vq.valor AS valor FROM voto v
		JOIN valores_quiz vq 
			ON vq.id = v.fk_valores_quiz
				JOIN questoes q 
					ON vq.fk_questoes = q.id
						WHERE v.fk_valores_quiz = 2 ;
                        
drop table voto;
select * from voto;
truncate table highscore;
INSERT INTO usuario (nome, email, senha) VALUES
('Caique Gomes', 'caique.gomes@sptech.school', 'Caique123!');

SELECT * FROM usuario;
    delete from voto WHERE fk_valores_quiz>=1 AND fk_valores_quiz<=24 AND fk_usuario = 1 ORDER BY dt DESC LIMIT 1;

CREATE TRIGGER TG_votos_zero 
    BEFORE INSERT ON usuario
    FOR EACH ROW 
 INSERT INTO voto
 SET action = 'insert',
     valorQuiz = fk_valores_quiz,
     nome = OLD.nome;

truncate table highscore;

    SELECT DISTINCT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 1 ;
                           
                           
                           
                           
                           
INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES
(2,1),
(2,2),
(2,3),
(2,4),
(2,5),
(2,6),
(2,7),
(2,8),
(2,9),
(2,10),
(2,11),
(2,12),
(2,13),
(2,14),
(2,15),
(2,16),
(2,17),
(2,18),
(2,19),
(2,20),
(2,21),
(2,22),
(2,23),
(2,24);

select * from voto;
truncate table aviso;
        UPDATE aviso SET titulo = 'boo', descricao = 'Oi' WHERE id = 1;
select * from aviso;

truncate table voto;
