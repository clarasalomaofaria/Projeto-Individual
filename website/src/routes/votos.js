var express = require("express");
var router = express.Router();

var votosController = require("../controllers/votosController");

//VOTOS QUESTAO 01, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ1E1", function (req, res) {
    votosController.cadastrarVotoQ1E1(req, res);
});

router.get("/listarQ1E1", function (req, res) {
    votosController.listarQ1E1(req, res);
});

router.get("/listarQ1E1Other", function (req, res) {
    votosController.listarQ1E1Other(req, res);
});

//VOTOS QUESTAO 01, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ1E2", function (req, res) {
    votosController.cadastrarVotoQ1E2(req, res);
});

router.get("/listarQ1E2", function (req, res) {
    votosController.listarQ1E2(req, res);
});

router.get("/listarQ1E2Other", function (req, res) {
    votosController.listarQ1E2Other(req, res);
});

//VOTOS QUESTAO 02, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ2E1", function (req, res) {
    votosController.cadastrarVotoQ2E1(req, res);
});

router.get("/listarQ2E1", function (req, res) {
    votosController.listarQ2E1(req, res);
});

router.get("/listarQ2E1Other", function (req, res) {
    votosController.listarQ2E1Other(req, res);
});

//VOTOS QUESTAO 02, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ2E2", function (req, res) {
    votosController.cadastrarVotoQ2E2(req, res);
});

router.get("/listarQ2E2", function (req, res) {
    votosController.listarQ2E2(req, res);
});

router.get("/listarQ2E2Other", function (req, res) {
    votosController.listarQ2E2Other(req, res);
});

//VOTOS QUESTAO 03, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ3E1", function (req, res) {
    votosController.cadastrarVotoQ3E1(req, res);
});

router.get("/listarQ3E1", function (req, res) {
    votosController.listarQ3E1(req, res);
});

router.get("/listarQ3E1Other", function (req, res) {
    votosController.listarQ3E1Other(req, res);
});

//VOTOS QUESTAO 03, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ3E2", function (req, res) {
    votosController.cadastrarVotoQ3E2(req, res);
});

router.get("/listarQ3E2", function (req, res) {
    votosController.listarQ3E2(req, res);
});

router.get("/listarQ3E2Other", function (req, res) {
    votosController.listarQ3E2Other(req, res);
});

//VOTOS QUESTAO 04, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ4E1", function (req, res) {
    votosController.cadastrarVotoQ4E1(req, res);
});

router.get("/listarQ4E1", function (req, res) {
    votosController.listarQ4E1(req, res);
});

router.get("/listarQ4E1Other", function (req, res) {
    votosController.listarQ4E1Other(req, res);
});

//VOTOS QUESTAO 04, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ4E2", function (req, res) {
    votosController.cadastrarVotoQ4E2(req, res);
});

router.get("/listarQ4E2", function (req, res) {
    votosController.listarQ4E2(req, res);
});

router.get("/listarQ4E2Other", function (req, res) {
    votosController.listarQ4E2Other(req, res);
});

//VOTOS QUESTAO 05, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ5E1", function (req, res) {
    votosController.cadastrarVotoQ5E1(req, res);
});

router.get("/listarQ5E1", function (req, res) {
    votosController.listarQ5E1(req, res);
});

router.get("/listarQ5E1Other", function (req, res) {
    votosController.listarQ5E1Other(req, res);
});

//VOTOS QUESTAO 05, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ5E2", function (req, res) {
    votosController.cadastrarVotoQ5E2(req, res);
});

router.get("/listarQ5E2", function (req, res) {
    votosController.listarQ5E2(req, res);
});

router.get("/listarQ5E2Other", function (req, res) {
    votosController.listarQ5E2Other(req, res);
});

//VOTOS QUESTAO 06, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ6E1", function (req, res) {
    votosController.cadastrarVotoQ6E1(req, res);
});

router.get("/listarQ6E1", function (req, res) {
    votosController.listarQ6E1(req, res);
});

router.get("/listarQ6E1Other", function (req, res) {
    votosController.listarQ6E1Other(req, res);
});

//VOTOS QUESTAO 06, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ6E2", function (req, res) {
    votosController.cadastrarVotoQ6E2(req, res);
});

router.get("/listarQ6E2", function (req, res) {
    votosController.listarQ6E2(req, res);
});

router.get("/listarQ6E2Other", function (req, res) {
    votosController.listarQ6E2Other(req, res);
});

