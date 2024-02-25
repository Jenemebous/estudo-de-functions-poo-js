const prompt = require('prompt-sync')();

/*

Para Estudar
Material da disciplina "Mais sobre Funções + Programação Funcional"
Problemas para Resolver
1. Qual é a sintaxe correta para uma arrow function em JavaScript?
a) function => {}
b) () => {} //X
c) => {}
d) => () {}


2. Qual é o propósito principal das funções anônimas em JavaScript?
a) Permitir a definição de funções sem nome. //X
b) Ajudar a reduzir o acoplamento em programas.
c) Facilitar a reutilização de código.
d) Melhorar a legibilidade do código fonte.
// Qual é o propósito principal das funções anônimas em JavaScript?
const anonFunc = function() {};

3. Complete a função abaixo para calcular a soma de todos os elementos ímpares de um array usando programação funcional:
const array = [1, 2, 3, 4, 5];
const sum = array.reduce(
(accumulator, currentValue) => {
 //return currentValue % 2 !== 0 ? accumulator + currentValue : accumulator;
}, 0);
}, 0);
console.log(sum); // Deve imprimir 9



4. Qual é a saída do código abaixo? Responda sem executar o código no computador.
const array = [1, 2, 3, 4, 5];
setTimeout(() => {
console.log(array.map(x => x * 2));
}, 1000);
console.log("Fim do código");
a) [1, 2, 3, 4, 5]
b) [2, 4, 6, 8, 10] //X
c) "Fim do código"  //X
d) undefined

5. O código abaixo tem um erro. Identifique-o e corrija-o:
const array = [1, 2, 3, 4, 5];
array.forEach(item => {
console.log(item * 2);
});  //NÃO TEM ERRO

6. Complete o código abaixo para que a função calculateArea retorne a área de um círculo, dado o raio como parâmetro:
const calculateArea = (radius) => {
// const area = Math.PI * Math.pow(radius, 2);
  return area;
};
console.log(calculateArea(5)); // Deve retornar a área correta do círculo com raio 5.


7. Escreva uma função filterWords que aceite um array de palavras e uma função de callback. A função deve filtrar as palavras do array
que satisfazem a condição fornecida pela função de callback.

const filterWords = (palavras, callback) => {
  return palavras.filter(callback);
};

// Exemplo de uso:
const arrayDePalavras = ['gato', 'cachorro', 'pássaro', 'elefante'];
const resultadoFiltrado = filterWords(arrayDePalavras, palavra => palavra.length > 5);
console.log(resultadoFiltrado);
// Saída: ['cachorro', 'elefante']


8. Desenvolva uma função mergeArrays que aceite dois arrays como entrada e retorne um novo array que contenha todos os elementos
dos arrays de entrada, intercalados.

const mergeArrays = (array1, array2) => {
  const mergedArray = [];
  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) mergedArray.push(array1[i]);
    if (i < array2.length) mergedArray.push(array2[i]);
  }

  return mergedArray;
};

// Exemplo de uso:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const resultadoMesclado = mergeArrays(array1, array2);
console.log(resultadoMesclado);
// Saída: [1, 2, 3, 4, 5, 6]


9. Escreva uma função findDuplicates que aceite um array como entrada e retorne um novo array contendo apenas os elementos
duplicados do array de entrada.

const findDuplicates = (array) => {
  const duplicados = array.filter((elemento, indice, arrayOriginal) => {
    return arrayOriginal.indexOf(elemento) !== indice;
  });

  // Remover duplicatas para evitar repetições no resultado
  return [...new Set(duplicados)];
};

// Exemplo de uso:
const arrayComDuplicatas = [1, 2, 3, 2, 4, 5, 3, 6];
const resultadoDuplicatas = findDuplicates(arrayComDuplicatas);
console.log(resultadoDuplicatas);
// Saída: [2, 3]


*/