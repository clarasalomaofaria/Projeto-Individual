var canvas = document.getElementById("meuCanvas")
var context = canvas.getContext("2d")
context.font = 'bold 30px sans-serif'
var quantidadeY
var cameraY
var atual
var modo 
var xVelocidade
var yVelocidade = 5
var height = 50
var caixas = []
caixas[0] = {
  x: 300,
  y: 300,
  width: 200
}
var destrocos = {
  x: 0,
  width: 0
}


restart()
animar()

function restart() {
  caixas.splice(1, caixas.length - 1)
  modo = 'deslizar'
  cameraY = 0
  quantidadeY = 0
  xVelocidade = 2
  atual = 1
  novaCaixa()
  destrocos.y = 0
}

canvas.onpointerdown = function () {
  if (modo == 'gameOver') {
    restart()
  }
  else {
    if (modo == 'deslizar')
      modo = 'cair';
  }
  checarScore()
}


function novaCaixa() {
  caixas[atual] = {
    x: 0,
    y: (atual + 9) * height,
    width: caixas[atual - 1].width
  };
}

function gameOver() {
  modo = 'gameOver'
  context.fillText('Game over. Clique para jogar novamente!', 100, 80);
  sessionStorage.SCORE_ATUAL = atual - 1
  inserirScore()
  checarScore()
}

function animar() {
  if (modo != 'gameOver') {
    context.clearRect(0, 0, canvas.width, canvas.height)
    // context.fillText('Pontuação: ' + (atual - 1).toString(), 300, 30);
    var pontuacao = document.getElementById('pontuacao')
    pontuacao.innerHTML = `Pontuação: ${atual - 1}`


    var i = 0
    for (var n = 0; n < caixas.length; n++) {
      var caixa = caixas[n];
      if (i < 10) {
        context.fillStyle = 'rgb(' + i * 16 + ',' + i * 16 + ',' + i * 16 + ')'
      } else {
        i = 0
        context.fillStyle = 'rgb(' + i * 16 + ',' + i * 16 + ',' + i * 16 + ')'
      }

      i++
      context.fillRect(caixa.x, 600 - caixa.y + cameraY, caixa.width, height)
    }
    context.fillStyle = 'rgb(227, 23, 23)';
    context.fillRect(destrocos.x, 600 - destrocos.y + cameraY, destrocos.width, height)
    if (modo == 'deslizar') {
      caixas[atual].x = caixas[atual].x + xVelocidade
      if (xVelocidade > 0 && caixas[atual].x + caixas[atual].width > canvas.width || xVelocidade < 0 && caixas[atual].x < 0) {
        xVelocidade = -xVelocidade
      }

    }
    if (modo == 'cair') {
      caixas[atual].y = caixas[atual].y - yVelocidade;
      if (caixas[atual].y == caixas[atual - 1].y + height) {
        modo = 'deslizar'
        var diferenca = caixas[atual].x - caixas[atual - 1].x
        if (Math.abs(diferenca) >= caixas[atual].width) {
          gameOver()
        }
        destrocos = {
          y: caixas[atual].y,
          width: diferenca
        }
        if (caixas[atual].x > caixas[atual - 1].x) {
          caixas[atual].width = caixas[atual].width - diferenca
          destrocos.x = caixas[atual].x + caixas[atual].width
        } else {
          destrocos.x = caixas[atual].x - diferenca
          caixas[atual].width = caixas[atual].width + diferenca
          caixas[atual].x = caixas[atual - 1].x
        }
        if (xVelocidade > 0) {
          xVelocidade++
        }
        else {
          xVelocidade--
        }
        atual++
        quantidadeY = height
        novaCaixa()
      }
    }
    destrocos.y = destrocos.y - yVelocidade;
    if (quantidadeY) {
      cameraY++
      quantidadeY--
    }
  }
  window.requestAnimationFrame(animar)
}


function validarSessao() {

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    b_usuario.innerHTML = nome;

  } else {
    window.location = "../login.html";
  }
}


var idUsuario = sessionStorage.ID_USUARIO;
function checarScore() {

  fetch(`/jogo/checarScore/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        for (let i = 0; i < resposta.length; i++) {
          var itens = resposta[i];

          var highscore = document.getElementById('highscore')
          highscore.innerHTML = `Highscore: ${itens.score}`

        }

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function inserirScore() {

    var idUsuarioVar = sessionStorage.ID_USUARIO
  var scoreVar = sessionStorage.SCORE_ATUAL

  // Enviando o valor da nova input
  fetch(`/jogo/inserirScore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idServer: idUsuarioVar,
      scoreServer: scoreVar
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
         console.log(`Score inserido no banco de dados`);
    } else {
      console.log("Erro!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });
  
  return false;
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../index.html";
}

