let questaoElement = document.querySelector("section#questao");
let tituloElement = document.querySelector("section#titulo");
let footerElement = document.querySelector("footer");
let proximoElement = document.createElement("button");
let proximoText = document.createTextNode("Próxima questão");



const placarElement = document.createElement('div');
placarElement.className = "placar";

const acertosElement = document.createElement('div');
acertosElement.className = "acertos";
const errosElement = document.createElement('div');
errosElement.className = "erros";


placarElement.appendChild(acertosElement);
placarElement.appendChild(errosElement);


proximoElement.setAttribute('onclick', 'proximaQuestao()');
proximoElement.appendChild(proximoText);


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

const questionario = [
    new questao("Qual imagem representa um tecido em necrose do tipo caseosa?",
["$herpes",
 "$necrose-caseosa", 
 "$necrose-gangrena", 
 "$necrose-liquefacao", 
 "$saudavel",
 "Nenhuma das alternativas anteriores"], 1),
    new questao("Área de necrose isquêmica, causada por oclusão do suprimento arterial ou drenagem venosa em um determinado tecido. <br>O texto está se referindo a:",
["Choque séptico", 
"Choque hipovolêmico", 
"Choque cardiogênico", 
"Infarto", 
"Embolia gordurosa"], 3),
    new questao("Sobre a necrose, marque a alternativa INCORRETA: ",
["Morte ativa, com gasto de ATP", 
"Tipo de morte celular", 
"Morte por estímulo patológico", 
"Processo celular irreversível"], 0),
    new questao("No cérebro , após um quadro de isquemia, ocorre frequentemente: ",
["necrose caseosa", 
"necrose de liquefação", 
"necrose de coagulação", 
"necrose gordurosa", 
"infarto isquêmico"], 1),
    new questao("São características vida necrose celular, EXCETO: ",
["Desintegração das organelas celulares", 
"Tumefação celular seguida de lise", 
"causa inflamação local", 
"Ocorre perda de integridade da membrana plasmática", 
"morte celular ativa, com gasto de energia"], 4),
    new questao("Com relação ao processo de necrose celular analise as afirmativas: <br>I - Ao entrar em necrose, uma célula sempre diminui de tamanho. <br>II - Não ocorre dano mitocondrial durante a necrose celular.",
["Todas as afirmativas estão corretas", 
"Apenas a afirmativa II está correta", 
"Apenas a afirmativa I está correta", 
"Todas as afirmativas estão incorretas"], 3),
    new questao("Abscessos são áreas de infecção bacteriana purulenta que produzem uma nova cavidade no tecido. Esta nova cavidade resulta de uma necrose __________, por ação das enzimas proteolíticas das próprias bactérias, e dos neutrófilos atraídos para combatê-las. ",
["caseosa", 
"gomosa", 
"de coagulação", 
"de liquefação", 
"por gangrena"], 3),
    new questao("Sobre apoptose qual alternativa está incorreta? ",
["Muitas células ao chegar ao fim de seu período de funcionalidade, entram em apoptose.", 
"Apoptose é uma morte celular programada.", 
"A apoptose protege células vizinhas de danos.", 
"O sinal que desencadeia apoptose é proveniente de outras células."], 3),
    new questao("Sobre os mecanismos de adaptação celular ao estresse, é incorreto afirmar que: ",
["Metaplasia é uma alteração celular irreversível na qual um tipo celular diferenciado é substituído por outro tipo celular.",
"Atrofia refere se a diminuição no tamanho da célula.",
"Hipertrofia provoca o aumento do tamanho da célula.",
"Hiperplasia é o aumento do número de células."],0),
    new questao("Em relação à morte celular, é incorreto afirmar que:",
["A tumefação celular é a primeira manifestação de quase todas as formas de lesão celular.",
"Lesões celulares podem ser reversíveis se o estímulo agressor não for retirado.",
"Uma característica importante do processo de apoptose é a morte celular não acompanhada de inflamação tecidual.",
"A necrose celular é o resultado da digestão celular secundária ao extravasamento das enzimas lisossômicas."],1),
    new questao("Sobre apoptose podemos afirmar, exceto:",
["A apoptose ocorre quando a célula, por sofrer um dano externo, rompe suas membranas e derrama o seu conteúdo enzimático nas células vizinhas.",
"A apoptose é ativa nos tecidos embrionários e nos tecidos adultos.",
"Durante a apoptose, ocorre a destruição das células por ação enzimáticas nas estruturas internas.",
"A proteína P53 desencadeia apoptose de células que presentam danos no seu DNA que não podem ser reparados."],0),
    new questao("Hipóxia, causa importante de morte celular, fica melhor caracterizada como:",
["Diminuição do suprimento sanguíneo arterial de determinado território.",
"Redução da drenagem venosa de uma determinada região anatômica.",
"Deficiência de oxigênio e consequente redução da respiração aeróbica oxidativa.",
"Comprometimento do fornecimento de substratos metabólicos a determinado grupo de células."],2),
    new questao("Qual das imagens abaixo apresenta necrose de coagulação?",
["$necrose-de-coagulacao",
"$necrose-liquefativa",
"$caseosa-pulmonar",
"$eristela-abcesso",
"Nenhuma das alternativas anteriores"],0),
    new questao("Entre os possíveis desencadeadores de uma Necrose qual é o INCORRETO: ",
["Substâncias cáusticas (ácidos e bases fortes)",
"Microorganismos patogênicos",
"Anóxia",
"Ativação de proteases endógenas",
"Hipertermia"],3),
    new questao("Qual dos cortes histológicos abaixo apresenta uma necrose?",
["$tecido-cardiaco-saudavel",
"$celulas-necroticas",
"$cerebelo-saudavel",
"$plaquetas-leucocitos",
"Nenhuma das alternativas anteriores"],1),
    new questao("Tipo de necrose com formação de massa gomosa, compacta, \"emborrachada\" ou fluida, vista no centro dos granulomas vascularizados causados pelo <em>Treponema pallidum</em>, na sífilis tardia:",
["Necrose caseosa",
"Necrose bolhosa",
"Necrose gomosa",
"Necrose gangrenosa"],2),
    new questao("Dentre as estruturas abaixo qual poderia apresentar necrose de coagulação ou isquêmica:",
["$cerebelo",
"$baco",
"$cerebro",
"$pele",
"Nenhuma das alternativas anteriores"],1),
    new questao("Quais das etapas descritas <strong>não</strong> correspondem as etapas da apoptose.",
["Aumento da aderência da célula em apoptose com outras células.",
"Desintegração do núcleo.",
"Rompimento dos prolongamentos e formação de corpos apoptóticos.",
"Fagocitose dos corpos apoptóticos."],0),
    new questao("É correto afirmar na descrição da patogenia do mecanismo de lesão celular oxidativo.",
["Acúmulo de água no interior das células",
"Acúmulo de carboidrato no interior das células",
"Acúmulo de lipídios no interior das células",
"Acúmulo de radicais livres no interior das células."],3),
    new questao("Sobre as causas mais comuns de lesão celular, marque alternativa incorreta.",
["A ausência de CO<sub>2</sub> contribui para lesão celular."])
];

