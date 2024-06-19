let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log (numeroSecreto)

//jeito simplificado de fazer o texto com funções 
function exibirTextoNaTela (tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial(params) {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10')
}
    exibirMensagemInicial()
    

function verificarChute(){
let chute = document.querySelector ('input').value;

    if ( chute == numeroSecreto) {
        exibirTextoNaTela('h1','Mandou muito!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `você acertou com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ('p', mensagemTentativas) 
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }
        else {
            if(chute < numeroSecreto){
                exibirTextoNaTela('p', 'O numero é maior');
            } else {
                if(chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O numero é menor' );
                }
                tentativas++
                limparChute();
                
            }
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1) 
    let numeroDeElementosNaLista = listaDeNumeroSorteado.length
    if(numeroDeElementosNaLista == 2){
        listaDeNumeroSorteado = []
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){   
    return gerarNumeroAleatorio()
}  else {
    listaDeNumeroSorteado.push(numeroEscolhido)
    console.log (listaDeNumeroSorteado)
    return numeroEscolhido
}
}

function limparChute() {
    chute = document.querySelector ('input')
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio ()
    limparChute()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

