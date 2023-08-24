// Arrow functions herdam o valor de 'this' do escopo superior.

function aluno(nome, nota) {
  this.nome = nome
  this.nota = nota

  this.dados_anonimo = function () {    // Não funciona pois a função anônima tem seu próprio escopo para o this
    setTimeout(function () {
      console.log(this.nome)
      console.log(this.nota)
    }, 2000);
  }

  this.dados_arrow = function () {
    setTimeout(() => {
      console.log(this.nome)
      console.log(this.nota)
    }, 2000);
  }
}

const aluno1 = new aluno('Renan', 100)
aluno1.dados_anonimo()
aluno1.dados_arrow()

