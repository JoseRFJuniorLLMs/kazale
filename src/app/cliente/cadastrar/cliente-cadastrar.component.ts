/**
 * Componente de cadastro de clientes.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Cliente, ClienteService } from '../shared';

@Component({
	selector: 'kz-cliente-cadastrar',
	templateUrl: './cliente-cadastrar.component.html',
	styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent implements OnInit {

	private cliente: Cliente;

	/**
	 * Construtor.
	 *
	 * @param Router router
	 * @param ClienteService clienteService
	 */
	constructor(
		private router: Router, 
		private clienteService: ClienteService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.cliente = new Cliente();
	}

	/**
	 * Método responsável por cadastrar um novo cliente.
	 */
	cadastrar() {
		this.cliente.id = new Date().getTime();
		this.clienteService.cadastrar(this.cliente);
		this.router.navigate(['/clientes']);
	}
}