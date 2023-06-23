/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

// 1° passo - Capturar os 10 items;

// Criar um laço de repetição que vai percorrer os 10 items e pedir para digitar cada um dos items;
 
const items = [];

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o nome do item " + (item + 1));

  items[item] = itemName;
}

// 2° passo - Imprimir os items e separar por vírgula;
// Tenho que criar um array vazio no escopo global e adicionar os items nele dentro do laço de repetição;

alert(items);