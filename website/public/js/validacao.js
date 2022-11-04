/* Validando os campos */


var senha_global = "";
var validar_senha = false;
function validarSenha() {
    var senha = inputSenha.value;
    senha_global = senha
    var fortificador =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])([0-9a-zA-Z!$*&@#]){6,}$/;
    /*
      
    (?=.*\d)         // deve conter ao menos um dígito
    (?=.*[a-z])      // deve conter ao menos uma letra minúscula
    (?=.*[A-Z])      // deve conter ao menos uma letra maiúscula
    (?=.*[$*&@#!])    // deve conter ao menos um caractere especial
    
  ([0-9a-zA-Z$*&@#]): é uma classe de caracteres contendo números, 
  letras e os caracteres especiais que você está considerando. 
  Eles estão dentro de parênteses para formar um grupo de captura
    
    Verifica se a senha está com as requisições acima */
  if (fortificador.test(senha)) {
    validar_senha = true;
    inputSenha.classList.remove("red");
    inputSenha.classList.add("green");
  } else {
    validar_senha = false;
    inputSenha.classList.add("red");
    inputSenha.classList.remove("green");
  }
}

var validar_confirmacao_senha = false;
function validarConfirmacaoSenha() {
  var confirmacao_senha = inputConfirmacaoSenha.value;
  if (confirmacao_senha == senha_global) {
    validar_confirmacao_senha = true;
    inputConfirmacaoSenha.classList.remove("red");
    inputConfirmacaoSenha.classList.add("green");
  } else {
    validar_confirmacao_senha = false;
    inputConfirmacaoSenha.classList.remove("green");
    inputConfirmacaoSenha.classList.add("red");
  }
}

var validar_nome = false;
function validarNome() {
  var nome = inputUsuario.value;
  /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
  const nomeCompleto = nome.split(" ");
  /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
  if (nomeCompleto.length <= 1) {
    validar_nome = false;
    inputUsuario.classList.remove("green");
    inputUsuario.classList.add("red");
} else {
    validar_nome = true;
    inputUsuario.classList.remove("red");
    inputUsuario.classList.add("green");
  }
  /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
  for (let i = 0; i < nomeCompleto.length; i++) {
    nomeCompleto[i] =
      nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}
var validar_email = false;
function validarEmail() {
  var email = inputEmail.value;
  var validacao = /\S+@\S+\.\S+/;
  /* Qualquer tipo de texto:
  Seguida por um caractere @ (que é obrigatório em e-mails);
  Seguido por algum outro texto, o domínio/provedor;
  E então temos a presença de um ponto, que também é obrigatório;
  E por fim mais um texto, validando tanto emails .com quanto .com.br, e outros que tenham terminologias diferentes */
  if (!validacao.test(email)) {
      validar_email = false;
      inputEmail.classList.remove("green");
      inputEmail.classList.add("red");
} else {
    validar_email = true;
    inputEmail.classList.remove("red");
    inputEmail.classList.add("green");
  }
}

function validar_autenticacao_login() {
  if (validar_usuario && validar_senha) {
    window.location.href = "forum.html";
  } else {
    alert("Autenticação inválida");
  }
}
function validar_autenticacao_cadastro() {
  if (
    validar_usuario &&
    validar_senha &&
    validar_confirmacao_senha &&
    validar_email
  ) {
    window.location.href = "login.html";
  } else {
    alert("Cadastro inválido");
  }
}
