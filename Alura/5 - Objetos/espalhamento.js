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
];

// const chavesDoObjeto = Object.keys(cliente);

// console.log(chavesDoObjeto);

// if (!chavesDoObjeto.includes("enderecos")) {
//   console.error("Erro. É necessário ter um endereço cadastrado.");
// }

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);

// =============================================================================


const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro"
}
 
const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2"
}

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

// output:
// {
//   nome: 'Aragorn',
//   classe: 'guerreiro',
//   espada: 'Andúril',
//   capa: 'capa élfica +2'
// }