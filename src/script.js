let questaoElement = document.querySelector("section#questao");
let footerElement = document.querySelector("footer");
let proximoElement = document.createElement("button");
let proximoText = document.createTextNode("Próxima questão");
proximoElement.setAttribute('onclick', 'proximaQuestao()');
proximoElement.appendChild(proximoText);

let primeiroElement = document.createElement("button");
let primeiroText = document.createTextNode("Iniciar IMUNOquiz");
primeiroElement.setAttribute('onclick', 'proximaQuestao()');
primeiroElement.appendChild(primeiroText);

let acertos = 0;
let erros = 0;
let questaoNumero = -1;

class questao {
    constructor(pergunta, alternativa = [], certa) {
        this.pergunta = pergunta;
        this.alternativa = alternativa;
        this.certa = certa;
    }
}

function renderFim() {
    questaoElement.innerHTML = "<h1>GGWP<br>GABARITO</h1>";
    renderGabarito();
}

function renderGabarito() {
    for (questaoNumero in questionario) {
        let perguntaElement = document.createElement('h3');
        let perguntaText = document.createTextNode(questionario[questaoNumero].pergunta);

        perguntaElement.appendChild(perguntaText);
        questaoElement.appendChild(perguntaElement);

        let alternativaElement = document.createElement("button");
        let alternativaText = document.createTextNode(questionario[questaoNumero].alternativa[questionario[questaoNumero].certa]);

        alternativaElement.appendChild(alternativaText);
        questaoElement.appendChild(alternativaElement);
    }
}

function proximaQuestao() {
    questaoNumero++;
    console.log(questaoNumero);
    if (questaoNumero < questionario.length)
        renderQuestao(questionario[questaoNumero]);
    else
        renderFim();
}



function acertou() {
    questaoElement.innerHTML = '<h1>Certa resposta!</h1>';
    questaoElement.appendChild(proximoElement);
    acertos++;
    footerElement.innerHTML = '<h3>acertos: ' + acertos + '<br>erros: ' + erros + '<h3>'
}

function errou() {
    questaoElement.innerHTML = '<h1>Errrrrrrouuu</h1>';
    questaoElement.appendChild(proximoElement);
    erros++;
    footerElement.innerHTML = '<h3>acertos: ' + acertos + '<br>erros: ' + erros + '<h3>'
}

const questionario = [new questao("quando é comemorada a independencia do Brasil?", ["4 de Julho", "15 de Novembro", "7 de Setembro"], 2),
new questao("quanto é a raiz quadrada de 144?", ["13", "-11", "12", "5"], 2),
new questao("quanto é a raiz quadrada de 169?", ["13", "-11", "12", "5"], 0),
new questao("Quem compôs \"Here comes the Sun\"?", ["John Lennon", "Eric Clapton", "Paul McCartney", "George Harrison"], 3),
new questao("Qual é o aniversário da Aniely?", ["12/03", "16/09", "16/10", "10/12", "18/10"], 2),
new questao("Qual imagem representa um tecido em necrose do tipo caseosa?", ["$herpes", "$necrose-caseosa", "beterraba", "$necrose-liquefacao", "$saudavel"], 1),
];

function renderQuestao(questao) {
    questaoElement.innerHTML = "";
    let perguntaElement = document.createElement('h3');
    let perguntaText = document.createTextNode(questao.pergunta);

    perguntaElement.appendChild(perguntaText);
    questaoElement.appendChild(perguntaElement);

    for (alternativa in questao.alternativa) {

        let alternativaElement = document.createElement("button");
        if (questao.alternativa[alternativa][0] == '$') {
            const imgElement = document.createElement("img");
            imgElement.setAttribute('src', './files/' + questao.alternativa[alternativa] + '.jpg');
            alternativaElement.appendChild(imgElement);
        }
        else {
            const alternativaText = document.createTextNode(questao.alternativa[alternativa]);
            alternativaElement.appendChild(alternativaText);
        }

        if (alternativa == questao.certa)
            alternativaElement.setAttribute('onclick', 'acertou()');
        else
            alternativaElement.setAttribute('onclick', 'errou()');
        questaoElement.appendChild(alternativaElement);
        const breakElement = document.createElement("br");
        questaoElement.appendChild(breakElement);

    }


};

function render() {

    questaoElement.appendChild(primeiroElement);
}

render();
