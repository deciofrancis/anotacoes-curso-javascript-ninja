/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newarray = [1, 'teste', null, true, NaN];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function mayarray(newarray) {
  return newarray;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(mayarray(newarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newfunction(newarray, num) {
 return newarray[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newarrayfive = ['teste', 9, {x: 1}, null, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newfunction(newarrayfive, 0));
console.log(newfunction(newarrayfive, 1));
console.log(newfunction(newarrayfive, 2));
console.log(newfunction(newarrayfive, 3));
console.log(newfunction(newarrayfive, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(namelivro) {
 var livros = {
   'O Pequeno Príncipe': {
     quantidadePaginas: 96,
     autor: 'Antoine',
     editora: 'Éditions Gallimard'
   },
   'O Senhor do Anéis I': {
     quantidadePaginas: 468,
     autor: 'Tolkien',
     editora: 'George Allen & Unwin'
   },
   'O Hobbit': {
     quantidadePaginas: 310,
     autor: 'Tolkien',
     editora: 'George Allen & Unwin'
   }
 };
 
 if(!namelivro){
   return livros;
 }

 return livros[namelivro];

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro O Pequeno Príncipe tem ' + book('O Senhor do Anéis I').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Senhor do Anéis I é ' + book('O Senhor do Anéis I').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Hobbit foi publicado pela editora ' + book('O Pequeno Príncipe').autor);
