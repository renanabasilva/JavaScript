class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;
  sacar(valor) {
    if (this.#saldo < valor) return
    this.#saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) return
    this.#saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nome = 'Renan';
cliente1.cpf = 11122233309;

const cliente1CC = new ContaCorrente();
cliente1CC.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nome = 'Julie';
cliente2.cpf = 88822233309;

const cliente2CC = new ContaCorrente();
cliente2CC.agencia = 1001;



cliente1CC.depositar(100);
const valorSacado = cliente1CC.sacar(42);

console.log(valorSacado);
console.log(cliente2);