//VOTOS QUESTAO 07, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ7E1", function (req, res) {
    votosController.cadastrarVotoQ7E1(req, res);
});

router.get("/listarQ7E1", function (req, res) {
    votosController.listarQ7E1(req, res);
});

router.get("/listarQ7E1Other", function (req, res) {
    votosController.listarQ7E1Other(req, res);
});

//VOTOS QUESTAO 07, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ7E2", function (req, res) {
    votosController.cadastrarVotoQ7E1(req, res);
});

router.get("/listarQ7E2", function (req, res) {
    votosController.listarQ7E1(req, res);
});

router.get("/listarQ7E2Other", function (req, res) {
    votosController.listarQ7E1Other(req, res);
});

//VOTOS QUESTAO 08, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ8E1", function (req, res) {
    votosController.cadastrarVotoQ8E1(req, res);
});

router.get("/listarQ8E1", function (req, res) {
    votosController.listarQ8E1(req, res);
});

router.get("/listarQ8E1Other", function (req, res) {
    votosController.listarQ8E1Other(req, res);
});

//VOTOS QUESTAO 08, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ8E2", function (req, res) {
    votosController.cadastrarVotoQ8E2(req, res);
});

router.get("/listarQ8E2", function (req, res) {
    votosController.listarQ8E2(req, res);
});

router.get("/listarQ8E2Other", function (req, res) {
    votosController.listarQ8E2Other(req, res);
});

//VOTOS QUESTAO 09, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ9E1", function (req, res) {
    votosController.cadastrarVotoQ9E1(req, res);
});

router.get("/listarQ9E1", function (req, res) {
    votosController.listarQ9E1(req, res);
});

router.get("/listarQ9E1Other", function (req, res) {
    votosController.listarQ9E1Other(req, res);
});

//VOTOS QUESTAO 09, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ9E2", function (req, res) {
    votosController.cadastrarVotoQ9E2(req, res);
});

router.get("/listarQ9E2", function (req, res) {
    votosController.listarQ9E2(req, res);
});

router.get("/listarQ9E2Other", function (req, res) {
    votosController.listarQ9E2Other(req, res);
});

//VOTOS QUESTAO 10, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ10E1", function (req, res) {
    votosController.cadastrarVotoQ10E1(req, res);
});

router.get("/listarQ10E1", function (req, res) {
    votosController.listarQ10E1(req, res);
});

router.get("/listarQ10E1Other", function (req, res) {
    votosController.listarQ10E1Other(req, res);
});

//VOTOS QUESTAO 10, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ10E2", function (req, res) {
    votosController.cadastrarVotoQ10E2(req, res);
});

router.get("/listarQ10E2", function (req, res) {
    votosController.listarQ10E2(req, res);
});

router.get("/listarQ10E2Other", function (req, res) {
    votosController.listarQ10E2Other(req, res);
});

//VOTOS QUESTAO 11, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ11E1", function (req, res) {
    votosController.cadastrarVotoQ11E1(req, res);
});

router.get("/listarQ11E1", function (req, res) {
    votosController.listarQ11E1(req, res);
});

router.get("/listarQ11E1Other", function (req, res) {
    votosController.listarQ11E1Other(req, res);
});

//VOTOS QUESTAO 11, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ11E2", function (req, res) {
    votosController.cadastrarVotoQ11E2(req, res);
});

router.get("/listarQ11E2", function (req, res) {
    votosController.listarQ11E2(req, res);
});

router.get("/listarQ11E2Other", function (req, res) {
    votosController.listarQ11E2Other(req, res);
});

//VOTOS QUESTAO 12, ESCOLHA 01

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ12E1", function (req, res) {
    votosController.cadastrarVotoQ12E1(req, res);
});

router.get("/listarQ12E1", function (req, res) {
    votosController.listarQ12E1(req, res);
});

router.get("/listarQ12E1Other", function (req, res) {
    votosController.listarQ12E1Other(req, res);
});

//VOTOS QUESTAO 12, ESCOLHA 02

//Recebendo os dados do html e direcionando para a função cadastrar de votosController.js
router.post("/cadastrarVotoQ12E2", function (req, res) {
    votosController.cadastrarVotoQ12E2(req, res);
});

router.get("/listarQ12E2", function (req, res) {
    votosController.listarQ12E2(req, res);
});

router.get("/listarQ12E2Other", function (req, res) {
    votosController.listarQ12E2Other(req, res);
});

router.delete("/deletarVotos/:idUsuario", function (req, res) {
    votosController.deletarVotos(req, res);
});

module.exports = router;
