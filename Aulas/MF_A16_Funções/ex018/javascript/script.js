var n = []
var num = document.getElementById('inum')
var bot = document.getElementById('bot')
num.addEventListener('keyup', function(event){
    if (event.key === 'Enter'){
        event.preventDefault()
        bot.click()
    }
})

num.focus()

function adicionar(){    
    var caixa = document.getElementById('caixa')
    var res = document.getElementById('res')
    if (num.value == '' || num.value > 100 || num.value < 1 || n.includes(Number(num.value))) {
        alert('[ERRO] Valor inválido ou já encontrado na lista')
        num.select()
    }else {
        res.innerHTML = ''
        n.push(Number(num.value))      
        let item = document.createElement('option')  
        item.text  = `Valor ${num.value} adicionado.`        
        caixa.appendChild(item)
        num.focus()
        num.value = ''
    }
} 

function calcular(){    
    if (n == ''){
        alert('[ERRO] Adicione valores antes de finalizar!')
        num.focus()
    } else {
        //totnum total de valores cadastrados
        res.innerHTML += `<p>Ao todo, temos ${n.length} números cadastrados.</p>`
        //maival maior valor
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...n)}.</p>`
        //menval menor valor
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...n)}.</p>`
        //somval soma dos valores
        var somval = n.reduce((accumulator, currentValue) => accumulator + currentValue);
        res.innerHTML += `<p>Somando todos os valores, temos ${somval}.</p>`
        //medval média dos valores
        var medval = somval / n.length
        res.innerHTML += `<p>A média dos valores digitados é ${medval}.</p>`
    }
}

function limpar(){
    n = []  
    res.innerHTML = ''
    caixa.innerHTML = ''
    num.focus()
}

animate 
