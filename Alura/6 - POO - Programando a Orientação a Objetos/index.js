import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Renan', 11122233309);
// cliente1.nome = 'Renan';   //sem função constructor
// cliente1.cpf = 11122233309;

const conta1 = new ContaCorrente(1001, cliente1);
// conta1.agencia = 1001;
// conta1.cliente = cliente1;

const cliente2 = new Cliente('Julie', 88822233309);
// cliente2.nome = 'Julie';
// cliente2.cpf = 88822233309;

const conta2 = new ContaCorrente(1005, cliente2);
// conta2.agencia = 1005;
// conta2.cliente = cliente2;
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Julie"
// conta2.cliente.cpf = 88822233309

let valor = 200;

conta1.depositar(500);
conta1.transferir(valor, conta2);

console.log(conta1.saldo);
console.log(conta2.cliente.cpf);
console.log(ContaCorrente.numeroDeContas);

