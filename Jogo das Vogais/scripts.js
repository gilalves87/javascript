let home = document.querySelector("#home");
let game = document.querySelector("#game");
let result = document.querySelector("#result");
let vogal = document.querySelector("#vogal");
let acertos = document.querySelector("#hits");
let erros = document.querySelector("#errors");
var contadorAcertos = 0;
var contadorErros = 0;
let resultado = document.querySelector("#resultado-final");
let A = document.getElementById('A');
let E = document.getElementById('E');
let I = document.getElementById('I');
let O = document.getElementById('O');
let U = document.getElementById('U');
let erro = document.getElementById('erro');
let som = document.getElementById('som');

function startGame() {
    tocarSom();
    home.style.display = "none";
    game.style.display = "flex";
    result.style.display = "none";
    reset();
    vogal.innerHTML = vogalRan(1);
    alteraCor();
}

function reset() {
    contadorAcertos = 0;
    contadorErros = 0;
    acertos.innerHTML = "0";
    erros.innerHTML = "0";
}

function backToHome() {
    som.pause();
    som.currentTime = 0;
    home.style.display = "flex";
    game.style.display = "none";
    result.style.display = "none";
    
}

function goToResult() {
    home.style.display = "none";
    game.style.display = "none";
    result.style.display = "flex";
}

function mudarVogal(letra) {
    let vogalTela = vogal.innerHTML
    let vogalClicada = document.getElementById(letra).innerHTML
    if (vogalTela === vogalClicada) {
        contadorAcertos = contadorAcertos + 1;
        acertos.innerHTML = contadorAcertos;
        // alert("Acertou " + contadorAcertos);
        if (acertos.innerHTML === "10") {
            verificarResultado();
        } else {
            vogal.innerHTML = vogalRan(1);
            alteraCor();
        }
        
    } else {
        contadorErros = contadorErros + 1;
        erros.innerHTML = contadorErros;
        // alert("Errou " + contadorErros);
        erro.play();
        if (erros.innerHTML === "10") {
            verificarResultado();
        } 
    }
    
}

function verificarResultado() {
    if (acertos.innerHTML === "10") {
        goToResult();
        reset();
        resultado.style.color = "green";
        resultado.innerHTML = "Parabéns! Você é muito inteligente! :)";
        parabens.play();
    } else if (erros.innerHTML === "10") {
        goToResult();
        reset();
        resultado.style.color = "red";
        resultado.innerHTML = "Ops! Tem que estudar mais! :(";
        estudarmais.play();
    }
}

function alteraCor() {
    switch(vogal.innerHTML){
        case vogal.innerHTML = "A":
            vogal.style.color = "red";
            A.play();
        break;
        case vogal.innerHTML = "E":
            vogal.style.color = "green";
            E.play();
        break;
        case vogal.innerHTML = "I":
            vogal.style.color = "blue";
            I.play();
        break;
        case vogal.innerHTML = "O":
            vogal.style.color = "yellow";
            O.play();
        break;
        case vogal.innerHTML = "U":
            vogal.style.color = "brown";
            U.play();
        break;
    }
}

function vogalRan(length) {
    var result           = '';
    var characters       = 'AEIOU';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function tocarSom() {
    som.play();
 }
 
