import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = 'Renan';
cliente1.cpf = 11122233309;

const cliente1CC = new ContaCorrente();
cliente1CC.agencia = 1001;
cliente1CC.cliente = cliente1;
cliente1CC.depositar(500);

const cliente2 = new Cliente();
cliente2.nome = 'Julie';
cliente2.cpf = 88822233309;

const cliente2CC = new ContaCorrente();
cliente2CC.agencia = 1001;
cliente2CC.cliente = cliente2;

cliente1CC.transferir(200, cliente2CC)

console.log(cliente1CC);
console.log(cliente2CC);

