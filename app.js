let listaDeNumerosSorteados = [];
let numeroMaximoDeChutes = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;




function mostraTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function textoInicial(){
    mostraTextoNaTela ('h1', 'Jogo do numero secreto');
    mostraTextoNaTela ('p', 'Escolha um numero de 0 a 10');
}


textoInicial();

function verificarChute(){

    let chute = document.querySelector ('input').value
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto){
        mostraTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let numeroTentativas = (`Voce acertou o numero secreto com ${tentativa} ${palavraTentativa}!!!`);
        mostraTextoNaTela ('p', numeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(chute < numeroSecreto){
            mostraTextoNaTela ('p', `O numero secreto e maior que ${chute}`);
        }else{
            mostraTextoNaTela ('p', `O numero secreto é menor que ${chute}`);
            }
        }
        tentativa++
        limparCampo();

    }

function gerarNumeroAleatorio (){
    let numeroSecreto = parseInt(Math.random() * numeroMaximoDeChutes + 1);
    let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosLista == numeroMaximoDeChutes){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSecreto)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroSecreto);
        console.log (listaDeNumerosSorteados);
        return numeroSecreto;
    }
}

function limparCampo(){
            chute = document.querySelector('input');
            chute.value = '';
        }
        
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    textoInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


