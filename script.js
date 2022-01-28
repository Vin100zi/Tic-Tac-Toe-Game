const container = document.querySelector('.container')
let matrizAtualDoJogo = null

function iniciaJogo() {
    // QUE || PORQUE

    // QUE: criar uma area de jogo || porque vai ser onde vao estar os elementos html

    // QUE: criar uma representaçao do jogo em matriz || poruqe sera essa representação que tera o estado do jogo, ex: ganhou, ou perdeu, ou empatou

    // QUE: Anexar a representaçao do jogo(matriz), a uma area de jogo(area do jogo html): porque: poruqe o usuario precisa ter contato com a regra, apartir de uma camada visual

    // anexar o estado (ou seja, soma das escolhas dos usuarios) ao html atualizado
    matrizAtualDoJogo = criaMatrizJogo()

    var novaAreaDeJogoComAsCelulas = executarMatrizJogo(matrizAtualDoJogo, criaAreaJogo())
    
    container.append(novaAreaDeJogoComAsCelulas)
}

function apagaJogo() {
    let areaJogoAntigo = container.querySelector('#areajogo')

    if(areaJogoAntigo !== null) {
        areaJogoAntigo.remove()
    }
}

function criaAreaJogo() {
    apagaJogo()
    let areaJogoEl = criaElemento('div', 'id', 'areajogo')
    return areaJogoEl
}

function criaElemento(tag, nomedoatributo, valordoatributo) {
    const novoEl = document.createElement(tag)
    novoEl.setAttribute(nomedoatributo, valordoatributo)
    return novoEl
}

function criaCelula(estado, valordoatributolinha, valordoatributocoluna) {
    let novaCelula;
    switch(estado) {
        case 'x':
        novaCelula = criaElemento('div', 'class', 'celula escolha-x')
        break;

        case 'o':
        novaCelula = criaElemento('div', 'class', 'celula escolha-o')
        break;

        default:
        novaCelula = criaElemento('div', 'class', 'celula')
    }
    novaCelula.setAttribute("linha", valordoatributolinha)
    novaCelula.setAttribute("coluna", valordoatributocoluna)
    
    return novaCelula
}

function criaMatrizJogo() {
    const maximoLinhas = 3
    const maximoColunas = 3

    let matrizInicialJogo = []

    for(let linhaAtual = 0; linhaAtual < maximoLinhas; linhaAtual++) {
        matrizInicialJogo[linhaAtual] = []
        for(let colunaAtual = 0; colunaAtual < maximoColunas; colunaAtual++) {
            matrizInicialJogo[linhaAtual][colunaAtual] = ''
        }
    }
    return matrizInicialJogo
}

function executarMatrizJogo(matriz, areaDeJogoElemento) {
    for(let linha = 0; linha < matriz.length; linha++){
        for(let coluna = 0; coluna < matriz[linha].length; coluna++) {

            let estadoDaCelula = matriz[linha][coluna] // pego o valor de linha 0, coluna 0
            const novaCelula = criaCelula(estadoDaCelula, linha, coluna) // cria uma celula, e passo o calor da variavel {estadoDaCelula}
            areaDeJogoElemento.append(novaCelula) // eu pego a nova celula e adiciono a minha area de jogo virtual (que é o valor criar na funcao criaAreaJogo(ELEMENTO HTML))
        }
    }
    return areaDeJogoElemento // retorno a minha area de jogo virutal e atualizada
}


// anotações

// to do

// será necessário criar uma variavel global, para controle do estado, ou seja, Se é a vez do X ou se é a Vez do Bolinha


// deverá ser criada uma função que atualiza a matriz atual e depois chama a função "executarMatrizJog"
function atualizaJogo(matriz,estado, jogadaLinha,JogadaColuna){
    // pegar a minha matriz atual
    // ver se a linha x coluna está disponivel para ser atualizada
    // se pode ser atualizada
        // lembrado codigo de atribuição de um valor a uma linha e coluna (linha 70)
        // atualizar o valor da coluna
        // atribuir essa matriz alterada a variavel global {matrizAtualDoJogo}
        // chamar a função {executarMatrizJogo}
        // retirar o a area de jogo antiga
        // adicionar a nova area de jogo
    // nao fazer nada
}

iniciaJogo()
