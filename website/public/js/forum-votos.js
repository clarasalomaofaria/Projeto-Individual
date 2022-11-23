
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
        listarQ2E1()
        listarQ2E1Other()
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
        listarQ2E2()
        listarQ2E2Other()
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

    //QUESTAO 03 ESCOLHA 01

 function cadastrarQ3E1() {

    //BTNCLICK3 = QUESTAO 03 ; O VALOR É 5 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK3 = 5
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK3
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ3E1", {
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
        listarQ3E1()
        listarQ3E1Other()
        console.log('chamando função listarQ3E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ3E1();
    listarQ3E1Other();
 
  function listarQ3E1() {
    if (sessionStorage.BTNCLICK3 == 5) {
      fetch(`/votos/listarQ3E1?id=${sessionStorage.BTNCLICK3}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q3e1 = document.getElementById('q3e1')
              q3e1.disabled = true;
 
              q3e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq3e1 = document.createElement("div");
              Votosq3e1.className = "button-quiz-info-top"
              Votosq3e1.innerHTML = `<br>${valor.votos} votos`;
              q3e1.appendChild(Votosq3e1);
 
              var Textoq3e1 = document.createElement("div");
              Textoq3e1.innerHTML = `<br>${valor.valor}`;
              Textoq3e1.className = "button-quiz-info-bottom"
              q3e1.appendChild(Textoq3e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q3e1.appendChild(check);
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
 
 
  function listarQ3E1Other() {
 
    if (sessionStorage.BTNCLICK3 == 5) {
      fetch(`/votos/listarQ3E1Other?id=${sessionStorage.BTNCLICK3}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q3e2 = document.getElementById('q3e2')
              q3e2.disabled = true;
 
              q3e2.classList.add("naoEscolhidoBlue");
 
              q3e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq3e2Other = document.createElement("div");
              Votosq3e2Other.className = "button-quiz-info-top"
              Votosq3e2Other.innerHTML = `<br>${valor.votos} votos`;
              q3e2.appendChild(Votosq3e2Other);
 
              var Textoq3e2Other = document.createElement("div");
              Textoq3e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq3e2Other.className = "button-quiz-info-bottom"
              q3e2.appendChild(Textoq3e2Other);
 
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

     //QUESTAO 03 ESCOLHA 02

 function cadastrarQ3E2() {

    //BTNCLICK3 = QUESTAO 03 ; O VALOR É 6 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK3 = 6
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK3
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ3E2", {
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
        listarQ3E2()
        listarQ3E2Other()
        console.log('chamando função listarQ3E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ3E2();
    listarQ3E2Other();
 
  function listarQ3E2() {
    if (sessionStorage.BTNCLICK3 == 6) {
      fetch(`/votos/listarQ3E2?id=${sessionStorage.BTNCLICK3}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q3e2 = document.getElementById('q3e2')
              q3e2.disabled = true;
 
              q3e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq3e2 = document.createElement("div");
              Votosq3e2.className = "button-quiz-info-top"
              Votosq3e2.innerHTML = `<br>${valor.votos} votos`;
              q3e2.appendChild(Votosq3e2);
 
              var Textoq3e2 = document.createElement("div");
              Textoq3e2.innerHTML = `<br>${valor.valor}`;
              Textoq3e2.className = "button-quiz-info-bottom"
              q3e2.appendChild(Textoq3e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q3e2.appendChild(check);
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
 
 
  function listarQ3E2Other() {
 
    if (sessionStorage.BTNCLICK3 == 6) {
      fetch(`/votos/listarQ3E2Other?id=${sessionStorage.BTNCLICK3}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q3e1 = document.getElementById('q3e1')
              q3e1.disabled = true;
 
              q3e1.classList.add("naoEscolhidoRed");
 
              q3e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq3e1Other = document.createElement("div");
              Votosq3e1Other.className = "button-quiz-info-top"
              Votosq3e1Other.innerHTML = `<br>${valor.votos} votos`;
              q3e1.appendChild(Votosq3e1Other);
 
              var Textoq3e1Other = document.createElement("div");
              Textoq3e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq3e1Other.className = "button-quiz-info-bottom"
              q3e1.appendChild(Textoq3e1Other);
 
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


      //QUESTAO 04 ESCOLHA 01

 function cadastrarQ4E1() {

    //BTNCLICK4 = QUESTAO 04 ; O VALOR É 7 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK4 = 7
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK4
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ4E1", {
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
        listarQ4E1()
        listarQ4E1Other()
        console.log('chamando função listarQ4E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ4E1();
    listarQ4E1Other();
 
  function listarQ4E1() {
    if (sessionStorage.BTNCLICK4 == 7) {
      fetch(`/votos/listarQ4E1?id=${sessionStorage.BTNCLICK4}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q4e1 = document.getElementById('q4e1')
              q4e1.disabled = true;
 
              q4e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq4e1 = document.createElement("div");
              Votosq4e1.className = "button-quiz-info-top"
              Votosq4e1.innerHTML = `<br>${valor.votos} votos`;
              q4e1.appendChild(Votosq4e1);
 
              var Textoq4e1 = document.createElement("div");
              Textoq4e1.innerHTML = `<br>${valor.valor}`;
              Textoq4e1.className = "button-quiz-info-bottom"
              q4e1.appendChild(Textoq4e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q4e1.appendChild(check);
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
 
 
  function listarQ4E1Other() {
 
    if (sessionStorage.BTNCLICK4 == 7) {
      fetch(`/votos/listarQ4E1Other?id=${sessionStorage.BTNCLICK4}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q4e2 = document.getElementById('q4e2')
              q4e2.disabled = true;
 
              q4e2.classList.add("naoEscolhidoBlue");
 
              q4e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq4e2Other = document.createElement("div");
              Votosq4e2Other.className = "button-quiz-info-top"
              Votosq4e2Other.innerHTML = `<br>${valor.votos} votos`;
              q4e2.appendChild(Votosq4e2Other);
 
              var Textoq4e2Other = document.createElement("div");
              Textoq4e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq4e2Other.className = "button-quiz-info-bottom"
              q4e2.appendChild(Textoq4e2Other);
 
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

     //QUESTAO 04 ESCOLHA 02

 function cadastrarQ4E2() {

    //BTNCLICK4 = QUESTAO 04 ; O VALOR É 8 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK4 = 8
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK4
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ4E2", {
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
        listarQ4E2()
        listarQ4E2Other()
        console.log('chamando função listarQ4E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ4E2();
    listarQ4E2Other();
 
  function listarQ4E2() {
    if (sessionStorage.BTNCLICK4 == 8) {
      fetch(`/votos/listarQ4E2?id=${sessionStorage.BTNCLICK4}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q4e2 = document.getElementById('q4e2')
              q4e2.disabled = true;
 
              q4e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq4e2 = document.createElement("div");
              Votosq4e2.className = "button-quiz-info-top"
              Votosq4e2.innerHTML = `<br>${valor.votos} votos`;
              q4e2.appendChild(Votosq4e2);
 
              var Textoq4e2 = document.createElement("div");
              Textoq4e2.innerHTML = `<br>${valor.valor}`;
              Textoq4e2.className = "button-quiz-info-bottom"
              q4e2.appendChild(Textoq4e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q4e2.appendChild(check);
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
 
 
  function listarQ4E2Other() {
 
    if (sessionStorage.BTNCLICK4 == 8) {
      fetch(`/votos/listarQ4E2Other?id=${sessionStorage.BTNCLICK4}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q4e1 = document.getElementById('q4e1')
              q4e1.disabled = true;
 
              q4e1.classList.add("naoEscolhidoRed");
 
              q4e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq4e1Other = document.createElement("div");
              Votosq4e1Other.className = "button-quiz-info-top"
              Votosq4e1Other.innerHTML = `<br>${valor.votos} votos`;
              q4e1.appendChild(Votosq4e1Other);
 
              var Textoq4e1Other = document.createElement("div");
              Textoq4e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq4e1Other.className = "button-quiz-info-bottom"
              q4e1.appendChild(Textoq4e1Other);
 
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

        //QUESTAO 05 ESCOLHA 01

 function cadastrarQ5E1() {

    //BTNCLICK5 = QUESTAO 05 ; O VALOR É 9 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK5 = 9
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK5
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ5E1", {
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
        listarQ5E1()
        listarQ5E1Other()
        console.log('chamando função listarQ5E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ5E1();
    listarQ5E1Other();
 
  function listarQ5E1() {
    if (sessionStorage.BTNCLICK5 == 9) {
      fetch(`/votos/listarQ5E1?id=${sessionStorage.BTNCLICK5}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q5e1 = document.getElementById('q5e1')
              q5e1.disabled = true;
 
              q5e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq5e1 = document.createElement("div");
              Votosq5e1.className = "button-quiz-info-top"
              Votosq5e1.innerHTML = `<br>${valor.votos} votos`;
              q5e1.appendChild(Votosq5e1);
 
              var Textoq5e1 = document.createElement("div");
              Textoq5e1.innerHTML = `<br>${valor.valor}`;
              Textoq5e1.className = "button-quiz-info-bottom"
              q5e1.appendChild(Textoq5e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q5e1.appendChild(check);
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
 
 
  function listarQ5E1Other() {
 
    if (sessionStorage.BTNCLICK5 == 9) {
      fetch(`/votos/listarQ5E1Other?id=${sessionStorage.BTNCLICK5}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q5e2 = document.getElementById('q5e2')
              q5e2.disabled = true;
 
              q5e2.classList.add("naoEscolhidoBlue");
 
              q5e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq5e2Other = document.createElement("div");
              Votosq5e2Other.className = "button-quiz-info-top"
              Votosq5e2Other.innerHTML = `<br>${valor.votos} votos`;
              q5e2.appendChild(Votosq5e2Other);
 
              var Textoq5e2Other = document.createElement("div");
              Textoq5e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq5e2Other.className = "button-quiz-info-bottom"
              q5e2.appendChild(Textoq5e2Other);
 
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

     //QUESTAO 05 ESCOLHA 02

 function cadastrarQ5E2() {

    //BTNCLICK5 = QUESTAO 05 ; O VALOR É 10 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK5 = 10
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK5
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ5E2", {
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
        listarQ5E2()
        listarQ5E2Other()
        console.log('chamando função listarQ5E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ5E2();
    listarQ5E2Other();
 
  function listarQ5E2() {
    if (sessionStorage.BTNCLICK5 == 10) {
      fetch(`/votos/listarQ5E2?id=${sessionStorage.BTNCLICK5}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q5e2 = document.getElementById('q5e2')
              q5e2.disabled = true;
 
              q5e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq5e2 = document.createElement("div");
              Votosq5e2.className = "button-quiz-info-top"
              Votosq5e2.innerHTML = `<br>${valor.votos} votos`;
              q5e2.appendChild(Votosq5e2);
 
              var Textoq5e2 = document.createElement("div");
              Textoq5e2.innerHTML = `<br>${valor.valor}`;
              Textoq5e2.className = "button-quiz-info-bottom"
              q5e2.appendChild(Textoq5e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q5e2.appendChild(check);
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
 
 
  function listarQ5E2Other() {
 
    if (sessionStorage.BTNCLICK5 == 10) {
      fetch(`/votos/listarQ5E2Other?id=${sessionStorage.BTNCLICK5}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q5e1 = document.getElementById('q5e1')
              q5e1.disabled = true;
 
              q5e1.classList.add("naoEscolhidoRed");
 
              q5e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq5e1Other = document.createElement("div");
              Votosq5e1Other.className = "button-quiz-info-top"
              Votosq5e1Other.innerHTML = `<br>${valor.votos} votos`;
              q5e1.appendChild(Votosq5e1Other);
 
              var Textoq5e1Other = document.createElement("div");
              Textoq5e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq5e1Other.className = "button-quiz-info-bottom"
              q5e1.appendChild(Textoq5e1Other);
 
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

         //QUESTAO 06 ESCOLHA 01

 function cadastrarQ6E1() {

    //BTNCLICK6 = QUESTAO 06 ; O VALOR É 11 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK6 = 11
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK6
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ6E1", {
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
        listarQ6E1()
        listarQ6E1Other()
        console.log('chamando função listarQ6E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ6E1();
    listarQ6E1Other();
 
  function listarQ6E1() {
    if (sessionStorage.BTNCLICK6 == 11) {
      fetch(`/votos/listarQ6E1?id=${sessionStorage.BTNCLICK6}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q6e1 = document.getElementById('q6e1')
              q6e1.disabled = true;
 
              q6e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq6e1 = document.createElement("div");
              Votosq6e1.className = "button-quiz-info-top"
              Votosq6e1.innerHTML = `<br>${valor.votos} votos`;
              q6e1.appendChild(Votosq6e1);
 
              var Textoq6e1 = document.createElement("div");
              Textoq6e1.innerHTML = `<br>${valor.valor}`;
              Textoq6e1.className = "button-quiz-info-bottom"
              q6e1.appendChild(Textoq6e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q6e1.appendChild(check);
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
 
 
  function listarQ6E1Other() {
 
    if (sessionStorage.BTNCLICK6 == 11) {
      fetch(`/votos/listarQ6E1Other?id=${sessionStorage.BTNCLICK6}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q6e2 = document.getElementById('q6e2')
              q6e2.disabled = true;
 
              q6e2.classList.add("naoEscolhidoBlue");
 
              q6e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq6e2Other = document.createElement("div");
              Votosq6e2Other.className = "button-quiz-info-top"
              Votosq6e2Other.innerHTML = `<br>${valor.votos} votos`;
              q6e2.appendChild(Votosq6e2Other);
 
              var Textoq6e2Other = document.createElement("div");
              Textoq6e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq6e2Other.className = "button-quiz-info-bottom"
              q6e2.appendChild(Textoq6e2Other);
 
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

     //QUESTAO 06 ESCOLHA 02

 function cadastrarQ6E2() {

    //BTNCLICK6 = QUESTAO 06 ; O VALOR É 12 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK6 = 12
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK6
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ6E2", {
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
        listarQ6E2()
        listarQ6E2Other()
        console.log('chamando função listarQ6E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ6E2();
    listarQ6E2Other();
 
  function listarQ6E2() {
    if (sessionStorage.BTNCLICK6 == 12) {
      fetch(`/votos/listarQ6E2?id=${sessionStorage.BTNCLICK6}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q6e2 = document.getElementById('q6e2')
              q6e2.disabled = true;
 
              q6e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq6e2 = document.createElement("div");
              Votosq6e2.className = "button-quiz-info-top"
              Votosq6e2.innerHTML = `<br>${valor.votos} votos`;
              q6e2.appendChild(Votosq6e2);
 
              var Textoq6e2 = document.createElement("div");
              Textoq6e2.innerHTML = `<br>${valor.valor}`;
              Textoq6e2.className = "button-quiz-info-bottom"
              q6e2.appendChild(Textoq6e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q6e2.appendChild(check);
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
 
 
  function listarQ6E2Other() {
 
    if (sessionStorage.BTNCLICK6 == 12) {
      fetch(`/votos/listarQ6E2Other?id=${sessionStorage.BTNCLICK6}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q6e1 = document.getElementById('q6e1')
              q6e1.disabled = true;
 
              q6e1.classList.add("naoEscolhidoRed");
 
              q6e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq6e1Other = document.createElement("div");
              Votosq6e1Other.className = "button-quiz-info-top"
              Votosq6e1Other.innerHTML = `<br>${valor.votos} votos`;
              q6e1.appendChild(Votosq6e1Other);
 
              var Textoq6e1Other = document.createElement("div");
              Textoq6e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq6e1Other.className = "button-quiz-info-bottom"
              q6e1.appendChild(Textoq6e1Other);
 
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

           //QUESTAO 07 ESCOLHA 01

 function cadastrarQ7E1() {

    //BTNCLICK7 = QUESTAO 07 ; O VALOR É 13 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK7 = 13
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK7
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ7E1", {
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
        listarQ7E1()
        listarQ7E1Other()
        console.log('chamando função listarQ7E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ7E1();
    listarQ7E1Other();
 
  function listarQ7E1() {
    if (sessionStorage.BTNCLICK7 == 13) {
      fetch(`/votos/listarQ7E1?id=${sessionStorage.BTNCLICK7}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q7e1 = document.getElementById('q7e1')
              q7e1.disabled = true;
 
              q7e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq7e1 = document.createElement("div");
              Votosq7e1.className = "button-quiz-info-top"
              Votosq7e1.innerHTML = `<br>${valor.votos} votos`;
              q7e1.appendChild(Votosq7e1);
 
              var Textoq7e1 = document.createElement("div");
              Textoq7e1.innerHTML = `<br>${valor.valor}`;
              Textoq7e1.className = "button-quiz-info-bottom"
              q7e1.appendChild(Textoq7e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q7e1.appendChild(check);
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
 
 
  function listarQ7E1Other() {
 
    if (sessionStorage.BTNCLICK7 == 13) {
      fetch(`/votos/listarQ7E1Other?id=${sessionStorage.BTNCLICK7}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q7e2 = document.getElementById('q7e2')
              q7e2.disabled = true;
 
              q7e2.classList.add("naoEscolhidoBlue");
 
              q7e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq7e2Other = document.createElement("div");
              Votosq7e2Other.className = "button-quiz-info-top"
              Votosq7e2Other.innerHTML = `<br>${valor.votos} votos`;
              q7e2.appendChild(Votosq7e2Other);
 
              var Textoq7e2Other = document.createElement("div");
              Textoq7e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq7e2Other.className = "button-quiz-info-bottom"
              q7e2.appendChild(Textoq7e2Other);
 
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

     //QUESTAO 07 ESCOLHA 02

 function cadastrarQ7E2() {

    //BTNCLICK7 = QUESTAO 07 ; O VALOR É 14 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK7 = 14
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK7
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ7E2", {
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
        listarQ7E2()
        listarQ7E2Other()
        console.log('chamando função listarQ7E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ7E2();
    listarQ7E2Other();
 
  function listarQ7E2() {
    if (sessionStorage.BTNCLICK7 == 14) {
      fetch(`/votos/listarQ7E2?id=${sessionStorage.BTNCLICK7}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q7e2 = document.getElementById('q7e2')
              q7e2.disabled = true;
 
              q7e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq7e2 = document.createElement("div");
              Votosq7e2.className = "button-quiz-info-top"
              Votosq7e2.innerHTML = `<br>${valor.votos} votos`;
              q7e2.appendChild(Votosq7e2);
 
              var Textoq7e2 = document.createElement("div");
              Textoq7e2.innerHTML = `<br>${valor.valor}`;
              Textoq7e2.className = "button-quiz-info-bottom"
              q7e2.appendChild(Textoq7e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q7e2.appendChild(check);
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
 
 
  function listarQ7E2Other() {
 
    if (sessionStorage.BTNCLICK7 == 14) {
      fetch(`/votos/listarQ7E2Other?id=${sessionStorage.BTNCLICK7}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q7e1 = document.getElementById('q7e1')
              q7e1.disabled = true;
 
              q7e1.classList.add("naoEscolhidoRed");
 
              q7e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq7e1Other = document.createElement("div");
              Votosq7e1Other.className = "button-quiz-info-top"
              Votosq7e1Other.innerHTML = `<br>${valor.votos} votos`;
              q7e1.appendChild(Votosq7e1Other);
 
              var Textoq7e1Other = document.createElement("div");
              Textoq7e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq7e1Other.className = "button-quiz-info-bottom"
              q7e1.appendChild(Textoq7e1Other);
 
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

          //QUESTAO 08 ESCOLHA 01

 function cadastrarQ8E1() {

    //BTNCLICK8 = QUESTAO 08 ; O VALOR É 15 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK8 = 15
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK8
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ8E1", {
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
        listarQ8E1()
        listarQ8E1Other()
        console.log('chamando função listarQ8E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ8E1();
    listarQ8E1Other();
 
  function listarQ8E1() {
    if (sessionStorage.BTNCLICK8 == 15) {
      fetch(`/votos/listarQ8E1?id=${sessionStorage.BTNCLICK8}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q8e1 = document.getElementById('q8e1')
              q8e1.disabled = true;
 
              q8e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq8e1 = document.createElement("div");
              Votosq8e1.className = "button-quiz-info-top"
              Votosq8e1.innerHTML = `<br>${valor.votos} votos`;
              q8e1.appendChild(Votosq8e1);
 
              var Textoq8e1 = document.createElement("div");
              Textoq8e1.innerHTML = `<br>${valor.valor}`;
              Textoq8e1.className = "button-quiz-info-bottom"
              q8e1.appendChild(Textoq8e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q8e1.appendChild(check);
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
 
 
  function listarQ8E1Other() {
 
    if (sessionStorage.BTNCLICK8 == 15) {
      fetch(`/votos/listarQ8E1Other?id=${sessionStorage.BTNCLICK8}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q8e2 = document.getElementById('q8e2')
              q8e2.disabled = true;
 
              q8e2.classList.add("naoEscolhidoBlue");
 
              q8e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq8e2Other = document.createElement("div");
              Votosq8e2Other.className = "button-quiz-info-top"
              Votosq8e2Other.innerHTML = `<br>${valor.votos} votos`;
              q8e2.appendChild(Votosq8e2Other);
 
              var Textoq8e2Other = document.createElement("div");
              Textoq8e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq8e2Other.className = "button-quiz-info-bottom"
              q8e2.appendChild(Textoq8e2Other);
 
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

     //QUESTAO 08 ESCOLHA 02

 function cadastrarQ8E2() {

    //BTNCLICK8 = QUESTAO 08 ; O VALOR É 16 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK8 = 16
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK8
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ8E2", {
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
        listarQ8E2()
        listarQ8E2Other()
        console.log('chamando função listarQ8E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ8E2();
    listarQ8E2Other();
 
  function listarQ8E2() {
    if (sessionStorage.BTNCLICK8 == 16) {
      fetch(`/votos/listarQ8E2?id=${sessionStorage.BTNCLICK8}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q8e2 = document.getElementById('q8e2')
              q8e2.disabled = true;
 
              q8e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq8e2 = document.createElement("div");
              Votosq8e2.className = "button-quiz-info-top"
              Votosq8e2.innerHTML = `<br>${valor.votos} votos`;
              q8e2.appendChild(Votosq8e2);
 
              var Textoq8e2 = document.createElement("div");
              Textoq8e2.innerHTML = `<br>${valor.valor}`;
              Textoq8e2.className = "button-quiz-info-bottom"
              q8e2.appendChild(Textoq8e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q8e2.appendChild(check);
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
 
 
  function listarQ8E2Other() {
 
    if (sessionStorage.BTNCLICK8 == 16) {
      fetch(`/votos/listarQ8E2Other?id=${sessionStorage.BTNCLICK8}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q8e1 = document.getElementById('q8e1')
              q8e1.disabled = true;
 
              q8e1.classList.add("naoEscolhidoRed");
 
              q8e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq8e1Other = document.createElement("div");
              Votosq8e1Other.className = "button-quiz-info-top"
              Votosq8e1Other.innerHTML = `<br>${valor.votos} votos`;
              q8e1.appendChild(Votosq8e1Other);
 
              var Textoq8e1Other = document.createElement("div");
              Textoq8e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq8e1Other.className = "button-quiz-info-bottom"
              q8e1.appendChild(Textoq8e1Other);
 
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


        //QUESTAO 09 ESCOLHA 01

 function cadastrarQ9E1() {

    //BTNCLICK9 = QUESTAO 09 ; O VALOR É 17 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK9 = 17
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK9
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ9E1", {
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
        listarQ9E1()
        listarQ9E1Other()
        console.log('chamando função listarQ9E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ9E1();
    listarQ9E1Other();
 
  function listarQ9E1() {
    if (sessionStorage.BTNCLICK9 == 17) {
      fetch(`/votos/listarQ9E1?id=${sessionStorage.BTNCLICK9}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q9e1 = document.getElementById('q9e1')
              q9e1.disabled = true;
 
              q9e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq9e1 = document.createElement("div");
              Votosq9e1.className = "button-quiz-info-top"
              Votosq9e1.innerHTML = `<br>${valor.votos} votos`;
              q9e1.appendChild(Votosq9e1);
 
              var Textoq9e1 = document.createElement("div");
              Textoq9e1.innerHTML = `<br>${valor.valor}`;
              Textoq9e1.className = "button-quiz-info-bottom"
              q9e1.appendChild(Textoq9e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q9e1.appendChild(check);
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
 
 
  function listarQ9E1Other() {
 
    if (sessionStorage.BTNCLICK9 == 17) {
      fetch(`/votos/listarQ9E1Other?id=${sessionStorage.BTNCLICK9}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q9e2 = document.getElementById('q9e2')
              q9e2.disabled = true;
 
              q9e2.classList.add("naoEscolhidoBlue");
 
              q9e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq9e2Other = document.createElement("div");
              Votosq9e2Other.className = "button-quiz-info-top"
              Votosq9e2Other.innerHTML = `<br>${valor.votos} votos`;
              q9e2.appendChild(Votosq9e2Other);
 
              var Textoq9e2Other = document.createElement("div");
              Textoq9e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq9e2Other.className = "button-quiz-info-bottom"
              q9e2.appendChild(Textoq9e2Other);
 
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

     //QUESTAO 09 ESCOLHA 02

 function cadastrarQ9E2() {

    //BTNCLICK9 = QUESTAO 09 ; O VALOR É 18 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK9 = 18
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK9
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ9E2", {
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
        listarQ9E2()
        listarQ9E2Other()
        console.log('chamando função listarQ9E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ9E2();
    listarQ9E2Other();
 
  function listarQ9E2() {
    if (sessionStorage.BTNCLICK9 == 18) {
      fetch(`/votos/listarQ9E2?id=${sessionStorage.BTNCLICK9}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q9e2 = document.getElementById('q9e2')
              q9e2.disabled = true;
 
              q9e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq9e2 = document.createElement("div");
              Votosq9e2.className = "button-quiz-info-top"
              Votosq9e2.innerHTML = `<br>${valor.votos} votos`;
              q9e2.appendChild(Votosq9e2);
 
              var Textoq9e2 = document.createElement("div");
              Textoq9e2.innerHTML = `<br>${valor.valor}`;
              Textoq9e2.className = "button-quiz-info-bottom"
              q9e2.appendChild(Textoq9e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q9e2.appendChild(check);
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
 
 
  function listarQ9E2Other() {
 
    if (sessionStorage.BTNCLICK9 == 18) {
      fetch(`/votos/listarQ9E2Other?id=${sessionStorage.BTNCLICK9}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q9e1 = document.getElementById('q9e1')
              q9e1.disabled = true;
 
              q9e1.classList.add("naoEscolhidoRed");
 
              q9e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq9e1Other = document.createElement("div");
              Votosq9e1Other.className = "button-quiz-info-top"
              Votosq9e1Other.innerHTML = `<br>${valor.votos} votos`;
              q9e1.appendChild(Votosq9e1Other);
 
              var Textoq9e1Other = document.createElement("div");
              Textoq9e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq9e1Other.className = "button-quiz-info-bottom"
              q9e1.appendChild(Textoq9e1Other);
 
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


       //QUESTAO 10 ESCOLHA 01

 function cadastrarQ10E1() {

    //BTNCLICK10 = QUESTAO 10 ; O VALOR É 19 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK10 = 19
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK10
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ10E1", {
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
        listarQ10E1()
        listarQ10E1Other()
        console.log('chamando função listarQ10E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ10E1();
    listarQ10E1Other();
 
  function listarQ10E1() {
    if (sessionStorage.BTNCLICK10 == 19) {
      fetch(`/votos/listarQ10E1?id=${sessionStorage.BTNCLICK10}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q10e1 = document.getElementById('q10e1')
              q10e1.disabled = true;
 
              q10e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq10e1 = document.createElement("div");
              Votosq10e1.className = "button-quiz-info-top"
              Votosq10e1.innerHTML = `<br>${valor.votos} votos`;
              q10e1.appendChild(Votosq10e1);
 
              var Textoq10e1 = document.createElement("div");
              Textoq10e1.innerHTML = `<br>${valor.valor}`;
              Textoq10e1.className = "button-quiz-info-bottom"
              q10e1.appendChild(Textoq10e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q10e1.appendChild(check);
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
 
 
  function listarQ10E1Other() {
 
    if (sessionStorage.BTNCLICK10 == 19) {
      fetch(`/votos/listarQ10E1Other?id=${sessionStorage.BTNCLICK10}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q10e2 = document.getElementById('q10e2')
              q10e2.disabled = true;
 
              q10e2.classList.add("naoEscolhidoBlue");
 
              q10e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq10e2Other = document.createElement("div");
              Votosq10e2Other.className = "button-quiz-info-top"
              Votosq10e2Other.innerHTML = `<br>${valor.votos} votos`;
              q10e2.appendChild(Votosq10e2Other);
 
              var Textoq10e2Other = document.createElement("div");
              Textoq10e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq10e2Other.className = "button-quiz-info-bottom"
              q10e2.appendChild(Textoq10e2Other);
 
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

     //QUESTAO 10 ESCOLHA 02

 function cadastrarQ10E2() {

    //BTNCLICK10 = QUESTAO 10 ; O VALOR É 20 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK10 = 20
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK10
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ10E2", {
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
        listarQ10E2()
        listarQ10E2Other()
        console.log('chamando função listarQ10E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ10E2();
    listarQ10E2Other();
 
  function listarQ10E2() {
    if (sessionStorage.BTNCLICK10 == 20) {
      fetch(`/votos/listarQ10E2?id=${sessionStorage.BTNCLICK10}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q10e2 = document.getElementById('q10e2')
              q10e2.disabled = true;
 
              q10e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq10e2 = document.createElement("div");
              Votosq10e2.className = "button-quiz-info-top"
              Votosq10e2.innerHTML = `<br>${valor.votos} votos`;
              q10e2.appendChild(Votosq10e2);
 
              var Textoq10e2 = document.createElement("div");
              Textoq10e2.innerHTML = `<br>${valor.valor}`;
              Textoq10e2.className = "button-quiz-info-bottom"
              q10e2.appendChild(Textoq10e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q10e2.appendChild(check);
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
 
 
  function listarQ10E2Other() {
 
    if (sessionStorage.BTNCLICK10 == 20) {
      fetch(`/votos/listarQ10E2Other?id=${sessionStorage.BTNCLICK10}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q10e1 = document.getElementById('q10e1')
              q10e1.disabled = true;
 
              q10e1.classList.add("naoEscolhidoRed");
 
              q10e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq10e1Other = document.createElement("div");
              Votosq10e1Other.className = "button-quiz-info-top"
              Votosq10e1Other.innerHTML = `<br>${valor.votos} votos`;
              q10e1.appendChild(Votosq10e1Other);
 
              var Textoq10e1Other = document.createElement("div");
              Textoq10e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq10e1Other.className = "button-quiz-info-bottom"
              q10e1.appendChild(Textoq10e1Other);
 
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

      //QUESTAO 11 ESCOLHA 01

 function cadastrarQ11E1() {

    //BTNCLICK11 = QUESTAO 11 ; O VALOR É 21 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK11 = 21
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK11
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ11E1", {
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
        listarQ11E1()
        listarQ11E1Other()
        console.log('chamando função listarQ11E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ11E1();
    listarQ11E1Other();
 
  function listarQ11E1() {
    if (sessionStorage.BTNCLICK11 == 21) {
      fetch(`/votos/listarQ11E1?id=${sessionStorage.BTNCLICK11}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q11e1 = document.getElementById('q11e1')
              q11e1.disabled = true;
 
              q11e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq11e1 = document.createElement("div");
              Votosq11e1.className = "button-quiz-info-top"
              Votosq11e1.innerHTML = `<br>${valor.votos} votos`;
              q11e1.appendChild(Votosq11e1);
 
              var Textoq11e1 = document.createElement("div");
              Textoq11e1.innerHTML = `<br>${valor.valor}`;
              Textoq11e1.className = "button-quiz-info-bottom"
              q11e1.appendChild(Textoq11e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q11e1.appendChild(check);
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
 
 
  function listarQ11E1Other() {
 
    if (sessionStorage.BTNCLICK11 == 21) {
      fetch(`/votos/listarQ11E1Other?id=${sessionStorage.BTNCLICK11}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q11e2 = document.getElementById('q11e2')
              q11e2.disabled = true;
 
              q11e2.classList.add("naoEscolhidoBlue");
 
              q11e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq11e2Other = document.createElement("div");
              Votosq11e2Other.className = "button-quiz-info-top"
              Votosq11e2Other.innerHTML = `<br>${valor.votos} votos`;
              q11e2.appendChild(Votosq11e2Other);
 
              var Textoq11e2Other = document.createElement("div");
              Textoq11e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq11e2Other.className = "button-quiz-info-bottom"
              q11e2.appendChild(Textoq11e2Other);
 
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

     //QUESTAO 11 ESCOLHA 02

 function cadastrarQ11E2() {

    //BTNCLICK11 = QUESTAO 11 ; O VALOR É 22 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK11 = 22
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK11
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ11E2", {
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
        listarQ11E2()
        listarQ11E2Other()
        console.log('chamando função listarQ11E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ11E2();
    listarQ11E2Other();
 
  function listarQ11E2() {
    if (sessionStorage.BTNCLICK11 == 22) {
      fetch(`/votos/listarQ11E2?id=${sessionStorage.BTNCLICK11}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q11e2 = document.getElementById('q11e2')
              q11e2.disabled = true;
 
              q11e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq11e2 = document.createElement("div");
              Votosq11e2.className = "button-quiz-info-top"
              Votosq11e2.innerHTML = `<br>${valor.votos} votos`;
              q11e2.appendChild(Votosq11e2);
 
              var Textoq11e2 = document.createElement("div");
              Textoq11e2.innerHTML = `<br>${valor.valor}`;
              Textoq11e2.className = "button-quiz-info-bottom"
              q11e2.appendChild(Textoq11e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q11e2.appendChild(check);
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
 
 
  function listarQ11E2Other() {
 
    if (sessionStorage.BTNCLICK11 == 22) {
      fetch(`/votos/listarQ11E2Other?id=${sessionStorage.BTNCLICK11}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q11e1 = document.getElementById('q11e1')
              q11e1.disabled = true;
 
              q11e1.classList.add("naoEscolhidoRed");
 
              q11e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq11e1Other = document.createElement("div");
              Votosq11e1Other.className = "button-quiz-info-top"
              Votosq11e1Other.innerHTML = `<br>${valor.votos} votos`;
              q11e1.appendChild(Votosq11e1Other);
 
              var Textoq11e1Other = document.createElement("div");
              Textoq11e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq11e1Other.className = "button-quiz-info-bottom"
              q11e1.appendChild(Textoq11e1Other);
 
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


   //QUESTAO 12 ESCOLHA 01

 function cadastrarQ12E1() {

    //BTNCLICK12 = QUESTAO 12 ; O VALOR É 23 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK12 = 23
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK12
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ12E1", {
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
        listarQ12E1()
        listarQ12E1Other()
        console.log('chamando função listarQ12E1')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ12E1();
    listarQ12E1Other();
 
  function listarQ12E1() {
    if (sessionStorage.BTNCLICK12 == 23) {
      fetch(`/votos/listarQ12E1?id=${sessionStorage.BTNCLICK12}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q12e1 = document.getElementById('q12e1')
              q12e1.disabled = true;
 
              q12e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq12e1 = document.createElement("div");
              Votosq12e1.className = "button-quiz-info-top"
              Votosq12e1.innerHTML = `<br>${valor.votos} votos`;
              q12e1.appendChild(Votosq12e1);
 
              var Textoq12e1 = document.createElement("div");
              Textoq12e1.innerHTML = `<br>${valor.valor}`;
              Textoq12e1.className = "button-quiz-info-bottom"
              q12e1.appendChild(Textoq12e1);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q12e1.appendChild(check);
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
 
 
  function listarQ12E1Other() {
 
    if (sessionStorage.BTNCLICK12 == 23) {
      fetch(`/votos/listarQ12E1Other?id=${sessionStorage.BTNCLICK12}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q12e2 = document.getElementById('q12e2')
              q12e2.disabled = true;
 
              q12e2.classList.add("naoEscolhidoBlue");
 
              q12e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq12e2Other = document.createElement("div");
              Votosq12e2Other.className = "button-quiz-info-top"
              Votosq12e2Other.innerHTML = `<br>${valor.votos} votos`;
              q12e2.appendChild(Votosq12e2Other);
 
              var Textoq12e2Other = document.createElement("div");
              Textoq12e2Other.innerHTML = `<br>${valor.valor}`;
              Textoq12e2Other.className = "button-quiz-info-bottom"
              q12e2.appendChild(Textoq12e2Other);
 
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

     //QUESTAO 12 ESCOLHA 02

 function cadastrarQ12E2() {

    //BTNCLICK12 = QUESTAO 12 ; O VALOR É 24 POR CAUSA DA ID NO BANCO DE DADOS
    sessionStorage.BTNCLICK12 = 24
    var idUsuario = sessionStorage.ID_USUARIO;
    var idValor = sessionStorage.BTNCLICK12
 
    // Enviando o valor da nova input
    fetch("/votos/cadastrarVotoQ12E2", {
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
        listarQ12E2()
        listarQ12E2Other()
        console.log('chamando função listarQ12E2')
 
      } else {
        console.log("Erro!" + resposta);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
    
    return false;
  }
  
  
    listarQ12E2();
    listarQ12E2Other();
 
  function listarQ12E2() {
    if (sessionStorage.BTNCLICK12 == 24) {
      fetch(`/votos/listarQ12E2?id=${sessionStorage.BTNCLICK12}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q12e2 = document.getElementById('q12e2')
              q12e2.disabled = true;
 
              q12e2.textContent = `${valor.porcentagem}%`;
 
              var Votosq12e2 = document.createElement("div");
              Votosq12e2.className = "button-quiz-info-top"
              Votosq12e2.innerHTML = `<br>${valor.votos} votos`;
              q12e2.appendChild(Votosq12e2);
 
              var Textoq12e2 = document.createElement("div");
              Textoq12e2.innerHTML = `<br>${valor.valor}`;
              Textoq12e2.className = "button-quiz-info-bottom"
              q12e2.appendChild(Textoq12e2);
 
 
              var check = document.createElement("div");
              check.className = "checkImg"
              check.innerHTML = `<br>⇧`;
              q12e2.appendChild(check);
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
 
 
  function listarQ12E2Other() {
 
    if (sessionStorage.BTNCLICK12 == 24) {
      fetch(`/votos/listarQ12E2Other?id=${sessionStorage.BTNCLICK12}`).then(function (resposta) {
        if (resposta.ok) {
 
          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
 
            for (let i = 0; i < resposta.length; i++) {
              var valor = resposta[i];
 
              const q12e1 = document.getElementById('q12e1')
              q12e1.disabled = true;
 
              q12e1.classList.add("naoEscolhidoRed");
 
              q12e1.textContent = `${valor.porcentagem}%`;
 
              var Votosq12e1Other = document.createElement("div");
              Votosq12e1Other.className = "button-quiz-info-top"
              Votosq12e1Other.innerHTML = `<br>${valor.votos} votos`;
              q12e1.appendChild(Votosq12e1Other);
 
              var Textoq12e1Other = document.createElement("div");
              Textoq12e1Other.innerHTML = `<br>${valor.valor}`;
              Textoq12e1Other.className = "button-quiz-info-bottom"
              q12e1.appendChild(Textoq12e1Other);
 
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

  function restarVotacao() {

    sessionStorage.BTNCLICK1 = 0
    sessionStorage.BTNCLICK2 = 0
    sessionStorage.BTNCLICK3 = 0
    sessionStorage.BTNCLICK4 = 0
    sessionStorage.BTNCLICK5 = 0
    sessionStorage.BTNCLICK6 = 0
    sessionStorage.BTNCLICK7 = 0
    sessionStorage.BTNCLICK8 = 0
    sessionStorage.BTNCLICK9 = 0
    sessionStorage.BTNCLICK10 = 0
    sessionStorage.BTNCLICK11 = 0
    sessionStorage.BTNCLICK12 = 0

    var sectionVotacao = document.getElementById('sectionVotacao')

    sectionVotacao.innerHTML = `
    <div class="quiz-questao">
    <p>Voce preferiria ...?</p>
    <div class="quiz-button-container">
      <button class="quiz-button red" onclick="cadastrarQ1E1()" id="q1e1">
        Poder viajar ao passado
      </button>
      <button class="quiz-button blue" onclick="cadastrarQ1E2()" id="q1e2">
        Poder viajar ao futuro
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ2E1()" id="q2e1">
      Nunca mais ouvir música ao vivo
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ2E2()" id="q2e2">
      Nunca mais ouvir música gravada
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ3E1()" id="q3e1">
      Ser rico em um trabalho que você odeia
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ3E2()" id="q3e2">
      Não ter tanto dinheiro em um trabalho que você ama
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ4E1()" id="q4e1">
      Morar na Antártica
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ4E2()" id="q4e2">
      Morar no Sahara
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce prefere ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ5E1()" id="q5e1">
      Verão
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ5E2()" id="q5e2">
      Inverno
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ6E1()" id="q6e1">
      Poder de teleportar
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ6E2()" id="q6e2">
      Poder de ler mentes
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ7E1()" id="q7e1">
      Ser o melhor jogador do pior time
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ7E2()" id="q7e2">
      Ser o pior jogador reserva do melhor time
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ8E1()" id="q8e1">
      Ser famoso
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ8E2()" id="q8e2">
      Ser rico
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ9E1()" id="q9e1">
      Ter uma inteligencia de um gênio
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ9E2()" id="q9e2">
      Ter uma beleza extraordinaria
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ10E1()" id="q10e1">
      Ter que dormir 15 horas por dia
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ10E2()" id="q10e2">
      Ter que dormir 3 horas por dia
    </button>
  </div>
</div>
<div class="quiz-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ11E1()" id="q11e1">
      Pular 5 anos da sua vida
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ11E2()" id="q11e2">
      Voltar 5 anos da sua vida
    </button>
  </div>
</div>
<div class="quiz-questao ultima-questao">
  <p>Voce preferiria ...?</p>
  <div class="quiz-button-container">
    <button class="quiz-button red" onclick="cadastrarQ12E1()" id="q12e1">
      Ser famoso nessa vida
    </button>
    <button class="quiz-button blue" onclick="cadastrarQ12E2()" id="q12e2">
      Ser eternamente famoso após sua morte
    </button>
  </div>
</div>
    `

    deletarVotos()
  }

  function deletarVotos() {
    var idUsuario = sessionStorage.ID_USUARIO;
    console.log("Resetar voto do usuário");
    fetch(`/votos/deletarVotos/${idUsuario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
  
        if (resposta.ok) {
            console.log("Votos deletados com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
        } else if (resposta.status == 404) {
          console.log("Deu 404!");
        } else {
            throw ("Erro! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
  }
  