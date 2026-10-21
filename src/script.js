// ================================
// NAVEGAÇÃO
// ================================

function irPara(secao) {

    const elemento = document.getElementById(secao);

    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ================================
// LOGIN
// ================================

function mostrarLogin() {

    alert(
        "Área de Login\n\n" +
        "Esta função será implementada posteriormente."
    );

}


// ================================
// QUIZ
// ================================

let pontos = 0;

let respostas = 0;


function responderQuiz(botao, correta) {

    const botoes =
        botao.parentElement.querySelectorAll("button");

    // Evita responder a mesma pergunta várias vezes
    if (botao.dataset.respondido === "true") {
        return;
    }

    botao.dataset.respondido = "true";

    respostas++;


    if (correta) {

        botao.style.background = "#DCFCE7";
        botao.style.borderColor = "#22C55E";

        pontos++;

    } else {

        botao.style.background = "#FEE2E2";
        botao.style.borderColor = "#EF4444";

    }


    const resultado =
        document.getElementById("resultadoQuiz");


    if (respostas === 2) {

        resultado.innerHTML =
            "Resultado: " +
            pontos +
            " de 2 respostas corretas!";

    } else {

        resultado.innerHTML =
            "Boa! Agora responda a próxima pergunta.";

    }

}


// ================================
// PESQUISA
// ================================

const campoPesquisa =
    document.getElementById("campoPesquisa");


campoPesquisa.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            const pesquisa =
                campoPesquisa.value.toLowerCase().trim();


            if (
                pesquisa.includes("ci") ||
                pesquisa.includes("circuito") ||
                pesquisa.includes("integrado")
            ) {

                irPara("conceito");

            } else if (
                pesquisa.includes("tipo")
            ) {

                irPara("tipos");

            } else if (
                pesquisa.includes("aplicação")
            ) {

                irPara("aplicacoes");

            } else {

                alert(
                    "Não encontramos esse conteúdo nesta página."
                );

            }

        }

    }
);