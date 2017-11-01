/**
 * Serviço de gerenciamento de clientes.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */
 
import { Injectable } from '@angular/core';

import { Cliente } from './cliente.model';

@Injectable()
export class ClienteService {

	/**
	 * Retorna listagem de todos os clientes.
	 *
	 * @return Cliente[] clientes
	 */
	listarTodos(): Cliente[] {
		var clientes:string = sessionStorage['clientes'];
		return clientes ? JSON.parse(clientes) : [];
	}

	/**
	 * Cadastra um novo cliente.
	 *
	 * @param Cliente cliente
	 */
	cadastrar(cliente: Cliente): void {
		var clientes:Cliente[] = this.listarTodos();
		clientes.push(cliente);
		sessionStorage['clientes'] = JSON.stringify(clientes);
	}

	/**
	 * Retorna os dados de um cliente por id.
	 *
	 * @param number id
	 * @return Usuario cliente
	 */
	buscarPorId(id: number):Cliente {
		var clientes:Cliente[] = this.listarTodos();
		for (let cliente of clientes) {
			if (cliente.id == id) {
				return cliente;
			}
		}

		return new Cliente();
	}

	/**
	 * Atualiza os dados de um cliente.
	 *
	 * @param number id
	 * @param Cliente cliente
	 */
	atualizar(id: number, cliente: Cliente): void {
		var clientes:Cliente[] = this.listarTodos();
		for (var i=0; i<clientes.length; i++) {
			if (clientes[i].id == id) {
				clientes[i] = cliente;
			}
		}

		sessionStorage['clientes'] = JSON.stringify(clientes);
	}

	/**
	 * Remove um cliente.
	 *
	 * @param number id
	 */
	excluir(id: number): void {
		var clientes:Cliente[] = this.listarTodos();
		var clientesFinal:Cliente[] = [];

		for (let cliente of clientes) {
			if (cliente.id != id) {
				clientesFinal.push(cliente);
			}
		}

		sessionStorage['clientes'] = JSON.stringify(clientesFinal);
	}

	/**
	 * Retorna listagem parcial de clientes.
	 *
	 * @param number pagina
	 * @param number qtdPorPagina
	 * @return Cliente[] clientes
	 */
	listarParcial(pagina: number, qtdPorPagina: number): Cliente[] {
		let storage: string = sessionStorage['clientes'];
		let clientes: Cliente[] = storage ? JSON.parse(storage) : [];

		let clientesParcial: Cliente[] = [];
		for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
			if (i >= clientes.length) {
				break;
			}
			clientesParcial.push(clientes[i]);
		}

		return clientesParcial;
	}

	/**
	 * Retorna o total de pessoas.
	 *
	 * @return number total de registros
	 */
	totalRegistros(): number {
		return this.listarTodos().length;
	}
}
