const objetos = document.querySelector("#objetos")

const computador = {
  cpu:'i9',
  ram:'64gb',
  hd:'2tb',
  info: function(){
    console.log(`CPU: ${this.cpu}`)
    console.log(`RAM: ${this.ram}`)
    console.log(`HD: ${this.hd}`)
  }
}

computador['monitor'] = '22 pol'
computador.placaVideo = 'RTX'
console.log(computador)

const computadores = [
  {
    cpu:'i9',
    ram:'64gb',
    hd:'2tb',
  },
  {
    cpu:'i7',
    ram:'32gb',
    hd:'2tb',
  
  },
  {
    cpu:'i5',
    ram:'16gb',
    hd:'1tb',
  
  }
]

// computador.info()
// console.log(computador)
// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach((c)=>{
  const div = document.createElement('div')
  div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd
  div.setAttribute('class', 'computador')
  objetos.appendChild(div)
})