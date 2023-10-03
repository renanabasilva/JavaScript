const cepVal = '01001000'
const url = `https://viacep.com.br/ws/${cepVal}/json/`

let consultaCEP = fetch(url)
  .then(resposta => resposta.json())
  .then(data => {
    if (data.erro){
      throw Error("Esse cep não existe!")
    } else 
      console.log(data)})
  .catch(erro => console.log(erro))
  .finally(mensagem => console.log('processamento concluido!'));

// console.log(consultaCEP);