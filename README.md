# Anotações do Curso Javascript Ninja

Uso esse repositório  para colocar as anotações que faço durante o curso.

<h3>Aula 77</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-toString()</b> = em arrays, converte o array em uma string separando por vírgula.

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

<b>-reduce()</b> - reduz um array em um único item, não modifica o array principal

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

<b><i>*Não é obrigatório passar o valo 0 do primeiro acumulado, mas em alguns casos será necessario.</i></b>

<b>-reduceRight()</b> - reduz também em um único item só que pegando os valores da direito para a esquerda.

<h3>Aula 85</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-indexOf()</b> - procura se o valor passado existe no array, retornando o índice do item no array se encontrar. Caso não exista retorna -1. Pode se usar um segundo parâmetro que informa de onde que começa a busca no array.

Exemplo:

```
var arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));
```

<b>-lastIndexOf()</b> - também procura o valor passo se existe só que do final para o inicio. Retorna o índice normal do array.

<b>-Array.isArray()</b> - verifica se é o item é um array.

<h3>Aula 90</h3>

<h4>JS no browser</h4>

<b>-IIFE</b> - faz o códigos se tornarem local

<b><i>*Uma das funções do uso do IIFE nos códigos js é importante para não haver conflitos em varíaves local e global.</i></b>

Em JS existe apenas escopo global e local. 

Global - quando está fora das funções, acessíveis a todos.

Local - quando dentro de uma função, apenas pode ser acessado pelo que estive dentro da função. 

<h3>Aula 91</h3>

<h4>O objeto this</h4>

<b>-this</b> - O this dentro de métodos e objetos é uma referência para o objeto principal. <i>No geral, this sempre levará o valor do contexto superior, ou seja, o valor daquele objeto que o invocou.</i>

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

<b>-Construtores</b> - por convenção nome de construtores sempre começam com letra maiúscula.

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
<h3>Aula 94</h3>

<h4>'use strict'; - Criação de variáveis sem o "var"</h4>

O uso do 'use strict'; é para corrigir erros do ECMAScript anterior ao 5 como, poder acessar as varíaves declaradas em função sem o "var" fora da função. É informado um erro quando isso acontece. 

Pode ser usado tanto no escopo global quando no local.

```
(function() {
  'use strict';
  var myName = 'Décio Francis';
  console.log(myName);
})();
console.log(myName);

//Décio Francis
//ReferenceError
```

<h3>Aula 95</h3>

<h4>'use strict'; - uso do with e global this === undefined</h4>

<b>- with</b> - não é permitido quando se usa 'use strict'; O uso do with é para estender a cadeia do escopo para uma declaração.

```
(function() {
  'use strict';
  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31: 'prop31',
          prop32: 'prop32',
          prop33: 'prop33'
        }
      }
    }
  };
  console.log(obj.prop1.prop2.prop3.prop31);
  console.log(obj.prop1.prop2.prop3.prop32);
  console.log(obj.prop1.prop2.prop3.prop33);

  //usando o with
  with(obj.prop1.prop2.prop3){
    console.log(prop31, prop32, prop33);
  }
})();

//prop31 
//prop32 
//prop33
//prop31 prop32 prop33
```
- No escopo global, dentro de funções o this === undefined

```
(function() {
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  console.log(Person('Décio', 'Silva', 30));
})();
console.log(name, lastName, age);

//undefined
// Décio Francis 30

(function() {
  'use strict';
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  console.log(Person('Décio', 'Silva', 30));
})();
console.log(name, lastName, age);

//TypeError

(function() {
  'use strict';
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  console.log(this === undefined);
})();

//true
```

<h3>Aula 96</h3>

<h4>'use strict'; - O operador delete, objetos e funções</h4>

<b>- delete</b> - pode se usar para deletar propriedades de um objeto, mas não para deletar variáveis, objetos (fora do modo restrito, delete não faz nada e é avaliada como false, no modo restrito lança um SyntaxError se não puder deletar).

```
(function() {
  var myVar =  2;
  var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }
  console.log(delete obj.prop1);
})();

//true

(function() {
  var myVar =  2;
  var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }
  console.log(delete myVar);
})();

//false

(function() {
  'use strict';
  var myVar =  2;
  var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }
  console.log(delete myVar);
})();

//SyntaxError
```

<b>-Objetos</b> - Propriedades devem ter nomes diferentes

<b>-Funções</b> - Argumentos devem ter nomes diferentes

<h3>Aula 96</h3>

<h4>Objeto String</h4>

<b>.length</b> - conta quantos caracteres tem uma string.

```
'decio'.length
//5
```
<b>.chartAt(index)</b> - diz qual é o carácter no índice que for passado.

