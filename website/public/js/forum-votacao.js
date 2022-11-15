
function cadastrarQuestao1Escolha1() {
    var idUsuario = sessionStorage.ID_USUARIO;
    fetch(`/votacoes/cadastrarQuestao1Escolha1/${idUsuario}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    // var dadosCadastro = {
                    //     idUsuario: idUsuario,
                    //     idQuiz: resposta.fk_valores_quiz,
                    // }

                    // buscarQuestao1Escolha1(resposta.idUsuario, resposta.idQuiz);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro: ${error.message}`);
        });

}


// function cadastrarQuestao1Escolha1() {

//     var idUsuario = sessionStorage.ID_USUARIO;

//     fetch(`/votacoes/cadastrarQuestao1Escolha1/${idUsuario}`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(function (resposta) {

//         console.log("resposta: ", resposta);

//         if (resposta.ok) {
//             buscarQuestao1Escolha1();
//             finalizarAguardar();
//         } else if (resposta.status == 404) {
//             window.alert("Deu 404!");
//         } else {
//             throw ("Houve um erro! Código da resposta: " + resposta.status);
//         }
//     }).catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//         finalizarAguardar();
//     });

//     return false;

// }

function buscarQuestao1Escolha1() {

    fetch(`/votacoes/buscarQuestao1Escolha1/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
        response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            resposta.reverse();
            
            mostrarQuestao1Escolha1();
        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro: ${error.message}`);
});
}

function mostrarQuestao1Escolha1() {

}

// function quizQuestao1Resposta1() {
    
//     var idUsuario = sessionStorage.ID_USUARIO;

//     fetch(`/votacoes/cadastrarQuestao1/${idUsuario}`).then(function (resposta) {
//         if (resposta.ok) {
//             if (resposta.status == 204) {
//                 alert("Nenhum produto encontrado")
//             }
//             resposta.json().then(function (resposta) {
//                 console.log("Dados recebidos: ", JSON.stringify(resposta));

                // const q1e1 = document.getElementById('q1e1')
                // q1e1.disabled = true;
                // const q1e2 = document.getElementById('q1e2')
                // q1e2.disabled = true;

                // q1e1.textContent = '55%';
                // q1e2.textContent = '45%';

                // q1e2.classList.add("naoEscolhidoBlue");

                // var Votosq1e1 = document.createElement("div");
                // Votosq1e1.className = "button-quiz-info-top"
                // Votosq1e1.innerHTML = `<br>20 votos`;
                // q1e1.appendChild(Votosq1e1);

                // var Textoq1e1 = document.createElement("div");
                // Textoq1e1.innerHTML = `<br>Poder viajar ao passado`;
                // Textoq1e1.className = "button-quiz-info-bottom"
                // q1e1.appendChild(Textoq1e1);

                // var Votosq1e2 = document.createElement("div");
                // Votosq1e2.className = "button-quiz-info-top"
                // Votosq1e2.innerHTML = `<br>10 votos`;
                // q1e2.appendChild(Votosq1e2);

                // var Textoq1e2 = document.createElement("div");
                // Textoq1e2.innerHTML = `<br>Poder viajar ao futuro`;
                // Textoq1e2.className = "button-quiz-info-bottom"
                // q1e2.appendChild(Textoq1e2);

                // var check = document.createElement("div");
                // check.className = "checkImg"
                // check.innerHTML = `<br>⇧`;
                // q1e1.appendChild(check);

//             });
//         } else {
//             throw ('Houve um erro na API!');
//         }
//     }).catch(function (resposta) {
//         console.error(resposta);
//     });
// }


// function quizQuestao1Resposta1() {



//     const q1e1 = document.getElementById('q1e1')
//     q1e1.disabled = true;
//     const q1e2 = document.getElementById('q1e2')
//     q1e2.disabled = true;

//     q1e1.textContent = '55%';
//     q1e2.textContent = '45%';

//     q1e2.classList.add("naoEscolhidoBlue");

//     var Votosq1e1 = document.createElement("div");
//     Votosq1e1.className = "button-quiz-info-top"
//     Votosq1e1.innerHTML = `<br>20 votos`;
//     q1e1.appendChild(Votosq1e1);

//     var Textoq1e1 = document.createElement("div");
//     Textoq1e1.innerHTML = `<br>Poder viajar ao passado`;
//     Textoq1e1.className = "button-quiz-info-bottom"
//     q1e1.appendChild(Textoq1e1);

