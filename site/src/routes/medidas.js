var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

//Recebendo os dados do html e direcionando para a função cadastrar de votacoesController.js
router.post("/cadastrarQuestao1Escolha1/:idUsuario", function (req, res) {
    votacoesController.cadastrarQuestao1Escolha1(req, res);
})

module.exports = router;