```
'decio'.chartAt(0)
//d
```
<b>.concat(str1, str2,...,strN)</b> - concatena quantas strings forem passadas por parâmetro. Não modifica a string principal

```
'decio'.concat(' francis', ' silva')
//decio francis silva
```

<b>.indexOf(string [,start])</b> - verifica se existe o parâmetro passado e retorna a posição caso exista e -1 se não existir.

```
'decio'.indexOf(d)
//0
```

<b>.lastIndexOf(string [,start])</b> - funciona como o indexOf só que de tras pra frente.

<b>.replace(string, newString)</b> - substitui uma string por uma nova string. Não modifica a string principal. É feito uma vez só.

```
'decio'.replace(d, z)
//zecio
```
<b>.slice(start [,end])</b> - pega todos os caracteres a partir do índice passado. Criando uma nova string.

```
'decio'.slice(3)
//io
'decio'.slice(1, 4)
//eci
```

<b>.split([separador] [,limit])</b> - quebra a string e transforma em um array.

```
'decio'.split(c)
//['de', 'io']
```

<b>.substring(start [, end])</b> - pega todos os caracteres a partir do índice passado, mas diferente do slice ele quando o numero passado é maior que a strint ele retorna pegando do final para o inicio os caracteres.

```
'decio'.substring(2, 4)
//ci
'decio'.substring(6, 2)
//cio
```

<b>.toLowerCase()</b> - coloca as strings em minúsculo.

<b>.toUpperCase()</b> - coloca as strings em maiúsculo.

```
'DeCio'.toLowerCase()
//decio
'deCiO'.toUpperCase()
//DECIO
```
<h3>Aula 102</h3>

<h4>Regex</h4>

São tipos primitivos em javascrip, são bastante usado em manipulação de strings. É case sensitive.

Site para testes - https://regex101.com/

<b>-Objeto RegExp()</b> - cria um objeto de expressão regular para corresponder texto com um padrão.

<b>-match()</b> - Esse método recupera as correspondências ao testar uma string com uma expressão regular.

```
/padrão/flags
new RegExp(padrão[, flags])

var texto = 'A Wikipédia é um projeto de enciclopédia colaborativa, universal e multilíngue estabelecido na internet sob o princípio wiki. ';

texto.match(/o/);
//['o']
texto.match(/o/g);
//[ 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ]
```

<h3>Aula 103</h3>

<h4>Regex</h4>

Podem usar literais, letras e  números basicamente. 

<b>-flags</b> 
g: global
i: ignore case 

<b>- Termos</b>
\w: caracteres alfanuméricos e _
\d: números (digits)

```
var texto = 'A Wikipédia é um projeto de enciclopédia colaborativa, universal e multilíngue estabelecido na internet sob o princípio wiki. 1234';

texto.match(/\w/g);
//Array[101] - traz todos os caracteres separados em um array.

texto.match(/\d/);
//['1']
texto.match(/\d\d/);
//['12']
```

Se o regex passando não for encontrado retorna null.

<b>-Classes de caracteres (listas)</b> - pega um conjunto específico de caracteres.

```
var texto = 'A Wikipédia 2 é um projeto de 1 enciclopédia colaborativa, universal e multilíngue 3 estabelecido na 4 internet sob o princípio wiki.';

texto.match(/[123]/g);
//['2', '1', '3']
```

<b>Agrupamento de caracteres()</b>

```
var texto = 'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaborativa, universal e multilíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.';

texto.match(/1867|1845/g);
//['1867', '1845']
```

```
var texto = 'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaborativa, universal e multilíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.';

texto.match(/[a-z]/g);
//Array[99]
```

<h3>Aula 104</h3>

<h4>Regex</h4>

Tabela unicode - fica atento aos caracteres que estão nos intervalos.

Pode se usar regex no .replace()

```
var texto = 'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaborativa, universal e multilíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.';

texto.replace(/ti/g, 'TI');
//'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaboraTIva, universal e mulTIlíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.'

texto.replace(/(t)(i)/g, '$1');
//'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaboratva, universal e multlíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.'
//$1 - substitui pela primeira captura.

texto.replace(/(t)(i)/g, '$2');
//'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaboraiva, universal e mulilíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.'
//$2 - substitui pela segunda captura.
//$& - pega todas as capturas.

texto.replace(/(t)(i)/g, function(capturaTotal, t, i){
  return (t+i).toUpperCase();
})
//'A Wikipédia 2 é um projeto 1867 de 1 enciclopédia colaboraTIva, universal e mulTIlíngue 3 estabelecido na 4 internet sob 1845 o princípio wiki.'
```