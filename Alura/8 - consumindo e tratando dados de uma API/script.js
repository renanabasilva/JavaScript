const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() { 
  try{
    const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();
    
    videos.forEach(video => {
      if(video.categoria == ""){
        throw new Error('Video não tem categoria');
      }
      containerVideos.innerHTML += `
        <li class="videos__item">
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
        <img class="img-canal" src="${video.imagem} alt="logo do canal""/>
        <h3 class="titulo-video">${video.titulo}</h3>
        <p class="titulo-canal">${video.descricao}</p>
        </div>
        </li>
      `;
    })
  } catch(error){
    containerVideos.innerHTML = `<p>Erro ao carregar os vídeos: ${error}</p>`;
  } 
  // finally {
  //   alert("Isso sempre acontece")
  // }
}

buscarEMostrarVideos();

// const api = fetch("http://localhost:3000/videos")
// .then(res => res.json())
// .then(videos =>
//   videos.forEach(video => {
//     containerVideos.innerHTML += `
//     <li class="videos__item">
//     <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
//     <div class="descricao-video">
//     <img class="img-canal" src="${video.imagem} alt="logo do canal""/>
//     <h3 class="titulo-video">${video.titulo}</h3>
//     <p class="titulo-canal">${video.descricao}</p>
//     </div>
//     </li>
//     `;
//   })
// )
// .catch(error => {
//   containerVideos.innerHTML = `<p>Erro ao carregar os vídeos: ${error}</p>`;
// })
  
//   let promise = new Promise((resolve, reject) => {
//     // código assíncrono aqui
//     if (/* tudo ocorreu bem */) {
//         resolve("funcionou!");
//     } else {
//         reject("houve um erro");
//     }
// });