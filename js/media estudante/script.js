/*
  Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

// 1° passo - Pegar o nome do aluno;
let studant = prompt("Digite o seu nome:");

// 2° passo - Pegar as 3 notas do aluno;
let firstNotes = prompt("Digite a sua primeira nota:");
let secondNotes = prompt("Digite a sua segunda nota:");
let thirdNotes = prompt("Digite a sua terceira nota:");

// 3° passo - Calcular a media do aluno;
let average = (Number(firstNotes) + Number(secondNotes) + Number(thirdNotes)) / 3;

//4° passo - Fazer as condição pra saber se a media é maior que 6;
// Poderia ser criado no if mais eu preferir colocar em uma variável
let greaterThanSix = average > 6;
let lessThanTwo = average <= 2;

// Transformar o número muito grande com poucas casas decimais, e evitar repetir código além de ajudar na manutenção;
average = average.toFixed(2);

// 5° passo - Conferir se o aluno passou de ano ou nao e mostrar a mensagem;
if (greaterThanSix) {
  alert(`Parabéns ${studant}! Você conseguiu a média ${average} e está aprovado.`);
} else if (lessThanTwo) {
  alert(`${studant} infelizmente você foi reprovado pela média muito baixa de ${average}.`);
} else {
  alert(`${studant} você esta de recuperação com media ${average}, procure estudar mais pra ser aprovado.`);
}