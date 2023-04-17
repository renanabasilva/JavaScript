function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('iano')        
    var res = document.getElementById('res') 
    if (Number(fano.value) > ano || fano.value == 0){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade < 16){
                img.setAttribute('src', 'imagens/hcri.jpg')
            } else if (idade <60) {
                img.setAttribute('src', 'imagens/hadu.jpg')
            } else {
                img.setAttribute('src', 'imagens/hido.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade < 16){
                img.setAttribute('src', 'imagens/mcri.jpg')
            } else if (idade <60) {
                img.setAttribute('src', 'imagens/madu.jpg')
            } else {
                img.setAttribute('src', 'imagens/mido.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}