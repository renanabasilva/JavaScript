const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
  {
    rua: "R. Joseph Ladder",
    numero: 6969,
    apartamento: false,
    referência: "Do lado da farmácia",
}];
  
for (let chave in cliente) {
  let tipo = typeof cliente[chave]
  if (tipo === "object"){
    for (let chaveDentro in cliente[chave]){
      let tipoInterno = typeof cliente[chave][chaveDentro]
      if (tipoInterno === "object"){
        for (let chaveInterna in cliente[chave][chaveDentro] ){
          console.log(`O valor de chave: ${chave}, chaveDentro: ${chaveDentro}, chaveInterna: ${chaveInterna}, cliente: ${cliente[chave][chaveDentro][chaveInterna]}`)
        }
      } else {
        console.log(`O valor de ${chave} em ${chaveDentro} é ${cliente[chave][chaveDentro]}`)
      }
    }
  } else {
      console.log(`Valor de ${chave} é ${cliente[chave]}`);
  }
}


// let pessoa = {
//     nome: "João",
//     idade: 30,
//     endereco: {
//       rua: "Rua A",
//       numero: 123
//     }
//   };
  
//   for (let propriedade in pessoa) {
//     console.log(propriedade + ": " + pessoa[propriedade]);
  
//     if (propriedade === "endereco") {
//       for (let enderecoPropriedade in pessoa[propriedade]) {
//         console.log(enderecoPropriedade + ": " + pessoa[propriedade][enderecoPropriedade]);
//       }
//     }
//   }