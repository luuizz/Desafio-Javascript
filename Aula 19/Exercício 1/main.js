let nome = prompt("Digite seu nome completo");
let numero1 = Number(prompt("Digite o primeiro número"));
let numero2 = Number(prompt("Digite o segundo número"));
let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
let subtracao = subtrair(numero1, numero2);
let divisao = dividir(numero1, numero2)


function subtrair(a, b) {
    if (a < b) {
        return "Não foi possível substrair";
    } else {
        return a - b;
    }
}

function dividir(a, b) {
    if (b <= 0) {
        return "Não foi possível dividir";
    } else {
        return a / b;
    }
}

alert(`O resultado da soma é ${soma}`);
alert(`O resultado da subtração é ${subtracao}`);
console.log(`Seu nome completo é ${nome}`);
console.log(`O resultado da multiplicação é ${multiplicacao}`);
console.log(`A divisão dos números é ${divisao}`);