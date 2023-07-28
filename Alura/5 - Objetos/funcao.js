// const cliente = {
//   nome: "Joao",
//   idade: 24,
//   email: "joao@firma.com",
//   telefone: ["1155555550", "1144444440"],
// };

// cliente.enderecos = [
//   {
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934",
//   },
// ];

// cliente.enderecos.push({
//   rua: "R. Joseph Ladder",
//   numero: 404,
//   apartamento: false,
//   referencia: "Do lado da Farmácia"
// });

// const listaApenasApartamentos = cliente.enderecos.filter(
//   (endereco) => endereco.apartamento === true
// );

// console.log(cliente["enderecos"][0]["rua"])
// console.log("----------")
// console.log(listaApenasApartamentos);
// console.log("----------")
// console.log(cliente);

// const cliente = {
//   nome: "Joao",
//   idade: 24,
//   email: "joao@firma.com",
//   telefone: ["1155555550", "1144444440"],
//   saldo: 200,
//   efetuaPagamento: function (valor) {
//     if (valor > this.saldo) {
//       console.log("Saldo insuficiente");
//     } else {
//       this.saldo -= valor;
//       console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
//     }
//   },
// };

// cliente.efetuaPagamento(150);

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento