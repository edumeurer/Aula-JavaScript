// Exercício 1
const idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// Exercício 2
const numero = 7;
if (numero % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é impar");
}

// Exercício 3 
const valor = 5;
if (valor > 0) {
    console.log("Número positivo");
} else if (valor < 0) {
    console.log("Número negativo");
} else {
    console.log("Zero");
}


// Exercicio 4
let tabuada = 8;
for (let i = 1; i <= 10; i++) {
    console.log(tabuada + " x " + i + " = " + (tabuada * i));
}