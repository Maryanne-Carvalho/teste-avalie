document.addEventListener("DOMContentLoaded", function () {
    const perguntas = [
        {
            pergunta: "Qual é o nome do protagonista de Breaking Bad?",
            opcoes: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Gustavo Fring"],
            resposta: "Walter White"
        },
        {
            pergunta: "Qual é o apelido de Jesse Pinkman para Walter White?",
            opcoes: ["Mr. Pink", "Mr. White", "Sr. White", "Heisenberg"],
            resposta: "Sr. White"
        },
        {
            pergunta: "Qual é o nome da pizzaria favorita de Saul Goodman?",
            opcoes: ["Los Pollos Hermanos", "Cinnabon", "Vamonos Pest", "A1A Car Wash"],
            resposta: "Cinnabon"
        },
        {
            pergunta: "Qual é o nome do laboratório de metanfetamina que Walter White e Jesse Pinkman montam?",
            opcoes: ["Superlab", "Los Pollos Hermanos", "The Dog House", "A1A Car Wash"],
            resposta: "Superlab"
        },
        {
            pergunta: "Qual é o nome do carro clássico de Saul Goodman?",
            opcoes: ["Chrysler 300", "Cadillac DeVille", "Pontiac Aztek", "Hummer H3"],
            resposta: "Cadillac DeVille"
        },
        {
            pergunta: "Qual é o nome do famoso químico que Jesse Pinkman menciona frequentemente?",
            opcoes: ["Walter White", "Gustavo Fring", "Gale Boetticher", "Heisenberg"],
            resposta: "Heisenberg"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const container = document.getElementById("game");
    const intro = document.querySelector(".intro");
    const startButton = document.getElementById("startGame");

    startButton.addEventListener("click", function () {
        intro.style.display = "none";
        container.style.display = "block";
        exibirPergunta();
    });

    function exibirPergunta() {
        container.innerHTML = `
            <h2>${perguntas[currentQuestion].pergunta}</h2>
            ${perguntas[currentQuestion].opcoes.map((opcao, index) => `
                <div>
                    <input type="radio" id="opcao${index}" name="opcoes" value="${opcao}">
                    <label for="opcao${index}">${opcao}</label>
                </div>
            `).join("")}
            <button onclick="verificarResposta()">Responder</button>
        `;
    }

    window.verificarResposta = function () { // Torna a função acessível globalmente
        const opcoes = document.getElementsByName("opcoes");
        let respostaUsuario = "";

        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                respostaUsuario = opcoes[i].value;
                break;
            }
        }

        const respostaCorreta = perguntas[currentQuestion].resposta;

        if (respostaUsuario === respostaCorreta) {
            score++;
            alert("Resposta correta!");
        } else {
            alert("Resposta incorreta!");
        }

        currentQuestion++;

        if (currentQuestion < perguntas.length) {
            exibirPergunta();
        } else {
            finalizarJogo();
        }
    }

    function finalizarJogo() {
        container.innerHTML = `
            <h2>Jogo finalizado!</h2>
            <p>Você acertou ${score} de ${perguntas.length} perguntas.</p>
        `;
    }
});