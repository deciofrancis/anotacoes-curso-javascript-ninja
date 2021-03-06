# Anotações do Curso Javascript Ninja

Uso esse repositório  para colocar as anotações que faço durante o curso.

<h3>Aula 77</h3>

<h5>Arrays</h5>

<h4>Métodos</h4>

<b>-toString()</b> - em arrays, converte o array em uma string separando por vírgula.

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

<b>-concat()</b> - faz a união com parâmetro passado, retornando um novo array. Não faz a união de arrays multidimensionais.

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

<b>-unshifit()</b> - adiciona um item no início do array.

Exemplo:

```
var arr = [1, 2, 3, 4];

arr.unshift(0);

arr
//[0, 1, 2, 3, 4]
```

<b>-shift()</b> - remove o primeiro item do array.

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

<b>- slice()</b> - retorna uma pedaço do array. Possui dois parâmetros. Não modifica o array principal.
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

<b>- splice()</b> - retorna os valores removidos a partir de um índice passado por parâmetro, modificando o array principal que não tera mais os valores removidos. Passando dois parâmetros o primeiro é o índice de onde que começar a remoção e o segundo quantos itens serão removidos a partir do índice. A partir do terceiro parâmetro passando ele adiciona no array o que está sendo passando. 

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

<b>- forEach()</b> - recebe três parâmetros (item, index, array), podendo usar apenas um parâmetro, um pouco mais rápido que o for.

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

<b>- every()</b> - retorna sempre true ou false, baseado na função que é passado. Utilizado para fazer verificação.

Exemplo:

```
var arr = [1, 2, 3, 4, 5, 6, 7];

var every = arr.every(function(item) {
  return item < 5;
});

console.log(every);
```

<b>- some()</b> - retorna true ou false, se pelo menos um dos itens for verdadeiro retorna true.

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

<b>- map()</b> - recebe uma função como parâmetro que recebe três argumentos. Realiza a operação da função em cada item do array e cria um nome array, não altera o array principal.

Exemplo: 

```
var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item, index, array) {
  return item + 1;
});

console.log(map);
```

<b>- filter()</b> - filtra conforme a instrução que vai ser realizada pela função.

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

<b>-Objetos</b> - propriedades devem ter nomes diferentes

<b>-Funções</b> - argumentos devem ter nomes diferentes

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

<b>-match()</b> - esse método recupera as correspondências ao testar uma string com uma expressão regular.

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

<h3>Aula 108</h3>

<h4>Regex</h4>

<b>-[]</b> - Lista - corresponde a um dos que estiverem dentro
<b>-()</b> - Grupo - Captura
<b>-\w</b> - Caracteres alfanuméricos [A-Za-z0-9_]
<b>-\d</b> - Dígitos [0-9]
<b>-\s</b> - Espaço em branco
<b>-\n</b> - Quebra de linha
<b>-\t</b> - Tabulação
<b>-.</b>  - Qualquer caracter menos o quebra de linha

<h3>Aula 109</h3>

<h4>Regex</h4>

<b>Negação</b>

<b>-[^abc]</b> - O match deve ser feito com qualquer item, menos com as da lista - a, b ou c, por exemplo
<b>\W</b> - Qualquer caractere, menos os alfanuméricos
<b>\D</b> - Qualquer caractere, menos os digítos
<b>\S</b> - Qualquer caractere, menos os espaçoes em branco

<b>Repetidores</b>

<b>-{n,m}</b> - intervalo - item anterios ao menos n vezes, e no máximo m vezes

<h3>Aula 110</h3>

<h4>Regex</h4>

<b>Repetidores</b>

<b>-{n,}</b> - intervalo aberto - item anterior n ou masi vezes
<b>-{n}</b> - item anterior exatamente n vezes.
<b>-?</b> - opcional - zero ou uma ocorrência do item anterior
<b>-+</b> - uma ou mais ocorrência do item anterior
<b>-*</b> - zero ou mais ocorrência do item anterior

<h3>Aula 114</h3>

<h4>Regex</h4>

<b>-^</b> - início de string
<b>-$</b> - fim de string
<b>-flag m</b> - multiline
<b>-?</b> - repetição não gulosa (se usado após repetidores)
<b>-(?:)</b> - somente agrupamento, sem captura
<b>-\1, \2</b> - refereência dentro da regex

