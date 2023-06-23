const numeros = Array(6).fill(1).map((x, y) => x + y)

function choice(array) {
    let index = Math.floor(array.length * Math.random())
    return array[index]
}