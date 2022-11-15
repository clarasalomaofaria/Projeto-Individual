
 b_usuario.innerHTML = sessionStorage.NOME_USUARIO


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

  //QUESTAO 01 ESCOLHA 01

 function cadastrarQ1E1() {

   sessionStorage.BTNCLICK1 = 1
   var idUsuario = sessionStorage.ID_USUARIO;
//    sessionStorage.BTN1 = 1
   var idValor = sessionStorage.BTNCLICK1

   // Enviando o valor da nova input
   fetch("/votos/cadastrarVotoQ1E1", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       // crie um atributo que recebe o valor recuperado aqui
       // Agora vá para o arquivo routes/usuario.js
       usuarioServer: idUsuario,
       valorServer: idValor
     })
   }).then(function (resposta) {

     console.log("resposta: ", resposta);

     if (resposta.ok) {
       // alert('SUCESSO!')
       listarQ1E1()
       listarQ1E1Other()
       console.log('chamando função listarQ1E1')

     } else {
       console.log("Erro!" + resposta);
     }
   }).catch(function (resposta) {
     console.log(`#ERRO: ${resposta}`);
     // finalizarAguardar();
   });
   
   return false;
 }
 
 
   listarQ1E1();
   listarQ1E1Other();

 function listarQ1E1() {
   if (sessionStorage.BTNCLICK1 == 1) {
     fetch(`/votos/listarQ1E1?id=${sessionStorage.BTNCLICK1}`).then(function (resposta) {
       if (resposta.ok) {

         resposta.json().then(function (resposta) {
           console.log("Dados recebidos: ", JSON.stringify(resposta));

           for (let i = 0; i < resposta.length; i++) {
             var valor = resposta[i];

             const q1e1 = document.getElementById('q1e1')
             q1e1.disabled = true;

             q1e1.textContent = `${valor.porcentagem}%`;

             var Votosq1e1 = document.createElement("div");
             Votosq1e1.className = "button-quiz-info-top"
             Votosq1e1.innerHTML = `<br>${valor.votos} votos`;
             q1e1.appendChild(Votosq1e1);

             var Textoq1e1 = document.createElement("div");
             Textoq1e1.innerHTML = `<br>${valor.valor}`;
             Textoq1e1.className = "button-quiz-info-bottom"
             q1e1.appendChild(Textoq1e1);


             var check = document.createElement("div");
             check.className = "checkImg"
             check.innerHTML = `<br>⇧`;
             q1e1.appendChild(check);
           }

         });
       } else {
         throw ('Houve um erro na API!');
       }
     }).catch(function (resposta) {
       console.error(resposta);
       finalizarAguardar();
     });
   }
 }


 function listarQ1E1Other() {

   if (sessionStorage.BTNCLICK1 == 1) {
     fetch(`/votos/listarQ1E1Other?id=${sessionStorage.BTNCLICK1}`).then(function (resposta) {
       if (resposta.ok) {

         resposta.json().then(function (resposta) {
           console.log("Dados recebidos: ", JSON.stringify(resposta));

           for (let i = 0; i < resposta.length; i++) {
             var valor = resposta[i];

             const q1e2 = document.getElementById('q1e2')
             q1e2.disabled = true;

             q1e2.classList.add("naoEscolhidoBlue");

             q1e2.textContent = `${valor.porcentagem}%`;

             var Votosq1e2Other = document.createElement("div");
             Votosq1e2Other.className = "button-quiz-info-top"
             Votosq1e2Other.innerHTML = `<br>${valor.votos} votos`;
             q1e2.appendChild(Votosq1e2Other);

             var Textoq1e2Other = document.createElement("div");
             Textoq1e2Other.innerHTML = `<br>${valor.valor}`;
             Textoq1e2Other.className = "button-quiz-info-bottom"
             q1e2.appendChild(Textoq1e2Other);

           }

         });
       } else {
         throw ('Houve um erro na API!');
       }
     }).catch(function (resposta) {
       console.error(resposta);
       finalizarAguardar();
     });
   }
   
 }

 //QUESTAO 01 ESCOLHA 02

 function cadastrarQ1E2() {

    sessionStorage.BTNCLICK1 = 2
    var idUsuario = sessionStorage.ID_USUARIO;
    // sessionStorage.BTN2 = 2
    var idValor = sessionStorage.BTNCLICK1
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ1E2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        usuarioServer: idUsuario,
        valorServer: idValor
      })
    }).then(function (resposta) {
 
      console.log("resposta: ", resposta);
 
      if (resposta.ok) {
        // alert('SUCESSO!')
        listarQ1E2()
        listarQ1E2Other()
        console.log('chamando função listarQ1E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ1E2();
    listarQ1E2Other();
 
  function listarQ1E2() {
    if (sessionStorage.BTNCLICK1 == 2) {
      fetch(`/votos/listarQ1E2?id=${sessionStorage.BTNCLICK1}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q1e2 = document.getElementById('q1e2')
              q1e2.disabled = true;
 
              q1e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq1e2 = document.createElement("div");
              Votosq1e2.className = "button-quiz-info-top"
              Votosq1e2.innerHTML = `<br>${valor.votos} votos`;
              q1e2.appendChild(Votosq1e2);
 
              var Textoq1e2 = document.createElement("div");
              Textoq1e2.innerHTML = `<br>${valor.valor}`;
              Textoq1e2.className = "button-quiz-info-bottom"
              q1e2.appendChild(Textoq1e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q1e2.appendChild(check);
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
  }
 
 
  function listarQ1E2Other() {
 
    if (sessionStorage.BTNCLICK1 == 2) {
      fetch(`/votos/listarQ1E2Other?id=${sessionStorage.BTNCLICK1}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q1e1 = document.getElementById('q1e1')
              q1e1.disabled = true;
 
              q1e1.classList.add("naoEscolhidoRed");
 
              q1e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq1e1Other = document.createElement("div");
              Votosq1e1Other.className = "button-quiz-info-top"
              Votosq1e1Other.innerHTML = `<br>${valor.votos} votos`;
              q1e1.appendChild(Votosq1e1Other);
 
              var Textoq1e1Other = document.createElement("div");
              Textoq1e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq1e1Other.className = "button-quiz-info-bottom"
              q1e1.appendChild(Textoq1e1Other);
 
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
    
  }

    //QUESTAO 02 ESCOLHA 01

 function cadastrarQ2E1() {

    //BTNCLICK2 = QUESTAO 02 ; O VALOR É 3 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK2 = 3
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK2
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ2E1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        usuarioServer: idUsuario,
        valorServer: idValor
      })
    }).then(function (resposta) {
 
      console.log("resposta: ", resposta);
 
      if (resposta.ok) {
        // alert('SUCESSO!')
        listarQ1E1()
        listarQ1E1Other()
        console.log('chamando função listarQ2E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ2E1();
    listarQ2E1Other();
 
  function listarQ2E1() {
    if (sessionStorage.BTNCLICK2 == 3) {
      fetch(`/votos/listarQ2E1?id=${sessionStorage.BTNCLICK2}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q2e1 = document.getElementById('q2e1')
              q2e1.disabled = true;
 
              q2e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq2e1 = document.createElement("div");
              Votosq2e1.className = "button-quiz-info-top"
              Votosq2e1.innerHTML = `<br>${valor.votos} votos`;
              q2e1.appendChild(Votosq2e1);
 
              var Textoq2e1 = document.createElement("div");
              Textoq2e1.innerHTML = `<br>${valor.valor}`;
              Textoq2e1.className = "button-quiz-info-bottom"
              q2e1.appendChild(Textoq2e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q2e1.appendChild(check);
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
  }
 
 
  function listarQ2E1Other() {
 
    if (sessionStorage.BTNCLICK2 == 3) {
      fetch(`/votos/listarQ2E1Other?id=${sessionStorage.BTNCLICK2}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q2e2 = document.getElementById('q2e2')
              q2e2.disabled = true;
 
              q2e2.classList.add("naoEscolhidoBlue");
 
              q2e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq2e2Other = document.createElement("div");
              Votosq2e2Other.className = "button-quiz-info-top"
              Votosq2e2Other.innerHTML = `<br>${valor.votos} votos`;
              q2e2.appendChild(Votosq2e2Other);
 
              var Textoq2e2Other = document.createElement("div");
              Textoq2e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq2e2Other.className = "button-quiz-info-bottom"
              q2e2.appendChild(Textoq2e2Other);
 
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
    
  }

     //QUESTAO 02 ESCOLHA 02

 function cadastrarQ2E2() {

    //BTNCLICK2 = QUESTAO 02 ; O VALOR É 4 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK2 = 4
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK2
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ2E2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        usuarioServer: idUsuario,
        valorServer: idValor
      })
    }).then(function (resposta) {
 
      console.log("resposta: ", resposta);
 
      if (resposta.ok) {
        // alert('SUCESSO!')
        listarQ1E1()
        listarQ1E1Other()
        console.log('chamando função listarQ2E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ2E2();
    listarQ2E2Other();
 
  function listarQ2E2() {
    if (sessionStorage.BTNCLICK2 == 4) {
      fetch(`/votos/listarQ2E2?id=${sessionStorage.BTNCLICK2}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q2e2 = document.getElementById('q2e2')
              q2e2.disabled = true;
 
              q2e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq2e2 = document.createElement("div");
              Votosq2e2.className = "button-quiz-info-top"
              Votosq2e2.innerHTML = `<br>${valor.votos} votos`;
              q2e2.appendChild(Votosq2e2);
 
              var Textoq2e2 = document.createElement("div");
              Textoq2e2.innerHTML = `<br>${valor.valor}`;
              Textoq2e2.className = "button-quiz-info-bottom"
              q2e2.appendChild(Textoq2e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q2e2.appendChild(check);
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
  }
 
 
  function listarQ2E2Other() {
 
    if (sessionStorage.BTNCLICK2 == 4) {
      fetch(`/votos/listarQ2E2Other?id=${sessionStorage.BTNCLICK2}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q2e1 = document.getElementById('q2e1')
              q2e1.disabled = true;
 
              q2e1.classList.add("naoEscolhidoRed");
 
              q2e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq2e1Other = document.createElement("div");
              Votosq2e1Other.className = "button-quiz-info-top"
              Votosq2e1Other.innerHTML = `<br>${valor.votos} votos`;
              q2e1.appendChild(Votosq2e1Other);
 
              var Textoq2e1Other = document.createElement("div");
              Textoq2e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq2e1Other.className = "button-quiz-info-bottom"
              q2e1.appendChild(Textoq2e1Other);
 
            }
 
          });
        } else {
          throw ('Houve um erro na API!');
        }
      }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
      });
    }
    
  }