<h3>Aula 115</h3>

<h4>Regex</h4>

Métodos de string onde você pode usar regex

<b>-.match(regexp)</b> - retorna um array com os match ou null caso não faça match
<b>-.replace(regexp, string)</b> 
<b>-.split(regexp)</b> - quebra de acordo a regra passada, transforma string para array
<b>-.search(regexp)</b> - busca o indice do caracter passado, caso não encontre retorna -1

<h3>Aula 116</h3>

<h4>Regex</h4>

<b>-Construtor RegExp()</b> - cria um objeto de expressão regular para corresponder texto com um padrão.

```
/ab+c/i;
new RegExp('ab+c', 'i');

var re = /\w+/;
var re = new RegExp('\\w+');
```

<h5>Métodos de RegExp</h5>

<b>-.test(string)</b> - verifica se existe o parâmetro passado
<b>-.exec(string)</b> - executa a busca por um padrão em uma determinada string. Retorna um array, ou null.

É possível utilizar Caracteres especiais de RegExp em String
Escapar aspas em string com \

<h3>Aula 120</h3>

<h4>Js no browser</h4>

IIFE e passagem de paramentros local e global.

```
var name = 'daciuk';
function myFunction() {
  var name = 'arroz';
  console.log( name ); // 'arroz'
}
console.log( name ); // 'daciuk'

(function(win) {
  if( win === window )
    console.log( 'win é uma referência local à window' );
})(window);
```

<b>if / while / for</b> - com 1 linha não precisam das chaves

```
(function(win) {
  if( win !== window )
    console.log( 'win é uma referência local à window' );
    console.log( 'Essa mensagem sempre é mostrada' );
})(window);
```
É possível usar o objeto window com ou sem o window na frente

```
(function(win) {
    'use strict';
    window.alert('Mensagem!');
    alert('Mensagem2!');
})(window);
```

<b>objeto window.alert</b>

```
(function(win) {
    'use strict';
    window.alert('Mensagem!');
})(window);
```
<b>objeto window.prompt</b> - faz um pergunta e espera uma resposta

```
(function(win) {
    'use strict';
    window.prompt('Mensagem?');
})(window);
```

<h3>Aula 121</h3>

<h4>Js no browser</h4>

<b>objeto window.confirm</b>

```
(function(win) {
    'use strict';
    
    var del = window.confirm('Deseja realmente excluir?');
    if(del)
      console.log('Excluído com sucesso!', del);
    else
      console.log('Ação cancelada!');
})(window);
```

<b>objeto window.document</b> DOM - Documente Objeto Model

<img src='https://www.w3schools.com/js/pic_htmltree.gif'>

<b>document.getElementById(id)</b> - procura o elemente pelo id
<b>document.getElementsByTagName(name)</b>	- procura o elemento pela tag name
<b>document.getElementsByClassName(name)</b> - procura o elemento pela class name

<h3>Aula 122</h3>

<h4>Js no browser</h4>

<b>document.getElementsByName(name)</b> - procura o elemento pelo nome

Quando for pegar elemento do DOM com variáveis utilizar $ no começo do nome da variável.

```
(function(win, doc) {
    'use strict';
    
    var $inputs = doc.getElementsByTagName('input');
    console.log($inputs);
})(window, document);
```

<b>document.querySelector('.example');</b> - pega apenas um item
<b>document.querySelectorAll('.example');</b> - pega todos os itens

São elementos estáticos

<h3>Aula 123</h3>

<h4>Js no browser</h4>

<h5>Formulários</h5>

<b>.value</b> - pegar valores de inputs

<h5>Introdução à eventos</h5>

<b>.addEventListener()</b>

Evento 'click' <b>.addEventListener('click')</b>

<h3>Aula 127</h3>

<h4>Sync vs async</h4>

<b>Event loop</b>

<img src='https://i.stack.imgur.com/BTm1H.png'>

<h3>Aula 128</h3>

<h4>Sync vs async</h4>

<b>setTimeout()</b>

```
window.setTimeout(function() {
  alert('Hello World!');
}, 1000);
```

<b>setInterval()</b> - executa até uma ordem de parar

<h3>Aula 129</h3>

<h4>setTimeout vs setInterval</h4>

