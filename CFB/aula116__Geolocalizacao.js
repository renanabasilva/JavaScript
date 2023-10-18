const long = document.querySelector("#long")
const lati = document.querySelector("#lati")

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)

}else{
  console.log('Geolocalização não suportada')
}

function mostrarLocalizacao(pos) {
  long.innerHTML = `Longitude: ${pos.coords.longitude}`
  lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function erroLocalizacao() {
  console.log('Erro ao obter a localização')
}