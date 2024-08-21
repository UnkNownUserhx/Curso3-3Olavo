const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está iniciando um novo projeto de software e deve escolher a arquitetura mais adequada. Qual a sua abordagem inicial?",
        alternativas: [
            {
                texto: "Opto por uma arquitetura de microserviços para garantir escalabilidade e flexibilidade.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escolho uma arquitetura monolítica para simplificar o desenvolvimento e a implantação.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante o desenvolvimento, você se depara com um bug crítico que está impactando a funcionalidade principal do sistema. O que você faz?",
        alternativas: [
            {
                texto: "Imediatamente interrompo o desenvolvimento de novas funcionalidades para focar na correção do bug.",
                afirmacao: "afirmação"
            },
            {
                texto: "Priorize a implementação de novas funcionalidades, e deixe a correção do bug para uma próxima iteração.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está revisando o código de um colega e encontra uma solução que não segue as melhores práticas de programação. Como você reage?",
        alternativas: [
            {
                texto: "Faço sugestões construtivas e proponho uma refatoração do código para melhorar a qualidade.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ignoro o problema e continuo com o código como está para evitar conflitos e discussões.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final de um ciclo de desenvolvimento, você deve criar uma documentação técnica para o software. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Utilizo ferramentas de geração automática de documentação para facilitar o processo.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escrevo a documentação manualmente para garantir que todas as especificidades do projeto sejam bem detalhadas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de software em equipe e um dos membros não está contribuindo como esperado. O que você faz?",
        alternativas: [
            {
                texto: "Confronto o membro da equipe diretamente sobre o impacto da sua falta de contribuição e busco uma solução juntos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Relato o problema ao gerente de projeto e solicito uma intervenção para resolver a situação.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
