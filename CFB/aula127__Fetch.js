const texto = document.querySelector('#texto')
const endpoint = 'aula127__Fetch.txt'

fetch(endpoint)
  .then(res => res.text())
  .then(res => {
    res = JSON.parse(res);
    console.log(res);
    console.log(res.nome);
    console.log(res.curso);
});