var jogoModel = require("../models/jogoModel");

// function checarScore(req, res) {

//     jogoModel.checarScore(idUsuario)
//         .then(
//             function (resultado) {
//                 console.log(`\nResultados encontrados: ${resultado.length}`);
//                 console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                 if (resultado.length == 1) {
//                     console.log(resultado);
//                     res.json(resultado[0]);
//                 } else if (resultado.length == 0) {
//                     console.log('Highscore não existe')
//                         .catch(
//                             function (erro) {
//                                 console.log(erro);
//                                 console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
//                                 res.status(500).json(erro.sqlMessage);
//                             }
//                         )
//                 } else {
//                     res.status(403).send("Erro!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );


// }


function checarScore(req, res) {
    var idUsuario = req.params.idUsuario

    jogoModel.checarScore(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function inserirScore(req, res) {

    var score = req.body.scoreServer;
    var idUsuario = req.body.idServer;


    jogoModel.inserirScore(score, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    checarScore,
    inserirScore
}
