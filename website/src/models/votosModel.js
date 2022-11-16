
var database = require("../database/config")

//VOTOS QUESTAO 01, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ1E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ1E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 1 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ1E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 2 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//VOTOS QUESTAO 01, ESCOLHA 02

function cadastrarVotoQ1E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ1E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 2)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 2 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ1E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1 OR v.fk_valores_quiz = 2) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 1)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 1 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 02, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ2E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ2E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3 OR v.fk_valores_quiz = 4) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 3 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ2E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 4) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3 OR v.fk_valores_quiz = 4) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 4)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 4 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 02, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ2E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ2E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 4) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3 OR v.fk_valores_quiz = 4) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 4)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 4 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ2E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3 OR v.fk_valores_quiz = 4) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 3)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 3 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 03, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ3E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ3E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5 OR v.fk_valores_quiz = 6) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 5 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ3E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 6) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5 OR v.fk_valores_quiz = 6) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 6)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 6 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 03, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ3E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ3E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 6) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5 OR v.fk_valores_quiz = 6) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 6)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 6 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ3E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5 OR v.fk_valores_quiz = 6) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 5)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 5 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 04, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ4E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ4E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7 OR v.fk_valores_quiz = 8) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 7 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ4E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 8) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7 OR v.fk_valores_quiz = 8) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 8)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 8 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 04, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ4E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ4E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 8) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7 OR v.fk_valores_quiz = 8) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 8)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 8 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ4E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7 OR v.fk_valores_quiz = 8) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 7)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 7 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 05, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ5E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ5E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9 OR v.fk_valores_quiz = 10) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 9 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ5E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 10) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9 OR v.fk_valores_quiz = 10) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 10)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 10 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 05, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ5E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ5E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 10) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9 OR v.fk_valores_quiz = 10) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 10)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 10 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ5E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9 OR v.fk_valores_quiz = 10) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 9)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 9 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 06, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ6E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ6E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11 OR v.fk_valores_quiz = 12) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 11 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ6E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 12) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11 OR v.fk_valores_quiz = 12) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 12)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 12 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 06, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ6E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ6E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 12) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11 OR v.fk_valores_quiz = 12) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 12)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 12 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ6E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11 OR v.fk_valores_quiz = 12) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 11)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 11 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 07, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ7E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ7E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13 OR v.fk_valores_quiz = 14) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 13 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ7E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 14) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13 OR v.fk_valores_quiz = 14) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 14)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 14 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 07, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ7E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ7E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 14) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13 OR v.fk_valores_quiz = 14) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 14)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 14 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ7E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13 OR v.fk_valores_quiz = 14) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 13)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 13 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 08, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ8E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ8E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15 OR v.fk_valores_quiz = 16) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 15 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ8E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 16) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15 OR v.fk_valores_quiz = 16) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 16)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 16 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 08, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ8E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ8E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 16) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15 OR v.fk_valores_quiz = 16) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 16)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 16 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ8E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15 OR v.fk_valores_quiz = 16) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 15)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 15 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 09, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ9E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ9E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17 OR v.fk_valores_quiz = 18) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 18)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 18 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ9E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 18) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17 OR v.fk_valores_quiz = 18) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 18)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 18 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 09, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ9E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ9E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 18) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17 OR v.fk_valores_quiz = 18) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 18)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 18 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ9E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17 OR v.fk_valores_quiz = 18) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 17)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 18 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



//VOTOS QUESTAO 10, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ10E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ10E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19 OR v.fk_valores_quiz = 20) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 19 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ10E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 20) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19 OR v.fk_valores_quiz = 20) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 20)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 20 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 10, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ10E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ10E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 20) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19 OR v.fk_valores_quiz = 20) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 20)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 20 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ10E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19 OR v.fk_valores_quiz = 20) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 19)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 19 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 11, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ11E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ11E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21 OR v.fk_valores_quiz = 22) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 21 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ11E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 22) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21 OR v.fk_valores_quiz = 22) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 22)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 22 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 11, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ11E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ11E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 22) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21 OR v.fk_valores_quiz = 22) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 22)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 22 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ11E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21 OR v.fk_valores_quiz = 22) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 21)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 21 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 12, ESCOLHA 01

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ12E1(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ12E1() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23 OR v.fk_valores_quiz = 24) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 23 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ12E1Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 24) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23 OR v.fk_valores_quiz = 24) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 24)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 24 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//VOTOS QUESTAO 12, ESCOLHA 02

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarVotoQ12E2(usuario, valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, valor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO voto (fk_usuario, fk_valores_quiz) VALUES ('${usuario}', '${valor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ12E2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 24) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23 OR v.fk_valores_quiz = 24) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 24)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 24 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQ12E2Other() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT ROUND((SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23) /
    (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23 OR v.fk_valores_quiz = 24) * 100 ) AS porcentagem,
        (SELECT COUNT(v.id) FROM voto v WHERE v.fk_valores_quiz = 23)  AS votos, vq.valor AS valor FROM voto v
           JOIN valores_quiz vq 
               ON vq.id = v.fk_valores_quiz
                   JOIN questoes q 
                       ON vq.fk_questoes = q.id
                           WHERE v.fk_valores_quiz = 23 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    cadastrarVotoQ1E1,
    listarQ1E1,
    listarQ1E1Other,
    cadastrarVotoQ1E2,
    listarQ1E2,
    listarQ1E2Other,
    cadastrarVotoQ2E1,
    listarQ2E1,
    listarQ2E1Other,
    cadastrarVotoQ2E2,
    listarQ2E2,
    listarQ2E2Other,
    cadastrarVotoQ3E1,
    listarQ3E1,
    listarQ3E1Other,
    cadastrarVotoQ3E2,
    listarQ3E2,
    listarQ3E2Other,
    cadastrarVotoQ4E1,
    listarQ4E1,
    listarQ4E1Other,
    cadastrarVotoQ4E2,
    listarQ4E2,
    listarQ4E2Other,
    cadastrarVotoQ5E1,
    listarQ5E1,
    listarQ5E1Other,
    cadastrarVotoQ5E2,
    listarQ5E2,
    listarQ5E2Other,
    cadastrarVotoQ6E1,
    listarQ6E1,
    listarQ6E1Other,
    cadastrarVotoQ6E2,
    listarQ6E2,
    listarQ6E2Other,
    cadastrarVotoQ7E1,
    listarQ7E1,
    listarQ7E1Other,
    cadastrarVotoQ7E2,
    listarQ7E2,
    listarQ7E2Other,
    cadastrarVotoQ8E1,
    listarQ8E1,
    listarQ8E1Other,
    cadastrarVotoQ8E2,
    listarQ8E2,
    listarQ8E2Other,
    cadastrarVotoQ9E1,
    listarQ9E1,
    listarQ9E1Other,
    cadastrarVotoQ9E2,
    listarQ9E2,
    listarQ9E2Other,
    cadastrarVotoQ10E1,
    listarQ10E1,
    listarQ10E1Other,
    cadastrarVotoQ10E2,
    listarQ10E2,
    listarQ10E2Other,
    cadastrarVotoQ11E1,
    listarQ11E1,
    listarQ11E1Other,
    cadastrarVotoQ11E2,
    listarQ11E2,
    listarQ11E2Other,
    cadastrarVotoQ12E1,
    listarQ12E1,
    listarQ12E1Other,
    cadastrarVotoQ12E2,
    listarQ12E2,
    listarQ12E2Other
}