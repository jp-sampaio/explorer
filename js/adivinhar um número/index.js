/*
  ** Jogo da adivinhação **

  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

// 1° passo - Apresentar a mensagem ao usuário;
let userNumber = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");

// 2° passo - Criar uma lógica para gerar um número aleatório;
// Gera um número aleatório com o random e arredonda para o menor ou maior;
let randomNumber = Math.round(Math.random() * 10);

// 3° passo - Verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.
let match = Number(userNumber) !== randomNumber;

// 4° passo - Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente:"

// Variavél de controle do loop começa com 1;
let xAttempts = 1;

// Enquanto a condição for verdadeira vai rodar a expressão. Se a condição vier true como estou negando vai ser false e para a aplicação, agora se vinher false vai ser true e continuar;
while (match) {
  userNumber = prompt("Erro, tente novamente:");
  xAttempts++;

  console.log(userNumber, randomNumber, xAttempts);
}

function pluralOrSingular(xAttempts) {
  let withOrWithoutS = "tentativas";

  if (xAttempts === 1) {
    withOrWithoutS = "tentativa";
  } else {
    withOrWithoutS;
  }

  return withOrWithoutS;
}

//  5° passo - Caso o usuário acerte o número, apresentar a mensagem:  "Parabéns! Você adivinhou o número em x tentativas"
alert(`Parabéns! Eu estava pensando no número ${randomNumber} e você acertou em ${xAttempts} ${pluralOrSingular(xAttempts)}`);
