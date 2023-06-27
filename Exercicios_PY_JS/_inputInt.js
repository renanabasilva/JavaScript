function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function leiaInt(text){
    let value = 0
    while (true){
        let num = window.prompt(text)
        if (!isNaN(parseFloat(num)) && isFinite(num)){
            value = Number.parseInt(num)
            break
        } else {
            window.alert("Erro! Digite um número inteiro válido.")
        }
    }
    return value
}