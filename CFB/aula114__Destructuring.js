// Array

let a, b, c, d

[a, b, c, d] = ['verde', 'amarelo', 'azul', 'branco']
[a, b, c, d] = [10, 20, 30, 40]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Distribuir um array em variáveis

let numeros = [11, 22, 33, 44]

let [e, f, g, h] = numeros

console.log(e)
console.log(f)
console.log(g)
console.log(h)

let [i = 0, j = 0, k = 0, l = 0] = [10]

console.log(i)
console.log(j)
console.log(k)
console.log(l)

let m = 11;     // Caso obrigatório do ; 
let n = 22;

[m, n] = [n, m]

console.log(m)
console.log(n)

// Objeto

let o, p, q, r

({o, p, q, r} = {o: 'verde', p: 'amarelo', q: 'azul', r: 'branco'})

// Obs: As propriedades do objeto tem de ser as mesmas que das variáveis

console.log(o)
console.log(p)
console.log(q)
console.log(r)

// Função

let numeros1 = () => {
  return [10, 20, 30, 40]
}

let [s, t, u, v] = numeros1()

console.log(numeros1())

console.log(s)
console.log(t)
console.log(u)
console.log(v)