setTimeout só coloca na fila após o termino da execução do anterios. 
Diferença de performace.

<b>clearTimeout(id)</b>
<b>clearInterval(id)</b>

<h3>Aula 132</h3>

<h4>Propriedade e métodos de funções</h4>

<b>.name</b>
<b>.length</b> - é possível a utilização para saber quantos parâmetros são passados para a função

```
function myFunction(a, b, c, d){

}
console.log(myFunction.length);
```

<b>.toString()</b> - retorna todo o corpo da função em formato de string

<b>.call()</b>
<b>.call(this)</b>

<h3>Aula 133</h3>

<h4>Propriedade e métodos de funções</h4>

<b>.call(this, arg1, arg2, ..., argN)</b>
<b>.apply()</b>
<b>.apply(this, [arg1, arg2, ..., argN])</b>

<h3>Aula 134</h3>

<h4>Prototype</h4>

Praticamente todos os objetos em JavaScript descendem de Object; todos os métodos e propriedades herdados de Object.prototype, embora possam ser sobrescritos (exceto um Objeto com protótipo nulo, i.e. Object.create(null)). Por exemplo, outros protótipos construtores sobrescrevem a propriedade construtora e fornece seus próprios toString() métodos.

Modificações no Objeto protótipo do objeto são propagadas a todos objetos através do encadeamento de protótipos, a menos que as propriedades e métodos  submetidos às mudanças sejam sobrescritos mais além no encadeamento dos protótipos. Este recurso oferece um mecânismo muito poderoso apesar de perigoso para sobrescrita e extensão de objetos.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

<h3>Aula 135</h3>

<h4>Array-like com Arrays</h4>

<b>Array.prototype</b>
<b>Array.prototype.forEach.call</b>

```
function myFunction() {
  Array.prototype.forEach.call(arguments, function(item, index) {
    console.log(item);
  });
}
myFunction(1, 2, 3, 4, 5, 6, 7, 8);
```

<b>.editorconfig</b> - https://editorconfig.org/

<h3>Aula 138, 139, 140, 141</h3>

<h4>Debug</h4>

Uso de breakpoint - não tem utilidade ser por na linha 1 do código porque executa a linha anterior ao breakpoint

https://developer.chrome.com/devtools

<b>console.timeEnd()</b> saber quanto tempo está demorando para ser executado o código

<h3>Aula 151</h3>

<h4>Scripts e eventos inline</h4>

*Não utilizar esses tipos de scripts e eventos inline não é boas praticas

Exemplo:

<a href="javascript:bom()">Boom!</a>

<h4>Eventos</h4>

https://developer.mozilla.org/en-US/docs/Web/Events

<h3>Aula 154 a 159</h3>

<h4>DOM</h4>

<img src='https://www.w3schools.com/js/pic_htmltree.gif'>

<h4>Percorrer DOM</h4>

https://tableless.com.br/entendendo-o-dom-document-object-model/

Suporte de features nos browser - https://caniuse.com/

<b>Propriedades</b>

<b>.parentNode</b> - retorna o nó (node) parente de um Node referenciado na árvore DOM

<b>.childNodes</b> - retorna uma coleção viva de nós filhos de um dado elemento

<b>.firstChild</b> - retorna o node (nó) do primeiro elemento filho de uma árvore DOM ou null no caso do elemento não ter filhos 

