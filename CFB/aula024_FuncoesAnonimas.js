// São funções que não possuem um nome (não está instanciada)
// São executadas em tempo real, durante a execução do programa

const f = function (v1, v2) {
  return v1 + v2
}

const e = function (...valores) {
  let res = 0
  for (v of valores) {
    res += v
  }
  return res
}