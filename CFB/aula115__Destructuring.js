let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let [a, b, c, ...d] = numeros     // Os valores restantes serão inseridos na variável 'd'

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj = {nome: 'Renan', idade: '33'}

let {nome, idade} = obj
// As variáveis precisam ter o mesmo nome que as keys do objeto

console.log(nome)
console.log(idade)

const cores = () => {
  return ['verde', 'amarelo', 'azul', 'branco']
}

let [c1, c2,, c3] = cores()   // Inserir uma virgula a mais, faz a desestruturação pular uma atribuilção.
// Ao invés de atribuir azul a variável c3, foi atribuido a cor branco

console.log(c1)
console.log(c2)
console.log(c3)

let texto = 'Curso de javascript'

let [t] = texto.split(' ')

console.log(t)

let [...u] = texto.split(' ')

console.log(u)

let [p1, p2, p3] = texto.split(' ')

console.log(p1)
console.log(p2)
console.log(p3)