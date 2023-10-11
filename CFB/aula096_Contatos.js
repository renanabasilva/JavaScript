import { contatos } from "./aula096_BancoContatos.js";

let contato = {
  getTodosContatos: function (){
    return contatos
  },
  getContato: function (i_cont){
    return contatos[i_cont]
  },
  addContato: function(novoContato, destinoDom){
    const cont = {
      nome: novoContato.nome,
      telefone: novoContato.telefone,
      email: novoContato.email,
    }
    contatos.push(cont)

    destinoDom.innerHTML = ''
    
    contatos.forEach((c) =>{
      const div = document.createElement('div')
      div.setAttribute("class", 'contato')
      const p_nome = document.createElement('p')
      const p_telefone = document.createElement('p')
      const p_email = document.createElement('p')
  
      p_nome.innerHTML = c.nome
      p_telefone.innerHTML = c.telefone
      p_email.innerHTML = c.email
      div.appendChild(p_nome)
      div.appendChild(p_telefone)
      div.appendChild(p_email)
      destinoDom.appendChild(div)
    })
  }
}

export default contato