let gabarito = [];

let questaoNumero = Math.floor(Math.random()*questionario.length);


function renderGabarito() {
    console.log(gabarito);
    
    tituloElement.innerHTML = "<h1>Resultado</h1>";
    questaoElement.innerHTML = "";
    questaoElement.appendChild(placarElement);
    
    for (questaoNumero in gabarito) {
        let perguntaElement = document.createElement('h3');

        perguntaElement.innerHTML = gabarito[questaoNumero].pergunta;
        questaoElement.appendChild(perguntaElement);

        let alternativaElement = document.createElement("button");
        alternativaElement.className = "gabarito";
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

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href","./index.html");

    const startElement = document.createElement("button");
    startElement.className = "start";
    startElement.innerHTML = "Jogar Novamente";
    linkElement.appendChild(startElement);
    questaoElement.appendChild(linkElement);
}

function proximaQuestao() {
    
    contador++;
    questionario.splice(questaoNumero,1);
    questaoNumero = Math.floor(Math.random()*questionario.length);
    console.log(contador);
    console.log(questionario);
    if (contador<6)
        renderQuestao(questionario[questaoNumero]);
    else
        renderGabarito();
}



function acertou() {
    const imgElement = document.createElement("img");
    imgElement.setAttribute('src',`./files/acertou/${Math.floor(Math.random()*8)}.jpg`);
    questaoElement.innerHTML = '';
    questaoElement.appendChild(imgElement);
    if(contador > 4){
        proximoText = document.createTextNode("Ver Resultado e Gabarito");
        proximoElement.innerHTML = "";
        proximoElement.appendChild(proximoText);
    }
    questaoElement.appendChild(proximoElement);
    acertos++;
    
    acertosElement.innerHTML = `<h3>ACERTOS</h3><br><h1>${acertos}</h1>`;
    errosElement.innerHTML = `<h3>ERROS</h3><br><h1>${erros}</h1>`;
    footerElement.innerHTML = '';
    footerElement.appendChild(placarElement);
}


function errou() {
    const imgElement = document.createElement("img");
    imgElement.setAttribute('src',`./files/errou/${Math.floor(Math.random()*8)}.jpg`);
    questaoElement.innerHTML = '';
    questaoElement.appendChild(imgElement);
    questaoElement.appendChild(proximoElement);
    erros++;

    acertosElement.innerHTML = `<h3>ACERTOS</h3><br><h1>${acertos}</h1>`;
    errosElement.innerHTML = `<h3>ERROS</h3><br><h1>${erros}</h1>`;
    footerElement.innerHTML = '';
    footerElement.appendChild(placarElement);
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



proximaQuestao();
