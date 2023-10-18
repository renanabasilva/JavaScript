// Um ciclo for, com apenas uma linha de comando, não é obrigatório o uso de chaves.
let i = null
for(i=0; i<10; i++)
  console.log(i)


console.log('----------------')
// 1° Situação do uso obrigatório do ponto e vírgula (semicolon):
// Em um ciclo for, onde não existe linha de comando, apenas a incrementação, é obrigatório o uso do ponto e virgula.

let j = null
for(j=0; j<20; j++);
console.log(j)


console.log('----------------')
// 2° Situação do uso obrigatório do ponto e vírgula (semicolon):
// Onde existe mais de uma instrução na mesma linha

let a = null; a = 0
console.log(a)


console.log('----------------')
// 3° Situação do uso obrigatório do ponto e vírgula (semicolon):
// Sempre que a próxima linha começar com colchetes [] ou parênteses ()

let nome = 'Robervaldo';
['A', 'R', 'R', 'A', 'Y'].forEach(l=>console.log(l))

let n1 = [1, 2]
let n2 = [3, 4];
[n1, n2].map(v=>console.log(v))

let n = null;
(n=99)
console.log(n)

let numeros = [10, 20, 30];
[n3, n4, n5] = numeros
console.log(n3)
console.log(n4)
console.log(n5)

// A mesma situação não ocorre para objetos, pois para desestruturação de objetos é necessário o uso de var, let ou const

let num = {
  n6:10,
  n7:20,
  n8:30
}

let {n6, n7, n8} = num

console.log(n6)
console.log(n7)
console.log(n8)

// No JS, toda e qualquer declaração deve ser terminada com ponto e vírgula, sendo assim, mesmo que o programador não digite o ponto e virgula o JS possui um mecanismo que faz a inserção automática "internamente" do ponto e vírgula.
// Nas especificações oficiais da linguagem podemos encontrar que o ponto é vírgula é inserido de forma automática em três casos:

// 1) Quando o programa, encontra um offending token. Offending token é algo que não é correto de acordo com a gramática de JS.

// 2) No fim do programa.

// 3) Quando um return, continue, break ou throw é encontrado e depois encontrar-se um LineTerminator e um restricted token, como um "}" chaves, o ponto e vírgula será inserido antes do restricted token.

// No caso do exemplo da aula, no final da linha 1 será inserido um ponto e vírgula automático porque na sequência vem o comando let da linha 2 que é considerado um offending token. Porém na linha 2 não será inserido um ponto e vírgula automático porque a instrução seguinte não se enquadra em nenhuma regra do JS, então o interpretador não entende que ao final da linha 2 é necessário o ponto e virgula.

// Por isso é necessário adicionar o ponto e vírgula manualmente.