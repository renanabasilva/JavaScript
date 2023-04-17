function verificar(){
    var agora = new Date()
    var ano = agora.getUTCFullYear()
    var nasc = document.getElementById('iano')        
    var txt = document.getElementById('res') 
    var imagem = document.getElementById('img') 
    var sex = document.querySelector('input[name="sexo"]:checked')            
    var nsc = Number(nasc.value)        
    if (nsc > ano || nsc == 0 || !sex){
        window.alert('ERRO! Verifique os dados e tente novamente.')
        return
    } else {1
        var idade = ano - nsc
        var prin = document.getElementsByTagName('main')[0]
        txt.innerHTML = `Detectamos ${sex.value} com ${idade} anos.`
        if (idade <=16 && sex.value == 'Homem'){
            txt.innerHTML += 'juvenal'
            imagem.style.backgroundImage = 'url(imagens/hcri.jpg)'
        } else if (idade <=16 && sex.value == 'Mulher'){
            txt.innerHTML += 'jovena'      
            imagem.style.backgroundImage = 'url(imagens/mcri.jpg)'          
        }else if (idade <=60 && sex.value == 'Homem'){
            txt.innerHTML += 'Adulto'
            imagem.style.backgroundImage = 'url(imagens/hadu.jpg)'
        }else if (idade <=60 && sex.value == 'Mulher'){
            txt.innerHTML += 'Adulta'
            imagem.style.backgroundImage = 'url(imagens/madu.jpg)'
        } else if (sex.value == 'Homem') {
            txt.innerHTML += 'velho'
            imagem.style.backgroundImage = 'url(imagens/hido.jpg)'
        }else {
            txt.innerHTML += 'velha'
            imagem.style.backgroundImage = 'url(imagens/mido.jpg)'
        }
        prin.style.height= '420px'
    }            
}