//     var Votosq1e2 = document.createElement("div");
//     Votosq1e2.className = "button-quiz-info-top"
//     Votosq1e2.innerHTML = `<br>10 votos`;
//     q1e2.appendChild(Votosq1e2);

//     var Textoq1e2 = document.createElement("div");
//     Textoq1e2.innerHTML = `<br>Poder viajar ao futuro`;
//     Textoq1e2.className = "button-quiz-info-bottom"
//     q1e2.appendChild(Textoq1e2);

//     var check = document.createElement("div");
//     check.className = "checkImg"
//     check.innerHTML = `<br>⇧`;
//     q1e1.appendChild(check);

//     var idUsuario = sessionStorage.ID_PERFIL;




// }


// function quizQuestao1Resposta2() {

//     const q1e1 = document.getElementById('q1e1')
//     q1e1.disabled = true;
//     const q1e2 = document.getElementById('q1e2')
//     q1e2.disabled = true;

//     q1e1.textContent = '55%';
//     q1e2.textContent = '45%';

//     q1e1.classList.add("naoEscolhidoRed");

//     var Votosq1e1 = document.createElement("div");
//     Votosq1e1.className = "button-quiz-info-top"
//     Votosq1e1.innerHTML = `<br>20 votos`;
//     q1e1.appendChild(Votosq1e1);

//     var Textoq1e1 = document.createElement("div");
//     Textoq1e1.innerHTML = `<br>Poder viajar ao passado`;
//     Textoq1e1.className = "button-quiz-info-bottom"
//     q1e1.appendChild(Textoq1e1);

//     var Votosq1e2 = document.createElement("div");
//     Votosq1e2.className = "button-quiz-info-top"
//     Votosq1e2.innerHTML = `<br>10 votos`;
//     q1e2.appendChild(Votosq1e2);

//     var Textoq1e2 = document.createElement("div");
//     Textoq1e2.innerHTML = `<br>Poder viajar ao futuro`;
//     Textoq1e2.className = "button-quiz-info-bottom"
//     q1e2.appendChild(Textoq1e2);

//     var check = document.createElement("div");
//     check.className = "checkImg"
//     check.innerHTML = `<br>⇧`;
//     q1e2.appendChild(check);


// }


// function quizQuestao2Resposta1() {

//     const q2e1 = document.getElementById('q2e1')
//     q2e1.disabled = true;
//     const q2e2 = document.getElementById('q2e2')
//     q2e2.disabled = true;

//     q2e1.textContent = '55%';
//     q2e2.textContent = '45%';

//     q2e2.classList.add("naoEscolhidoBlue");

//     var Votosq2e1 = document.createElement("div");
//     Votosq2e1.className = "button-quiz-info-top"
//     Votosq2e1.innerHTML = `<br>20 votos`;
//     q2e1.appendChild(Votosq2e1);

//     var Textoq2e1 = document.createElement("div");
//     Textoq2e1.innerHTML = `<br>Ser rico em um trabalho que você odeia`;
//     Textoq2e1.className = "button-quiz-info-bottom"
//     q2e1.appendChild(Textoq2e1);

//     var Votosq2e2 = document.createElement("div");
//     Votosq2e2.className = "button-quiz-info-top"
//     Votosq2e2.innerHTML = `<br>10 votos`;
//     q2e2.appendChild(Votosq2e2);

//     var Textoq2e2 = document.createElement("div");
//     Textoq2e2.innerHTML = `<br>Não ter tanto dinheiro em um trabalho que você ama`;
//     Textoq2e2.className = "button-quiz-info-bottom"
//     q2e2.appendChild(Textoq2e2);

//     var check = document.createElement("div");
//     check.className = "checkImg"
//     check.innerHTML = `<br>⇧`;
//     q2e1.appendChild(check);


// }

// // comecando bancoo

function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// // // modal
// // function mostrarModal() {
// //     var divModal = document.getElementById("div_modal");
// //     divModal.style.display = "flex";
// // }

// // function fecharModal() {
// //     var divModal = document.getElementById("div_modal");
// //     divModal.style.display = "none";
// // }



