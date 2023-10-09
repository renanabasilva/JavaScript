const numero = document.querySelector("#numero")
const btn_promessa = document.querySelector("#btn_promessa")

numero.innerHTML = "Aguardando..."

async function getActivity(){
  const url = 'https://www.boredapi.com/api/activity/'
  try {
    let responseServer = await fetch(url)
    let response = await responseServer.json()
    numero.innerHTML = `You could ${response.activity.toLowerCase()}`
  } catch(error){
    console.log(`Error: ${error}`)
  }
}

btn_promessa.addEventListener("click", (evt) => getActivity())
