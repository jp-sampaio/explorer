/*
  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário;
*/

alert("Somar dois números e mostrar o seu resultado na tela");

// Pegar os números do usuário:
let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

// Armazenar o resultado da soma;
// Transformar o dado em number já que o prompt retorna como resultado uma string;
let result = Number(numberOne) + Number(numberTwo);

// Mostrar na tela o resultado;
alert("O resultado da soma é igual à: " + result);