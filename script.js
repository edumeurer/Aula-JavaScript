// Função Simples (Declarativa)
function saudacao() {
    return console.log("Olá mundo");
}

// Função com Parâmetros
function soma(valorA, valorB) {
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

// Funcão Anônima
const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
}

// Arrow Function
const dividir = (a, b) => a / b;

// Função com valor padrão de parãmetro
function exponencial(base, expoente = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

// Invocando as Funções
saudacao();
soma(10, 5);
multiplicar(5, 4);
console.log(dividir(10, 2));
exponencial(3);
exponencial(3, 9);

// Função de Callback
function inicializarAplicacao() {
    saudacao();
    soma(10, 5);
    multiplicar(5, 4);
    exponencial(3);
    exponencial(3, 9);
}
inicializarAplicacao();