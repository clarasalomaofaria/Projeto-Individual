
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
    listarQ2E2Other

};