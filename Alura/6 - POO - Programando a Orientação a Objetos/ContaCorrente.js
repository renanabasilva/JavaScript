import { Cliente } from "./Cliente.js";

export class ContaCorrente {


  // Atributos

  static numeroDeContas = 0;
  agencia;
  #cliente;
  #saldo = 0;


  // Acessores

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }


  // Construtores

  constructor(agencia, cliente) {
    ContaCorrente.numeroDeContas += 1;
    this.agencia = agencia;
    this.cliente = cliente;   // this.cliente é referência ao acessor cliente da classe, que faz a validação.
  }


  // Métodos

  sacar(valor) {
    if (this.#saldo < valor) return
    this.#saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) return
    this.#saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
