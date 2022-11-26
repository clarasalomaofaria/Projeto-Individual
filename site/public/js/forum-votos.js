
b_usuario.innerHTML = sessionStorage.NOME_USUARIO

selectCaseQ1E1()
selectCaseQ1E2()
selectCaseQ2E1()
selectCaseQ2E2()
selectCaseQ3E1()
selectCaseQ3E2()
selectCaseQ4E1()
selectCaseQ4E2()
selectCaseQ5E1()
selectCaseQ5E2()
selectCaseQ6E1()
selectCaseQ6E2()
selectCaseQ7E1()
selectCaseQ7E2()
selectCaseQ8E1()
selectCaseQ8E2()
selectCaseQ9E1()
selectCaseQ9E2()
selectCaseQ10E1()
selectCaseQ10E2()
selectCaseQ11E1()
selectCaseQ11E2()
selectCaseQ12E1()
selectCaseQ12E2()


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
  var idUsuario = sessionStorage.ID_USUARIO;
  //    sessionStorage.BTN1 = 1
  var idValor = 1

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
      selectCaseQ1E1()
      console.log('chamando função selectCaseQ1E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}

function selectCaseQ1E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ1E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK1 = click.BTNCLICK1
        
        listarQ1E1()
        listarQ1E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ1E1() {
  if (sessionStorage.BTNCLICK1 == 1) {
    fetch(`/votos/listarQ1E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q1e1 = document.getElementById('q1e1')
            q1e1.disabled = true;
            q1e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ1E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q1e2 = document.getElementById('q1e2')
            q1e2.disabled = true;
            q1e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 2

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
      selectCaseQ1E2()
      console.log('chamando função selectCaseQ1E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}


function selectCaseQ1E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ1E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK1 = click.BTNCLICK1

          listarQ1E2()
          listarQ1E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ1E2() {
  if (sessionStorage.BTNCLICK1 == 2) {
    fetch(`/votos/listarQ1E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q1e2 = document.getElementById('q1e2')
            q1e2.disabled = true;
            q1e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ1E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q1e1 = document.getElementById('q1e1')
            q1e1.disabled = true;
            q1e1.classList.remove('press')
            
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
  
// //QUESTAO 02 ESCOLHA 01


function cadastrarQ2E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 3

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
      selectCaseQ2E1()
      console.log('chamando função selectCaseQ2E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}

function selectCaseQ2E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ2E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK2 = click.BTNCLICK2
        
        listarQ2E1()
        listarQ2E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ2E1() {
  if (sessionStorage.BTNCLICK2 == 3) {
    fetch(`/votos/listarQ2E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q2e1 = document.getElementById('q2e1')
            q2e1.disabled = true;
            q2e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ2E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q2e2 = document.getElementById('q2e2')
            q2e2.disabled = true;
            q2e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 4

  fetch("/votos/cadastrarVotoQ2E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ2E2()
      console.log('chamando função selectCaseQ2E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ2E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ2E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK2 = click.BTNCLICK2

          listarQ2E2()
          listarQ2E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ2E2() {
  if (sessionStorage.BTNCLICK2 == 4) {
    fetch(`/votos/listarQ2E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q2e2 = document.getElementById('q2e2')
            q2e2.disabled = true;
            q2e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ2E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q2e1 = document.getElementById('q2e1')
            q2e1.disabled = true;
            q2e1.classList.remove('press')
            
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


// //QUESTAO 03 ESCOLHA 01


function cadastrarQ3E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 5

  fetch("/votos/cadastrarVotoQ3E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ3E1()
      console.log('chamando função selectCaseQ3E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}

function selectCaseQ3E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ3E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK3 = click.BTNCLICK3
        
        listarQ3E1()
        listarQ3E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ3E1() {
  if (sessionStorage.BTNCLICK3 == 5) {
    fetch(`/votos/listarQ3E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q3e1 = document.getElementById('q3e1')
            q3e1.disabled = true;
            q3e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ3E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q3e2 = document.getElementById('q3e2')
            q3e2.disabled = true;
            q3e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 6

  fetch("/votos/cadastrarVotoQ3E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ3E2()
      console.log('chamando função selectCaseQ3E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ3E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ3E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK3 = click.BTNCLICK3

          listarQ3E2()
          listarQ3E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ3E2() {
  if (sessionStorage.BTNCLICK3 == 6) {
    fetch(`/votos/listarQ3E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q3e2 = document.getElementById('q3e2')
            q3e2.disabled = true;
            q3e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ3E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q3e1 = document.getElementById('q3e1')
            q3e1.disabled = true;
            q3e1.classList.remove('press')
            
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


// //QUESTAO 04 ESCOLHA 01


function cadastrarQ4E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 7

  fetch("/votos/cadastrarVotoQ4E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ4E1()
      console.log('chamando função selectCaseQ4E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}

function selectCaseQ4E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ4E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK4 = click.BTNCLICK4
        
        listarQ4E1()
        listarQ4E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ4E1() {
  if (sessionStorage.BTNCLICK4 == 7) {
    fetch(`/votos/listarQ4E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q4e1 = document.getElementById('q4e1')
            q4e1.disabled = true;
            q4e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ4E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q4e2 = document.getElementById('q4e2')
            q4e2.disabled = true;
            q4e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 8

  fetch("/votos/cadastrarVotoQ4E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ4E2()
      console.log('chamando função selectCaseQ4E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ4E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ4E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK4 = click.BTNCLICK4

          listarQ4E2()
          listarQ4E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ4E2() {
  if (sessionStorage.BTNCLICK4 == 8) {
    fetch(`/votos/listarQ4E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q4e2 = document.getElementById('q4e2')
            q4e2.disabled = true;
            q4e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ4E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q4e1 = document.getElementById('q4e1')
            q4e1.disabled = true;
            q4e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 9

  // Enviando o valor da nova input
  fetch("/votos/cadastrarVotoQ5E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ5E1()
      console.log('chamando função selectCaseQ5E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;
}

function selectCaseQ5E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ5E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK5 = click.BTNCLICK5
        
        listarQ5E1()
        listarQ5E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ5E1() {
  if (sessionStorage.BTNCLICK5 == 9) {
    fetch(`/votos/listarQ5E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q5e1 = document.getElementById('q5e1')
            q5e1.disabled = true;
            q5e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ5E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q5e2 = document.getElementById('q5e2')
            q5e2.disabled = true;
            q5e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 10

  fetch("/votos/cadastrarVotoQ5E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ5E2()
      console.log('chamando função selectCaseQ5E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ5E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ5E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK5 = click.BTNCLICK5

          listarQ5E2()
          listarQ5E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ5E2() {
  if (sessionStorage.BTNCLICK5 == 10) {
    fetch(`/votos/listarQ5E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q5e2 = document.getElementById('q5e2')
            q5e2.disabled = true;
            q5e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ5E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q5e1 = document.getElementById('q5e1')
            q5e1.disabled = true;
            q5e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 11

  fetch("/votos/cadastrarVotoQ6E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ6E1()
      console.log('chamando função selectCaseQ6E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ6E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ6E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK6 = click.BTNCLICK6
        
        listarQ6E1()
        listarQ6E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ6E1() {
  if (sessionStorage.BTNCLICK6 == 11) {
    fetch(`/votos/listarQ6E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q6e1 = document.getElementById('q6e1')
            q6e1.disabled = true;
            q6e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ6E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q6e2 = document.getElementById('q6e2')
            q6e2.disabled = true;
            q6e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 12

  fetch("/votos/cadastrarVotoQ6E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ6E2()
      console.log('chamando função selectCaseQ6E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ6E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ6E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK6 = click.BTNCLICK6

          listarQ6E2()
          listarQ6E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ6E2() {
  if (sessionStorage.BTNCLICK6 == 12) {
    fetch(`/votos/listarQ6E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q6e2 = document.getElementById('q6e2')
            q6e2.disabled = true;
            q6e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ6E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q6e1 = document.getElementById('q6e1')
            q6e1.disabled = true;
            q6e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 13

  fetch("/votos/cadastrarVotoQ7E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ7E1()
      console.log('chamando função selectCaseQ7E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ7E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ7E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK7 = click.BTNCLICK7
        
        listarQ7E1()
        listarQ7E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ7E1() {
  if (sessionStorage.BTNCLICK7 == 13) {
    fetch(`/votos/listarQ7E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q7e1 = document.getElementById('q7e1')
            q7e1.disabled = true;
            q7e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ7E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q7e2 = document.getElementById('q7e2')
            q7e2.disabled = true;
            q7e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 14

  fetch("/votos/cadastrarVotoQ7E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ7E2()
      console.log('chamando função selectCaseQ7E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ7E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ7E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK7 = click.BTNCLICK7

          listarQ7E2()
          listarQ7E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ7E2Other() {
  if (sessionStorage.BTNCLICK7 == 14) {
    fetch(`/votos/listarQ7E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q7e2 = document.getElementById('q7e2')
            q7e2.disabled = true;
            q7e2.classList.remove('press')
            
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
  

function listarQ7E2() {
  if (sessionStorage.BTNCLICK7 == 14) {
    fetch(`/votos/listarQ7E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q7e1 = document.getElementById('q7e1')
            q7e1.disabled = true;
            q7e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 15

  fetch("/votos/cadastrarVotoQ8E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ8E1()
      console.log('chamando função selectCaseQ8E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ8E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ8E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK8 = click.BTNCLICK8
        
        listarQ8E1()
        listarQ8E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ8E1() {
  if (sessionStorage.BTNCLICK8 == 15) {
    fetch(`/votos/listarQ8E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q8e1 = document.getElementById('q8e1')
            q8e1.disabled = true;
            q8e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ8E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q8e2 = document.getElementById('q8e2')
            q8e2.disabled = true;
            q8e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 16

  fetch("/votos/cadastrarVotoQ8E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ8E2()
      console.log('chamando função selectCaseQ8E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ8E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ8E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK8 = click.BTNCLICK8

          listarQ8E2()
          listarQ8E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ8E2() {
  if (sessionStorage.BTNCLICK8 == 16) {
    fetch(`/votos/listarQ8E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q8e2 = document.getElementById('q8e2')
            q8e2.disabled = true;
            q8e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ8E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q8e1 = document.getElementById('q8e1')
            q8e1.disabled = true;
            q8e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 17

  fetch("/votos/cadastrarVotoQ9E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ9E1()
      console.log('chamando função selectCaseQ9E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ9E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ9E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK9 = click.BTNCLICK9
        
        listarQ9E1()
        listarQ9E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ9E1() {
  if (sessionStorage.BTNCLICK9 == 17) {
    fetch(`/votos/listarQ9E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q9e1 = document.getElementById('q9e1')
            q9e1.disabled = true;
            q9e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ9E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q9e2 = document.getElementById('q9e2')
            q9e2.disabled = true;
            q9e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 18

  fetch("/votos/cadastrarVotoQ9E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ9E2()
      console.log('chamando função selectCaseQ9E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ9E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ9E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK9 = click.BTNCLICK9

          listarQ9E2()
          listarQ9E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ9E2() {
  if (sessionStorage.BTNCLICK9 == 18) {
    fetch(`/votos/listarQ9E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q9e2 = document.getElementById('q9e2')
            q9e2.disabled = true;
            q9e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ9E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q9e1 = document.getElementById('q9e1')
            q9e1.disabled = true;
            q9e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 19

  fetch("/votos/cadastrarVotoQ10E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ10E1()
      console.log('chamando função selectCaseQ10E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ10E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ10E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK10 = click.BTNCLICK10
        
        listarQ10E1()
        listarQ10E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ10E1() {
  if (sessionStorage.BTNCLICK10 == 19) {
    fetch(`/votos/listarQ10E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q10e1 = document.getElementById('q10e1')
            q10e1.disabled = true;
            q10e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ10E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q10e2 = document.getElementById('q10e2')
            q10e2.disabled = true;
            q10e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 20

  fetch("/votos/cadastrarVotoQ10E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ10E2()
      console.log('chamando função selectCaseQ10E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ10E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ10E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK10 = click.BTNCLICK10

          listarQ10E2()
          listarQ10E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ10E2() {
  if (sessionStorage.BTNCLICK10 == 20) {
    fetch(`/votos/listarQ10E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q10e2 = document.getElementById('q10e2')
            q10e2.disabled = true;
            q10e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ10E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q10e1 = document.getElementById('q10e1')
            q10e1.disabled = true;
            q10e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 21

  fetch("/votos/cadastrarVotoQ11E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ11E1()
      console.log('chamando função selectCaseQ11E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ11E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ11E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK11 = click.BTNCLICK11
        
        listarQ11E1()
        listarQ11E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ11E1() {
  if (sessionStorage.BTNCLICK11 == 21) {
    fetch(`/votos/listarQ11E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q11e1 = document.getElementById('q11e1')
            q11e1.disabled = true;
            q11e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ11E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q11e2 = document.getElementById('q11e2')
            q11e2.disabled = true;
            q11e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 22

  fetch("/votos/cadastrarVotoQ11E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ11E2()
      console.log('chamando função cadastrarQ11E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ11E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ11E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK11 = click.BTNCLICK11

          listarQ11E2()
          listarQ11E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ11E2() {
  if (sessionStorage.BTNCLICK11 == 22) {
    fetch(`/votos/listarQ11E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q11e2 = document.getElementById('q11e2')
            q11e2.disabled = true;
            q11e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ11E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q11e1 = document.getElementById('q11e1')
            q11e1.disabled = true;
            q11e1.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 23

  fetch("/votos/cadastrarVotoQ12E1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ12E1()
      console.log('chamando função selectCaseQ12E1()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function selectCaseQ12E1() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ12E1/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK12 = click.BTNCLICK12
        
        listarQ12E1()
        listarQ12E1Other()


      });
    } else {
      throw ('Não há um voto ou houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}



function listarQ12E1() {
  if (sessionStorage.BTNCLICK12 == 23) {
    fetch(`/votos/listarQ12E1`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q12e1 = document.getElementById('q12e1')
            q12e1.disabled = true;
            q12e1.classList.remove('press')
            
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
    fetch(`/votos/listarQ12E1Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q12e2 = document.getElementById('q12e2')
            q12e2.disabled = true;
            q12e2.classList.remove('press')
            
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
  var idUsuario = sessionStorage.ID_USUARIO;
  var idValor = 24

  fetch("/votos/cadastrarVotoQ12E2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuarioServer: idUsuario,
      valorServer: idValor
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      selectCaseQ12E2()
      console.log('chamando função selectCaseQ12E2()')

    } else {
      console.log("Erro!" + resposta);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}


function selectCaseQ12E2() {
  var idUsuario = sessionStorage.ID_USUARIO;
  fetch(`/votos/selectCaseQ12E2/${idUsuario}`).then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        var click = resposta[0]
        sessionStorage.BTNCLICK12 = click.BTNCLICK12

          listarQ12E2()
          listarQ12E2Other()
        

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarQ12E2() {
  if (sessionStorage.BTNCLICK12 == 24) {
    fetch(`/votos/listarQ12E2`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];
            
            const q12e2 = document.getElementById('q12e2')
            q12e2.disabled = true;
            q12e2.classList.remove('press')
            
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
    fetch(`/votos/listarQ12E2Other`).then(function (resposta) {
      if (resposta.ok) {
        
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          
          for (let i = 0; i < resposta.length; i++) {
            var valor = resposta[i];

            const q12e1 = document.getElementById('q12e1')
            q12e1.disabled = true;
            q12e1.classList.remove('press')
            
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


function resetarVotacao() {

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

  const q1e1 = document.getElementById('q1e1')
  const q1e2 = document.getElementById('q1e2')
  const q2e1 = document.getElementById('q2e1')
  const q2e2 = document.getElementById('q2e2')
  const q3e1 = document.getElementById('q3e1')
  const q3e2 = document.getElementById('q3e2')
  const q4e1 = document.getElementById('q4e1')
  const q4e2 = document.getElementById('q4e2')
  const q5e1 = document.getElementById('q5e1')
  const q5e2 = document.getElementById('q5e2')
  const q6e1 = document.getElementById('q6e1')
  const q6e2 = document.getElementById('q6e2')
  const q7e1 = document.getElementById('q7e1')
  const q7e2 = document.getElementById('q7e2')
  const q8e1 = document.getElementById('q8e1')
  const q8e2 = document.getElementById('q8e2')
  const q9e1 = document.getElementById('q9e1')
  const q9e2 = document.getElementById('q9e2')
  const q10e1 = document.getElementById('q10e1')
  const q10e2 = document.getElementById('q10e2')
  const q11e1 = document.getElementById('q11e1')
  const q11e2 = document.getElementById('q11e2')
  const q12e1 = document.getElementById('q12e1')
  const q12e2 = document.getElementById('q12e2')

  q1e1.classList.add('press')
  q1e2.classList.add('press')
  q2e1.classList.add('press')
  q2e2.classList.add('press')
  q3e1.classList.add('press')
  q3e2.classList.add('press')
  q4e1.classList.add('press')
  q4e2.classList.add('press')
  q5e1.classList.add('press')
  q5e2.classList.add('press')
  q6e1.classList.add('press')
  q6e2.classList.add('press')
  q7e1.classList.add('press')
  q7e2.classList.add('press')
  q8e1.classList.add('press')
  q8e2.classList.add('press')
  q9e1.classList.add('press')
  q9e2.classList.add('press')
  q10e1.classList.add('press')
  q10e2.classList.add('press')
  q11e1.classList.add('press')
  q11e2.classList.add('press')
  q12e1.classList.add('press')
  q12e2.classList.add('press')

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

  location. reload()

}
