/*

  *** Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

// 1° passo - Mandar um mensagem para o usuário inserir um número e capturar o dado; 
// O number vai transforma a string em number e com isso só vai aceitar number, e a template literals é para formatar bem o código;
let option;

// 2° passo - Fazer a situação que o usuário digite 1 e criar um array vazio para adicionar os items;
// O array é declarado aqui fora para não ficar vazio sempre que rodar o loop;
let items = [];

// Para a programa não encerrar na primeira aplicação e pedir as opções outras vezes devemos adiconar dentro do while; 
while (option != 3) {

  // Vem aqui dentro para mostra o menu mais de uma vez;
  option = Number(
    prompt(
      `
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `
    )
  );

  // Minimizar todos os if abaixos por um switch case;
  // Recebe um valor e caso for igual realizar um código, não esquecer do break e o dafault;
  switch (option) {
    case 1:
      let item = prompt("Cadastre um item na lista.");
      items.push(item);
      break;    
    case 2:
      if (items.length === 0) {
        alert("Não existem itens cadastrados.");
      } else {
        alert(items);
      }
      break;
    case 3:
      alert("Volte sempre !!!");
      break;
    default:
      alert("Você digitou um valor inválido. Por favor tente novamente!");
      break;
  }


  // if (option === 1) {
  // let item = prompt("Cadastre um item na lista.");
  // items.push(item);
  // }

  // 3° passo - Fazer a situação que o usuário digite 2 e mostra a mensagem se não tiver nada no array;
  // else if (option === 2) {
  //   if (items.length === 0) {
  //     alert("Não existem itens cadastrados.");
  //   } else {
  //     alert(items);
  //   }
  // } 

  // 4° passo - Fazer a aplicação encerrar quando clicar digitar 3;
  // else {
  //   alert("Volte sempre !!!")
  // }
}

// fazer a opção que digita um valor invalido e fazer a validação