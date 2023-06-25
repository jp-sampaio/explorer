/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, outra com a idade, outra com o peso e mais uma co altura;
*/

// 1° passo - Criar um array com os objetos pacientes dentro;
const patients = [
  {
    name: "Carlos",
    age: 67,
    weight: 78,
    height: 1.7,
  },

  {
    name: "Maria",
    age: 18,
    weight: 60,
    height: 1.58,
  },

  {
    name: "Marcela",
    age: 32,
    weight: 80,
    height: 1.9,
  },
];

// 2° passo - Criar uma array para cada uma das propriedades do objeto;
let patientsName = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight = [];

// Forma curta de escrever esse código;
for (let patient of patients) {
  patientsName.push(patient.name);
  patientsAge.push(patient.age);
  patientsWeight.push(patient.weight);
  patientsHeight.push(patient.height);
}

// Forma mais longa
// for (let index = 0; index < patients.length; index++) {
//   patientsName[index] = patients[index].name;
// }

for (let index in patientsName) {
  console.log(`
    Paciente ${patientsName[index]} tem ${patientsAge[index]} anos, 
    pesa ${patientsWeight[index]}kg e sua altura e de ${patientsHeight[
    index
  ].toFixed(2)}cm
  `);
}
