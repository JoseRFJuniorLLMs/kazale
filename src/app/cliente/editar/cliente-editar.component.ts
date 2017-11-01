/**
 * Componente de edição de cliente.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { Cliente, ClienteService } from '../shared';

@Component({
	selector: 'kz-cliente-editar',
	templateUrl: './cliente-editar.component.html',
	styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

	private id: number;
	private cliente: Cliente;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param ClienteService clienteService
	 */
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private clienteService: ClienteService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.cliente = this.clienteService.buscarPorId(this.id);
	}

	/**
	 * Método responsável por atualizar os dados de um cliente.
	 */
	atualizar() {
		this.clienteService.atualizar(this.id, this.cliente);
		this.router.navigate(['/clientes']);
	}
}