function voltarPagina() {
    window.history.back();
  }
  
  
  function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var senhaVar = inputSenha.value;
    var nomeVar = inputUsuario.value;
    var emailVar = inputEmail.value;

    // if (userVar == "" || senhaVar == "" || nomeVar == "" || emailVar == "") {
    //     cardErro.style.display = "block"
    //     mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

    //     finalizarAguardar();
    //     return false;
    // }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            senhaServer: senhaVar,
            nomeServer: nomeVar,
            emailServer: emailVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
            
            limparFormulario();
            // finalizarAguardar();
        } else {
            alert ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}

