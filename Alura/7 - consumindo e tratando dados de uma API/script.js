async function buscaEndereco(cep){
  const url = `https://viacep.com.br/ws/${cep}/json/`
  try{
    const consultaCEP = await fetch(url)
    const consultaCEPConvertida = await consultaCEP.json()
    if (consultaCEPConvertida.erro) {
      throw Error('CEP não existente!')
    }
    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
  } catch (erro) {
    console.log(erro)
  }
}

let ceps = ['01001000', '01001001', '01001002']
let conjuntoCeps = ceps.map( valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))