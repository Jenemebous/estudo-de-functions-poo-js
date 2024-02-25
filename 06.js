const prompt = require('prompt-sync')();

/*

Em javascript, para uma variável do tipo Array, os seguintes métodos recebem uma callback function.
forEach(): Chama uma função para cada elemento no array de chamada.
filter(): Retorna um novo array contendo todos os elementos do array original para os quais a função de filtragem fornecida retorna
true.
every(): Retorna true se cada elemento na matriz de chamada satisfizer a função de teste.
map(): Retorna um novo array contendo os resultados da invocação de uma função em cada elemento no array de chamada.
reduce(): Executa uma função de retorno chamada "redutor" fornecida pelo usuário em cada elemento do array (da esquerda para a
direita), para reduzi-lo a um único valor.
some(): Retorna true se pelo menos um elemento no array de chamada satisfizer a função de teste fornecida.
var frutas = ['Maçã', 'Banana', 'Laranja', 'Goiaba', 'Acerola', 'Carambola'];
frutas.forEach(function (item, indice, array) {
console.log(`o ${item} está na posição ${indice}`);
});
*/


/*
var frutas = ['Maçã', 'Banana', 'Laranja', 'Goiaba', 'Acerola', 'Carambola'];
frutas.forEach(function (item, indice, array) {
  console.log(`A ${item} está na posição: ${indice}`);
});
*/


/*
Mais sobre arrays pode ser lido em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array ou
Dado um array A com uma lista de números entre -1 e 37 ( ou seja, [-1, 0, 1, 2, 3, 4, ..., 37], e os primeiros termos da série de Fibonacci: [0,
1, 1, 2, 3, 5, 8, 13, 21, 34], utilize as funções com arrays para realizar as seguintes operações:
1. Filtrar todos os números ímpares do array A
2. Imprimir cada elemento do array resultante do passo [1];
3. Verificar se há algum (pelo menos um) número primo no array resultante de [1];
4. Verificar se todos os elementos do array resultante no passo [1] fazem parte também dos 10 primeiros termos da série de Fibonacci.
5. Multiplique cada elemento do array retornado em [1] por 7
6. Retorna a soma de todo os elementos retornados em [5]

*/

/*
// Definindo o array A
var A = Array.from({ length: 39 }, (_, i) => i - 1); // [-1, 0, 1, 2, ..., 37]

// Definindo os primeiros termos da série de Fibonacci
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// 1. Filtrar todos os números ímpares do array A
var numerosImpares = A.filter(numero => numero % 2 !== 0);

// 2. Imprimir cada elemento do array resultante do passo [1]
console.log(numerosImpares);

// 3. Verificar se há algum (pelo menos um) número primo no array resultante de [1]
var temNumeroPrimo = numerosImpares.some(numero => {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
});

console.log("Há pelo menos um número primo? " + temNumeroPrimo);

// 4. Verificar se todos os elementos do array resultante no passo [1] fazem parte dos 10 primeiros termos da série de Fibonacci
var todosSaoFibonacci = numerosImpares.every(numero => fibonacci.includes(numero));

console.log("Todos os elementos são da série de Fibonacci? " + todosSaoFibonacci);

// 5. Multiplique cada elemento do array retornado em [1] por 7
var arrayMultiplicadoPorSete = numerosImpares.map(numero => numero * 7);

// 6. Retorna a soma de todos os elementos retornados em [5]
var somaDosElementosMultiplicados = arrayMultiplicadoPorSete.reduce((soma, elemento) => soma + elemento, 0);

console.log("A soma dos elementos multiplicados por 7 é: " + somaDosElementosMultiplicados); */

