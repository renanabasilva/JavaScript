const soma = (v1, v2) => { return v1 + v2 }

const nome = n => { return n }

const add = n => n + 10

console.log(add(10))


// ------------------------------

// Função normal:

const b = function (a) {
  return a + 100
}

// remove-se 'function'

const c = (a) => {
  return a + 100
}

//  remove-se chaves e return

const d = (a) => a + 100

// remove-se os parênteses

const e = a => a + 100      // ** Só se remove os parênteses se houver apenas um parâmetro
