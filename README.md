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
-shifit() = remove  o primeiro item do array.

Exemplo:

var arr = [0, 1, 2, 3, 4];

arr.shift();

arr
[1, 2, 3, 4]

