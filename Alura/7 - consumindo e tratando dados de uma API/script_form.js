const btnPesquisar = document.querySelector("#btnPesquisar")

btnPesquisar.addEventListener("click", (event)=>{
  event.preventDefault()

  const inputCEP = document.querySelector("#cep")
  const cepVal = inputCEP.value
  const url = `https://viacep.com.br/ws/${cepVal}/json/`

  fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
      if (data.erro){
        alert("CEP não encontrado.")
        return
      } else 
        atribuirCampos(data)})
    .catch(erro => alert('Formato de CEP inválido!'))
    .finally(mensagem => console.log('processamento concluido!'));
})

const atribuirCampos = (data) =>{
  const rua = document.querySelector("#rua")
  const complemento = document.querySelector("#complemento")
  const bairro = document.querySelector("#bairro")
  const cidade = document.querySelector("#cidade")
  const estado = document.querySelector("#estado")

  rua.value = data.logradouro
  complemento.value = data.complemento
  bairro.value = data.bairro  
  cidade.value = data.localidade
  estado.value = data.uf
}