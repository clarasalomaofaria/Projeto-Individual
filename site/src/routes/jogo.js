var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");


router.get("/checarScore/:idUsuario", function (req, res) {
    jogoController.checarScore(req, res);
});

router.post("/inserirScore", function (req, res) {
    jogoController.inserirScore(req, res);
})

module.exports = router;
