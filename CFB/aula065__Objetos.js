const pessoa = {
  nome: "Renaba",
  curso: "javascript",
  aulas: {
    aula01: "Introdução",
    aula02: "Variáveis",
    aula03: "Condicional",
  },
}

const string_pessoa = '{"nome":"Renaba","curso":"javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const string_json_pessoa = JSON.stringify(pessoa)

const objeto_json_pessoa = JSON.parse(string_pessoa)

console.log(pessoa)
console.log(string_json_pessoa)
console.log(objeto_json_pessoa)