// // function cadastrarEmpresa() {
// //     //Recupere o valor da nova input pelo nome do id
// //     // Agora vá para o método fetch logo abaixo
// //     var empresaNomeVar = inputEmpresa.value;
// //     var cnpjVar = inputCNPJ.value;
// //     var logradouroVar = inputLogradouro.value;
// //     var cidadeVar = inputCidade.value;
// //     var estadoVar = inputUF.value;
// //     var cepVar = inputCEP.value;
// //     var bairroVar = inputBairro.value;
// //     var complementoVar = inputComplemento.value;

// //     // Enviando o valor da nova input
// //     fetch("/empresa/cadastrarEmpresa", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         // crie um atributo que recebe o valor recuperado aqui
// //         // Agora vá para o arquivo routes/usuario.js
// //         idPerfil: sessionStorage.ID_PERFIL,
// //         empresaNomeServer: empresaNomeVar,
// //         cnpjServer: cnpjVar,
// //         logradouroServer: logradouroVar,
// //         cidadeServer: cidadeVar,
// //         estadoServer: estadoVar,
// //         cepServer: cepVar,
// //         bairroServer: bairroVar,
// //         complementoVar: complementoVar,
// //       }),
// //     })
// //       .then(function (resposta) {
// //         console.log("resposta: ", resposta);}

// function cadastrarFuncionario() {
//     //Recupere o valor da nova input pelo nome do id
//     // Agora vá para o método fetch logo abaixo
//     var userVar = inputUsuario.value;
//     var senhaVar = inputSenha.value;
//     var nomeVar = inputNome.value;
//     var emailVar = inputEmail.value;
//     var contatoVar = inputContato.value;
//     var funcaoVar = inputFuncao.value;
//     var idEmpresa = sessionStorage.ID_EMPRESA;

//     fetch(`/funcionario/cadastrarFuncionario/${idEmpresa}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             // crie um atributo que recebe o valor recuperado aqui
//             // Agora vá para o arquivo routes/funcionario.js
//             idEmpresa: sessionStorage.ID_EMPRESA,
//             userServer: userVar,
//             senhaServer: senhaVar,
//             nomeServer: nomeVar,
//             emailServer: emailVar,
//             contatoServer: contatoVar,
//             funcaoServer: funcaoVar,
//         }),
//     })
//         .then(function (resposta) {
//             console.log("resposta: ", resposta, sessionStorage.ID_EMPRESA);

//             if (resposta.ok) {
//                 alert("Cadastro realizado com sucesso!");

//                 setTimeout(() => {
//                     window.location.reload();
//                 }, "500");
//             } else {
//                 alert("Houve um erro ao tentar realizar o cadastro!");
//                 console.log("respostaaaa: ", resposta, sessionStorage.ID_EMPRESA);
//             }
//         })
//         .catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });

//     return false;
// }


// //   
// // 
// // 



// function atualizartabela() {
//     var idUsuario = sessionStorage.ID_PERFIL;


//     fetch(`/produtos/listarprodutos/${idUsuario}`).then(function (resposta) {
//         if (resposta.ok) {
//             if (resposta.status == 204) {
//                 alert("Nenhum produto encontrado")
//             }
//             resposta.json().then(function (resposta) {
//                 console.log("Dados recebidos: ", JSON.stringify(resposta));

//                 var tabela = document.getElementById("tbody_table");

//                 tabela.innerHTML = "";
//                 for (let i = 0; i < resposta.length; i++) {
//                     var itens = resposta[i];

//                     var linhaTabela = document.createElement("tr");
//                     var colunaTabela1 = document.createElement("td");
//                     var colunaTabela2 = document.createElement("td");


//                     colunaTabela1.innerHTML = itens.idProduto
//                     colunaTabela2.innerHTML = itens.nomeProduto

//                     linhaTabela.className = "tr_table";
//                     colunaTabela1.className = "td_table"
//                     colunaTabela2.className = "td_table_produto"


//                     linhaTabela.appendChild(colunaTabela1);
//                     linhaTabela.appendChild(colunaTabela2);
//                     tabela.appendChild(linhaTabela);
//                 }
//             });
//         } else {
//             throw ('Houve um erro na API!');
//         }
//     }).catch(function (resposta) {
//         console.error(resposta);
//     });
// }

