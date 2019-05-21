# Respostas e anotações do Curso Javascript Ninja

Anotações

Aula 77

Arrays

Métodos

-toString() = em arrays, convere o array em uma string serparando por vígula.

Exemplo: 

var arr = [1, 2, 3, 4];

arr.toString();

'1,2,3,4'

A diferença para .join(), é que o join pode se passar parâmetro. 

var arr = [1, 2, 3, 4];

arr.join('-')

'1-2-3-4'

-concat() = faz a união com parâmetro passado, retornando um novo array. Não faz a união de arrays multidimensionais.

Exemplo:

var arr = [1, 2, 3, 4];

arr.concat(5)
[1, 2, 3, 4, 5]

O array original continua o mesmo.
arr
[1, 2, 3, 4]

-unshifit() = adiciona um item no início do array.

Exemplo:

var arr = [1, 2, 3, 4];

arr.unshift(0);

arr
[0, 1, 2, 3, 4]
-shift() = remove o primeiro item do array.

Exemplo:

var arr = [0, 1, 2, 3, 4];

arr.shift();

arr
[1, 2, 3, 4]


Aula 78

Arrays 

Método 

- slice() = retorna uma pedaço do array. Possui dois parâmetros. Não modifica o array principal.
1º -  o índice de onde que começar. Passando só m parâmetro pega o array do índice passado até o fim do array. 
2º - o índice de onde que terminar. 

Exemplo:

var arr = [1, 2, 3, 4];

arr.slice(1);
[2, 3, 4]

arr.slice(1, 2);
[2, 3]

- splice() = retorna os valores removidos a partir de um índice passado por parâmetro, modificando o array principal que não tera mais os valores removidos. Passando dois parâmetros o primeiro é o índice de onde que começar a remoção e o segundo quantos itens serão removidos a partir do índice. A partir do terceiro parâmetro passando ele adiciona no array o que está sendo passando. 

Exemplo:

var arr = [0, 1, 2, 3, 4];

arr.splice(2)

[2, 3, 4]

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(6, 3)

[6, 7, 8]

arr = [0, 1, 2, 3, 4, 5, 6];

arr.splice(1, 0, ‘a’)
[]
arr
[0, ‘a’, 1, 2, 3, 4, 5, 6]

arr.splice(2, 0, ‘b’, ‘c’, ‘d’);
[]
arr
[0, ‘a’, ‘b’, ‘c’, ‘d’, 1, 2, 3, 4, 5, 6]
arr.splice(1, 4, 2, 3, 4);
[‘a’, ‘b’, ‘c’, ‘d’]
arr
[0, 2, 3, 4, 1, 2, 3, 4, 5, 6]

Aula 79

Arrays

Métodos

- forEach() = recebe três parâmetros (item, index, array), podendo usar apenas um parâmetro, um pouco mais rápido que o for.

Exemplo: 

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(item, index, array) {
  console.log(item, index, array);
});

var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;

arr.forEach(function(item) {
  sum += item;
});

console.log(sum);

- every() = retorna sempre true ou false, baseado na função que é passado. Utilizado para fazer verificação.

Exemplo:

var arr = [1, 2, 3, 4, 5, 6, 7];

var every = arr.every(function(item) {
  return item < 5;
});

console.log(every);

- some() = retorna true ou false, se pelo menos um dos itens for verdadeiro retorna true.

Exemplo:

var arr = [1, 2, 3, 4, 5, 6, 7];

var some = arr.some(function(item) {
  return item % 2 === 0;
});

console.log(some);

Aula 80

Arrays 

Métodos

- map() = recebe uma função como parâmetro que recebe três argumentos. Realiza a operação da função em cada item do array e cria um nome array, não altera o array principal.

Exemplo: 

var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item, index, array) {
  return item + 1;
});

console.log(map);

- filter() = filtra conforme a instrução que vai ser realizada pela função.

Exemplo:

var arr = [1, 2, 3, 4, 5];

var filter = arr.filter(function(item, index, arrya) {
  return item > 2;
});

console.log(filter);

* É possível encadear métodos em JavaScript

Exemplo:

var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item) {
  return item + 10;
}).filter(function(item) {
  return item > 13;
});

console.log(map);