<b>.lastChild</b> - retorna o último elemento filho (node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node, um text node, ou um comment node. Retornará null se o elemento de referência não tiver elementos filhos child

<b>.nextSibling</b> - retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai(childNodes), ou null se o nó especificado for o último nó da lista

<b>.previousSibling</b> - retorna o nó que precede o nó especificado na lista de childNodes do nó pai, retorna null se o nó especificado é o primeiro desta lista

<b>.nodeType</b> - mostra o tipo de nó que nós temos

<b>.nodeType</b> 
  - Document = 9 
  - Element = 1 
  - Text = 3 
  - Comments = 8 
  - documentFragment = 11

<b>.nodeValue</b> - Conteúdo textual de Text e Comment

<b>.nodeName</b> -  mostra o nome do nó

<b>.children</b> - Não padronizada - retorna uma coleção HTMLCollection dos elementos filhos do nó

<b>.firstElementChild</b> - primeiro filho que é o elemento

<b>.lastElementChild</b> - pega o último elemento

<b>.nextElementSibling</b> - pega o próximo elemento

<b>.previousElementSibling</b> - pega o elemento anterior

<b>.childElementCount</b> - quantidades de filhos desse elemento o mesmo que children.length

<b>Métodos</b>

<b>.hasAttribute(name)</b> - verifica se tem esse atributo - tre ou false

<b>.hasAttributes()</b> - verifica se o elemento tem qualquer atributo

<b>.appendChild(child)</b> - adiciona um filho em um elemento

<b>.insertBefore(node, beforeWhom)</b> - insere um filho antes, recebe dois parâmentros o primeiro é o nó e o segundo é antes de quem que ele vai ser inserido

<b>.cloneNode(boolean)</b> - clona um nó existente

<b>.hasChildNodes()</b> - verifica se o elemento tem algum nó filho

<b>.removeChild(child)</b> - remove um elemento filho

<b>.replaceChild(new, old)</b> -  substitui um filho, passando o novo filho e o antigo

<b>.creatTextNode(text)</b> - cria um nó de texto
  - document.createTextNode(text)
  - document.createElement(tagName)

<b>Atributos</b>

<b>element.id</b> - retorna o id

<b>element.className</b> - retorna className

<b>.getAttribute(attr)</b> - retorna qualquer atributo
  - sempre string

<b>.setAttribute(attr, value)</b> - cria ou modifica um atributo

<h3>Aula 162</h3>

<h4>DOM - Manipular com performance</h4>

<b>document.createDocumentFragment()</b> - sempre quando for manipular elementos dentro do DOM usar para manter performace
  - parentNode == null

<h3>Aula 163</h3>

<h4>Eventos</h4>

*Posição dos scripts no HTML importa

<b>document = DOMContentLoaded</b> - espera todo o conteúdo do HTML seja carregado para disparar o elemento

<b>window = load</b> -  desde que o carregamento não seja assíncrono, espera tudo que está dentro do window carregar primeiro e depois disparar o evento

<h3>Aula 164</h3>

<h4>Técnicas NINJA</h4>

<b>Copiar arrays</b>

<b>Array.prototype.slice</b>

```
(function() {
  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var arr2 = arr.slice();
  var $divs = document.querySelectorAll('div');
  var $divsCopy = Array.prototype.slice.call($divs);
  console.log(arr, arr2, arr === arr2);
  console.log($divs, $divsCopy, $divs === $divsCopy);
;})();
```

<b>Como saber o tipo de dado real de um elemento</b>

<b>Object.prototype.toString</b>

```
(function() {
  'use strict';

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return is(obj) === '[object Array]';
  }

  function isObject(obj) {
    return is(obj) === '[object Object]';
  }

  function isFunction(obj) {
    return is(obj) === '[object Function]';
  }

  function isNumber(obj) {
    return is(obj) === '[object Number]';
  }

  console.log(isArray([1, 2, 3]));
  console.log(isNumber(1));
;})();
```

<h3>Aula 168</h3>

<h4>AJAX</h4> - traz requisições sem precisar recarregar a tela

<b>var ajax = new XMLHttpRequest();</b> - estância um novo objeto para fazer a requisição

<b>ajax.open(<protocol>, <url>);</b> - abrir uma conexão informando o protocolo e a url que vai se utilizar

<b>ajax.send(<data>)</b> - enviar os dados para o servidor caso tenha dados

<h3>Aula 169</h3>

<h4>AJAX</h4>

<b>Evento onreadystatechange</b> - monitora o estado do evento se muda ou não 

<b>ajax.readyState</b> - monitora o estado real da requisição
  - Estados
    - 0: Não enviada
    - 1: Conexão aberta
    - 2: Headers recebidos - cabeçalhos
    - 3: CArregando corpo do request
    - 4: Concluído

<b>ajax.status</b> - HTTP STATUS (200, 403, 404, 500, ect)

<h3>Aula 170</h3>

<h4>AJAX - Manipulando a resposta</h4>

<b>ajax.responseText</b> - resposta da requisição

<b>ajax.responseXML</b> - converte a resposta em XML para documento

<h3>Aula 172</h3>

<h4>AJAX - Tratamento de erros</h4>

<b>try / catch</b>

<h4>Crianco um servidor HTTP com Python</h4>

https://sempreupdate.com.br/crie-um-servidor-http-simples-em-poucos-minutos/

<h3>Aula 183</h3>

<b>instanceof</b> - testa se um objeto tem, em seu prototype, a função construtora

<h3>Aula 185</h3>

<b>Closure</b> - https://github.com/ericdouglas/traduz-ai/blob/master/javascript/004-entenda-closures-no-javaScript-com-facilidade.md

<h4>Manipulando CSS</h4>

<b>element.style</b>

<b>element.classList</b> -  add, remove, toggle, contains

<h3>Aula 186</h3>

<h4>DOM</h4>

<b>innerHTML</b> - define ou obtém a sintaxe HTML descrevendo os elementos descendentes

<h3>Aula 188</h3>

<h4>DOM</h4>

<b>insertAdjacentHTML(pos, text)</b> - escolhe uma posição onde o html vai ser inserido 
  - beforebegin - afterbegin
  - beforeend - afterend
´´´
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
´´´

<h3>Aula 189</h3>

<b>devdocs.io</b> - documentação

<h4>Date Object</h4>

```
var date = new Date();
```

<b>Date.now()</b>
<b>date.getDate();</b> // 0-31
<b>date.getDay();</b> // 0-6
<b>date.getFullYear();</b> // 2019
<b>date.getYear();</b> // 115
<b>date.getHours();</b> // 0-23
<b>date.getMilliseconds();</b> // 0-999
<b>date.getMinutes();</b> // 0-59
<b>date.getMonth();</b> // 0-11
<b>date.getSeconds();</b> // 0-59
<b>date.getTime();</b> // ms desde 1/1/1970 0:00:00 UTC

<h3>Aula 191</h3>

<h4>Math Object</h4>

<b>Math.PI</b> - traz o número PI
<b>Math.abs(x)</b> - valor absoluto de um número - valor positivo
<b>Math.ceil(x)</b> - arredonda o valor sempre para cima
<b>Math.floor(x)</b> - arredonda sempre para baixo
<b>Math.round()</b> - respeira a regra de arredondamento
<b>Math.sqrt(x)</b> - método que tira raiz quadrada
<b>Math.cbrt(x)</b> - raiz cubica
<b>Math.max([x1, x2, xN])</b> - parametros não são obrigatorios, maior valor passado por parâmetro
<b>Math.min([x1, x2, xN])</b> - parametros não são obrigatorios, menor valor passado por parâmetro
<b>Math.random()</b> - tras um número aleatório entre 0 e 1 

<h3>Aula 193</h3>

<h4>Ajax</h4>

*nodemon - faz um auto-restar da aplicação toda vez que um arquivo do projeto for modificado

<b>express</b> - cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.

<h3>Aula 193</h3>

<h4>Ajax</h4>

<b>módulo cors</b> - permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.

<h3>Aula 194</h3>

<h4>Ajax</h4>

<b>verbo POST</b>

```
ajax.open('POST', <url>)

ajax.setRequestHeader(<key>, <value>)

ajax.setRequestHeader(
  'Content-Type',
  'application/x-www-form-urlencoded'
);

ajax.send('key1=value1');
ajax.send(
  'key1=value1&key2=value2'
);
```

<h3>Aula 199</h3>

<h4>Testes</h4>

<b>BDD</b> - Behavior Driven Development, ou Desenvolvimento Guiado por Comportamento.

<h3>Aula 202</h3>

<h4>Testes</h4>

<b>TDD</b> - o processo funciona em ciclos pequenos e os requerimentos são escritos como casos de teste

<img src='https://walde.co/wp-content/uploads/2016/11/Screen-Shot-2016-11-08-at-10.36.43-PM.png'>

<b>chaijs</b>

<h3>Aula 203</h3>

<h4>Testes</h4>

<b>mochajs</b>

<b>Code coverage</b> - verificar o quanto de código esta coberto de teste

<h3>Aula 205</h3>

<b>Uglifyjs</b> 

<h3>Aula 207</h3>

<b>Sourcemaps</b>

<h3>Aula 209</h3>

<b>Padrões de código</b> 
  - http://jscs.info/
  - https://jshint.com/
  - https://eslint.org/
  - https://github.com/standard/standard
  - https://github.com/standard/semistandard