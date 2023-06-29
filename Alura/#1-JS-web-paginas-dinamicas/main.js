const listaDeTeclas = document.querySelectorAll('.tecla'); 
let contador = 0;

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador++;
}
