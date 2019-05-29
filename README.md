# Anotações do Curso Javascript Ninja

Uso esse repositorio para colocar as anotações que faço durante o curso.

<h3>Aula 77</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-toString()</b> = em arrays, convere o array em uma string serparando por vígula.

Exemplo: 

```
var arr = [1, 2, 3, 4];

arr.toString();

//'1,2,3,4'
```

A diferença para .join(), é que o join pode se passar parâmetro. 

```
var arr = [1, 2, 3, 4];

arr.join('-')

//'1-2-3-4'
```

<b>-concat()</b> = faz a união com parâmetro passado, retornando um novo array. Não faz a união de arrays multidimensionais.

Exemplo:

```
var arr = [1, 2, 3, 4];

arr.concat(5)

//[1, 2, 3, 4, 5]
```

O array original continua o mesmo.

```
arr
//[1, 2, 3, 4]
```

<b>-unshifit()</b> = adiciona um item no início do array.

Exemplo:

```
var arr = [1, 2, 3, 4];

arr.unshift(0);

arr
//[0, 1, 2, 3, 4]
```

<b>-shift()</b> = remove o primeiro item do array.

Exemplo:

```
var arr = [0, 1, 2, 3, 4];

arr.shift();

arr
//[1, 2, 3, 4]
```

<h3>Aula 78</h3>

<h5>Arrays</h5>

<h4>Métodos</h4> 

<b>- slice()</b> = retorna uma pedaço do array. Possui dois parâmetros. Não modifica o array principal.
<ol>
  <li> o índice de onde que começar. Passando só m parâmetro pega o array do índice passado até o fim do array.</li> 
  <li> o índice de onde que terminar.</li> 
</ol>

Exemplo:

```
var arr = [1, 2, 3, 4];

arr.slice(1);

//[2, 3, 4]

arr.slice(1, 2);

//[2, 3]
```

<b>- splice()</b> = retorna os valores removidos a partir de um índice passado por parâmetro, modificando o array principal que não tera mais os valores removidos. Passando dois parâmetros o primeiro é o índice de onde que começar a remoção e o segundo quantos itens serão removidos a partir do índice. A partir do terceiro parâmetro passando ele adiciona no array o que está sendo passando. 

Exemplo:

```
var arr = [0, 1, 2, 3, 4];

arr.splice(2)

//[2, 3, 4]

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(6, 3)

//[6, 7, 8]

arr = [0, 1, 2, 3, 4, 5, 6];

arr.splice(1, 0, ‘a’)
[]
arr
//[0, ‘a’, 1, 2, 3, 4, 5, 6]

arr.splice(2, 0, ‘b’, ‘c’, ‘d’);
[]
arr
//[0, ‘a’, ‘b’, ‘c’, ‘d’, 1, 2, 3, 4, 5, 6]
arr.splice(1, 4, 2, 3, 4);
//[‘a’, ‘b’, ‘c’, ‘d’]
arr
//[0, 2, 3, 4, 1, 2, 3, 4, 5, 6]
```

<h3>Aula 79</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>- forEach()</b> = recebe três parâmetros (item, index, array), podendo usar apenas um parâmetro, um pouco mais rápido que o for.

Exemplo: 

```
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
```

<b>- every()</b> = retorna sempre true ou false, baseado na função que é passado. Utilizado para fazer verificação.

Exemplo:

```
var arr = [1, 2, 3, 4, 5, 6, 7];

var every = arr.every(function(item) {
  return item < 5;
});

console.log(every);
```

<b>- some()</b> = retorna true ou false, se pelo menos um dos itens for verdadeiro retorna true.

Exemplo:

```
var arr = [1, 2, 3, 4, 5, 6, 7];

var some = arr.some(function(item) {
  return item % 2 === 0;
});

console.log(some);
```

<h3>Aula 80</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>- map()</b> = recebe uma função como parâmetro que recebe três argumentos. Realiza a operação da função em cada item do array e cria um nome array, não altera o array principal.

Exemplo: 

```
var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item, index, array) {
  return item + 1;
});

console.log(map);
```

<b>- filter()</b> = filtra conforme a instrução que vai ser realizada pela função.

Exemplo:

```
var arr = [1, 2, 3, 4, 5];

var filter = arr.filter(function(item, index, array) {
  return item > 2;
});

console.log(filter);
```

<b><i>* É possível encadear métodos em JavaScript</i></b>

Exemplo:

```
var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item) {
  return item + 10;
}).filter(function(item) {
  return item > 13;
});

console.log(map);
```

<h3>Aula 84</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-reduce()</b> - reduz um array em um unico item, não modifica o array principal

Exemplo:

```
var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acumulado, atual, index, array) {
  return acumulado + atual;
}, 0);

/*
1ª - 0 + 1 = 1
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15
*/
```

<b><i>*Não é obrigatorio passar o valo 0 do primeiro acumulado, mas em alguns casos será necessario.</i></b>

<b>-reduceRight()</b> - reduz também em um unico item só que pegando os valores da direito para a esquerda.

<h3>Aula 85</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-indexOf()</b> - procura se o valor passado existe no array, retornando o indice do item no array se encontrar. Caso não exista retorna -1. Pode se usar um segundo parâmetro que informa de onde que começa a busca no array.

Exemplo:

```
var arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));
```

<b>-lastIndexOf()</b> - também procura o valor passo se existe só que do final para o inicio. Retorna o indice normal do array.

<b>-Array.isArray()</b> - verifica se é o item é um array.

<h3>Aula 90</h3>

<h4>JS no browser</h4>

<b>-IIFE</b> - faz o codigos se tornarem local

<b><i>*Uma das funções do uso do IIFE nos codigos js é importante para não haver conflitos em variaves local e global.</i></b>

Em JS existe apenas escopo global e local. 

Global - quando está fora das funções, acesséveis a todos.

Local - quando dentro de uma função, apenas pode ser acessado pelo que estive dentro da função. 

<h3>Aula 91</h3>

<h4>O objeto this</h4>

<b>-this</b> - O this dentro de métodos e obejtos é uma referência para o objeto principal. <i>No geral, this sempre levará o valor do contexto superior, ou seja, o valor daquele objeto que o invocou.</i>

```
let nome = 'João'

function dizerFrase() {
  console.log(`${this.nome} está correndo para pegar o trem!`)
}

dizerFrase() // João está correndo para pegar o trem!

let pedro = {
  nome: 'Pedro',
  dizerFrase: function () {
    console.log(`${this.nome} está correndo para pegar o trem!`)
  }
}

pedro.dizerFrase() // Pedro está correndo para pegar o trem!
```
https://imasters.com.br/javascript/javascript-entendendo-o-de-uma-vez-por-todas

<b>-Construtores</b> - por convenção nome de construtores sempre começam com letra maiuscula.

Exemplo: no browser

```
(function(){
  function MyConstructor(){
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
  }

var constructor = new MyConstructor();
console.log('MyConstructor', MyConstructor());
//MyConstructo MyConstructor {pro1: "prop1", prop2: "prop2"}
})();
```

<h3>Aula 92</h3>

<h4>arguments</h4>

Exemplo:

```
(function(){
  function myFunction(){
    return arguments;
    //return arguments[1];
  }

  console.log(myFunction(1, 2));
  //[1, 2]
  //2
})();
```