/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

// Criação dos pacientes;
const patients = [
  {
    name: "Mario",
    age: 35,
    weight: 80,
    height: 178,
  },
  {
    name: "Joaquim",
    age: 21,
    weight: 60,
    height: 170,
  },
  {
    name: "Ana",
    age: 50,
    weight: 55,
    height: 150,
  },
  {
    name: "Marcos",
    age: 15,
    weight: 68,
    height: 163,
  }
]

// Function para calcular o imc;
function IMCCalculator (weight, height) {
  /* peso / (altura * altura) */
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

// Imprimir na tela o resultado o IMC do paciente;
const printPatientIMC = function (patient) {
  return `
    Paciente ${patient.name} possui o IMC de: 
    ${IMCCalculator(patient.weight, patient.height)}
  `;
}

// Pegar os objetos individualmente no for e mostra no alert();
for (let patient of patients) {
  let IMCMessage = printPatientIMC(patient);
  alert(IMCMessage)
}