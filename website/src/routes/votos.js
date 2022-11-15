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

module.exports = router;