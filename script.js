// Trabalho Calculadora

function calculadora(a, b, condicao) {
    if (condicao == 'soma') {
        return a + b;
    } else if (condicao == 'subtracao') {
        return a - b;
    } else if (condicao == 'multiplicacao') {
        return a * b;
    } else if (condicao == 'divisao') {
            return a / b;
    } else {
        return "Operação inválida";
    }
}
console.log(calculadora(10, 2, 'soma'));
console.log(calculadora(10, 2, 'subtracao'));
console.log(calculadora(10, 2, 'multiplicacao'));
console.log(calculadora(10, 2, 'divisao'));
console.log(calculadora(10, 2, 'modulo'));