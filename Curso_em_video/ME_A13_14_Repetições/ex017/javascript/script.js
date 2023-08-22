function tabuada(){
    var num = document.getElementById('inum')
    var res = document.getElementById('res')
    var tabuada = document.getElementById('tabuada')
    var n = Number(num.value)
    if (num.value == ''){
        alert('[ERRO] Digite um número')
    }else {
        res.innerHTML = ''
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            res.innerHTML += `${n} * ${c} = ${n * c}<br>`            
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }   
    }         
}                