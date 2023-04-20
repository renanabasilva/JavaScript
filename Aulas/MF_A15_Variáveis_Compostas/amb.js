let num = [5, 8, 2, 9, 3]
num[3] = 6     /* o 6 substitui o 9*/
num.push(1)
num.sort()
console.log(num)
console.log(num.length)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos} ${num.indexOf(5)}`)
}