/*
  Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

  E para cada operação, mostrar um alerta com o resultado.
*/

// 1° passo - Capturar os 2 números;

// Utilizo o let pois depois vou reatribuir o seu valor;
let firstNumber = prompt("Digite o primeiro número:"); 
let secondNumber = prompt("Digite o segundo número:");

// 2° passo - Reatribuir o valor string recebido pelo prompt para number;
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

// 3° passo - Fazer as operações de cada um dos operadores +, -, *, /, %;

// Como o valor não vai ser mudado eu utilizo a const aqui;

// soma;
const sum = firstNumber + secondNumber;
// subtração;
const subtraction = firstNumber - secondNumber;
// multiplicação;
const multiplication = firstNumber * secondNumber;
// divisão;
const division = firstNumber / secondNumber;
// resto da divisão;
const remaiter = firstNumber % secondNumber;

// 6° passo - Mostrar na tela o resultado de cada um das operações; 
alert("O resultado da soma de " + firstNumber + " e " + secondNumber + " é igual à : " + sum);

alert("O resultado da subtração de " + firstNumber + " e " + secondNumber + " é igual à : " + subtraction);

alert("O resultado da multiplicação de " + firstNumber + " e " + secondNumber + " é igual à : " + multiplication);

alert("O resultado da divisão de " + firstNumber + " e " + secondNumber + " é igual à : " + division);

alert("O resultado do resto da divisão de " + firstNumber + " e " + secondNumber + " é igual à : " + remaiter);