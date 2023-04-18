function contar(){
    var inicio = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipas')
    var ni = Number(inicio.value)
    var nf = Number(fim.value)
    var np = Number(passo.value)
    if (inicio.value == '' || fim.value == ''){
        alert('Impossível contar, insira um valor.')
    }else {
        if (np == 0){
            alert('Passo inválido! Considerando PASSO 1')
            np = 1
        }
        res.innerHTML = 'Contando: <br>'
        if (ni > nf){
            for (var c = ni; c >= nf; c -= np){
            res.innerHTML += `${c} &#x1F449; `         
            }
        } else {
            for (var c = ni; c <= nf; c += np){
            res.innerHTML += `${c} \u{1F449} `
            } 
        } 
        res.innerHTML += (`&#x1F3C1; ✌`)        
    }   
}                