var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var texto = document.getElementById('txt')
var imagem = document.getElementById('img') 
var corpo = document.getElementsByTagName('body')[0]

// var hora = 18
if (hora < 5){
    imagem.style.backgroundImage = 'url(imagens/noite.jpg)'
    corpo.style.backgroundColor = '#484A49'
    var des = 'Boa madrugada.'
} else if (hora < 12) {
    imagem.style.backgroundImage = 'url(imagens/manha.jpg)'
    var des = 'Bom dia!'
} else if (hora <= 18){
    imagem.style.backgroundImage = 'url(imagens/tarde.jpg)'
    document.body.style.backgroundColor = '#AA7A64'
    var des = 'Boa tarde!'
} else {
    imagem.style.backgroundImage = 'url(imagens/noite.jpg)'
    document.body.style.backgroundColor = '#484A49'
    var des = 'Boa Noite!'
}

texto.innerHTML += `${hora} horas. ${des}`
