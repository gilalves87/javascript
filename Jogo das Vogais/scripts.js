let home = document.querySelector("#home");
let game = document.querySelector("#game");
let result = document.querySelector("#result");
let vogal = document.querySelector("#vogal");
let acertos = document.querySelector("#hits");
let erros = document.querySelector("#errors");
var contadorAcertos = 0;
var contadorErros = 0;
let resultado = document.querySelector("#resultado-final");

function startGame() {
    home.style.display = "none";
    game.style.display = "flex";
    result.style.display = "none";
    reset();
}

function reset() {
    contadorAcertos = 0;
    contadorErros = 0;
    acertos.innerHTML = "0";
    erros.innerHTML = "0";
}

function backToHome() {
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
    } else {
        contadorErros = contadorErros + 1;
        erros.innerHTML = contadorErros;
        // alert("Errou " + contadorErros);
    }
    if (acertos.innerHTML === "10") {
        goToResult();
        reset();
        resultado.style.color = "green";
        resultado.innerHTML = "Parabéns! Você é muito inteligente! :)";
    } else if (erros.innerHTML === "10") {
        goToResult();
        reset();
        resultado.style.color = "red";
        resultado.innerHTML = "Ops! Tem que estudar mais! :(";
    }
    vogal.innerHTML = vogalRan(1);
    switch(vogal.innerHTML){
        case vogal.innerHTML = "A":
            vogal.style.color = "red";
        break;
        case vogal.innerHTML = "E":
            vogal.style.color = "green";
        break;
        case vogal.innerHTML = "I":
            vogal.style.color = "blue";
        break;
        case vogal.innerHTML = "O":
            vogal.style.color = "yellow";
        break;
        case vogal.innerHTML = "U":
            vogal.style.color = "brown";
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
 