function buscarQuestao1Escolha1() {
      fetch(`/empresa?id=${sessionStorage.ID_EMPRESA}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (resposta) {
          if (resposta.ok) {
            resposta.json().then((json) => {
              console.log(json);
              //nome da empresa
              var nome_empresa = json.nomeEmpresa;
              titulo_div_empresa.innerHTML = nome_empresa;
              subtitulo_div_empresa.remove();
              inputEmpresa.remove();
              nome_empresa_cadastro.innerHTML = `Nome da Empresa`;
              nome_empresa_box.innerHTML += nome_empresa;

              //cnpj da empresa
              var cnpj_empresa = Number(json.cnpj);
              inputCNPJ.remove();
              cnpj_empresa_box.innerHTML += cnpj_empresa;
              cnpj_empresa_cadastro.innerHTML = "CNPJ";

              //Logradouro da empresa
              var logradouro_empresa = json.logradouro;
              inputLogradouro.remove();
              logradouro_empresa_box.innerHTML += logradouro_empresa;
              logradouro_empresa_cadastro.innerHTML = "Logradouro";

              //Cidade da empresa
              var cidade_empresa = json.cidade;
              inputCidade.remove();
              cidade_empresa_box.innerHTML += cidade_empresa;
              cidade_empresa_cadastro.innerHTML = "Cidade";

              //Estado da empresa
              var estado_empresa = json.estado;
              inputUF.remove();
              estado_empresa_box.innerHTML += estado_empresa;
              estado_empresa_cadastro.innerHTML = "UF";

              //Cep da empresa
              var cep_empresa = Number(json.cep);
              inputCEP.remove();
              cep_empresa_box.innerHTML += cep_empresa;
              cep_empresa_cadastro.innerHTML = "CEP";

              //Bairro da empresa
              var bairro_empresa = json.bairro;
              inputBairro.remove();
              bairro_empresa_box.innerHTML += bairro_empresa;

              //Complemento da empresa
              var complemento_empresa = json.complemento;
              inputComplemento.remove();
              complemento_empresa_box.innerHTML += complemento_empresa;

              btn_cadastrar_empresa.remove();
              document.getElementById(
                "container_filho_empresa"
              ).style.marginLeft = "17vw";
              document.getElementById("titulo_2_empresa").style.marginLeft =
                "12vw";
            });
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
    
  }

  function buscarDadoFuncionario() {
    var idEmpresa = sessionStorage.ID_EMPRESA;
  fetch(`/funcionario/listarFuncionario/${idEmpresa}`)
    .then(function (resposta) {
      console.log('estou na Buscarfuncionario()',resposta);
      if (resposta.ok) {
        if (resposta.status == 204) {
          var tabelaFuncionarios = document.getElementById("tabela_funcionarios");
          var mensagem = document.createElement("span");
          mensagem.classList.add('mensagem');
          mensagem.innerHTML = "Nenhum resultado encontrado.";
          tabelaFuncionarios.appendChild(mensagem);
          throw "Nenhum resultado encontrado!!";
        }

        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          var tabelaFuncionarios = document.getElementById("tabela_funcionarios");
          tabelaFuncionarios.innerHTML = "<h3>FUNCIONÁRIOS</h3>";
          for (let i = 0; i < resposta.length; i++) {
            var publicacao = resposta[i];

            // criando e manipulando elementos do HTML via JavaScript

            tabelaFuncionarios.innerHTML+=`
                      
            <div class="func" id="${i}">
                    <div class="estilo-atributos">
                      <h5>Login:</h5>
                      <p>${publicacao.username}</p>
                    </div>
                    <div class="estilo-atributos">
                      <h5>Senha:</h5>
                      <p>${publicacao.senha}</p>
                    </div>
                    <div class="estilo-atributos">
                      <h5>Nome Completo:</h5>
                      <p>${publicacao.nome}</p>
                    </div>
                    <div class="estilo-atributos">
                      <h5>Email:</h5>
                      <p>${publicacao.email}</p>
                    </div>
                    <div class="estilo-atributos">
                      <h5>Telefone:</h5>
                      <p>${publicacao.telefone}</p>
                    </div>
                    <div class="estilo-atributos">
                      <h5>Função:</h5>
                      <p>${publicacao.funcao}</p>
                    </div>
                    <button class="removerCard" onclick="removerCard(${i})">Remover</button>
                </div>
                  `;
          }
        });
      } else {
        throw console.log('Estou na buscarDadosFuncionario()',JSON.stringify(resposta));
      }
    })
    .catch(function (resposta) {
      console.log(resposta);
    });
  }