let questaoElement = document.querySelector("section#questao");
let tituloElement = document.querySelector("section#titulo");
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
let contador = 0;



class questao {
    constructor(pergunta, alternativa = [], certa) {
        this.pergunta = pergunta;
        this.alternativa = alternativa;
        this.certa = certa;
    }
}

const questionario = [new questao("quando é comemorada a independencia do Brasil?<br>", ["4 de Julho", "15 de Novembro", "7 de Setembro"], 2),
new questao("quanto é a raiz quadrada de 144?<br>", ["13", "-11", "12", "5"], 2),
new questao("quanto é a raiz quadrada de 169<br>?", ["13", "-11", "12", "5"], 0),
new questao("Quem compôs \"Here comes the Sun\"?<br>", ["John Lennon", "Eric Clapton", "Paul McCartney", "George Harrison"], 3),
new questao("Qual é o aniversário da Aniely?<br>", ["12/03", "16/09", "16/10", "10/12", "18/10"], 2),
new questao("Qual imagem representa um tecido em necrose do tipo caseosa?<br>", ["$herpes", "$necrose-caseosa", "beterraba", "$necrose-liquefacao", "$saudavel"], 1),
new questao("Área de necrose isquêmica, causada poroclusão do suprimento arterial ou drenagem venosa em um determinado tecido. <br>O texto está se referindo a: <br>", ["A choque séptico", "A choque hipovolêmico", "A choque cardiogênico", "A infarto", "À embolia gordurosa"], 3),
new questao("Sobre a necrose, marque a alternativa INCORRETA: <br>", ["Morte ativa, com gasto de ATP", "Tipo de morte celular", "Morte por estímulo patológico", "Processo celular irreversível"], 0),
new questao("No cérebro , após um quadro de isquemia, ocorre frequentemente: <br>", ["necrose caseosa", "necrose de liquefação", "necrose de coagulação", "necrose gordurosa", "infarto isquêmico"], 1),
new questao("São características vida necrose celular, EXCETO: <br>", ["Desintegração das organelas celulares", "Tumefação celular seguida de lise", "causa inflamação local", "Ocorre perda de integridade da membrana plasmática", "morte celular ativa, com gasto de energia"], 4),
new questao("Com relação ao processo de necrose celular analise as afirmativas: <br>I - Ao entrar em necrose, uma célula sempre diminui de tamanho. <br>II - Não ocorre dano mitocondrial durante a necrose celular.<br>", ["Todas as alternativas estão corretas", "Apenas a alternativa II está correta", "Apenas a alternativa I está correta", "Todas as alternativas estão incorretas"], 3),
];

let gabarito = [];

let questaoNumero = Math.floor(Math.random()*questionario.length);

function renderFim() {
    questaoElement.innerHTML = "<h1>GGWP<br>GABARITO</h1>";
    renderGabarito();
}

function renderGabarito() {
    console.log(gabarito);
    for (questaoNumero in gabarito) {
        let perguntaElement = document.createElement('h3');

        perguntaElement.innerHTML = gabarito[questaoNumero].pergunta;
        questaoElement.appendChild(perguntaElement);

        let alternativaElement = document.createElement("button");

        if (gabarito[questaoNumero].alternativa[gabarito[questaoNumero].certa][0] == '$') {
            const imgElement = document.createElement("img");
            imgElement.setAttribute('src', './files/' + gabarito[questaoNumero].alternativa[gabarito[questaoNumero].certa] + '.jpg');
            alternativaElement.appendChild(imgElement);
        }
        else {
            const alternativaText = document.createTextNode(gabarito[questaoNumero].alternativa[gabarito[questaoNumero].certa]);
            alternativaElement.appendChild(alternativaText);
        }

        questaoElement.appendChild(alternativaElement);
    }
}

function proximaQuestao() {
    contador++;
    questionario.splice(questaoNumero,1);
    questaoNumero = Math.floor(Math.random()*questionario.length);

    console.log(questionario);
    if (contador<6)
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



function renderQuestao(questao) {
    tituloElement.innerHTML = "<h2>Questão "+(contador)+"</h2";
    questaoElement.innerHTML = "";
    let perguntaElement = document.createElement('h3');
    perguntaElement.innerHTML = questionario[questaoNumero].pergunta;

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

    gabarito[contador] = questionario[questaoNumero];


};

function render() {

    questaoElement.appendChild(primeiroElement);
}

render();
