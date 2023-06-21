const numeros = Array(6).fill(1).map((x, y) => x + y)
var pares = []
var impares = []
for (let c of numeros){
    console.log(c)
    if (c % 2 == 0){
        pares.push(c)
        console.log(`${c} é par`)
    } else if (c % 2 == 1){
        impares.push(c)
        console.log(`${c} é impar`)
    }
}

console.log(numeros)
console.log(pares)
console.log(impares)