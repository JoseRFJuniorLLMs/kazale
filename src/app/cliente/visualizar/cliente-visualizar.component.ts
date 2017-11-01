/**
 * Componente de visualização de cliente.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente, ClienteService } from '../shared';

@Component({
	selector: 'kz-cliente-visualizar',
	templateUrl: './cliente-visualizar.component.html',
	styleUrls: ['./cliente-visualizar.component.css']
})
export class ClienteVisualizarComponent implements OnInit {

	private id: number;
	private cliente: Cliente;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param ClienteService clienteService
	 */
	constructor(
		private route: ActivatedRoute, 
		private clienteService: ClienteService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.cliente = this.clienteService.buscarPorId(this.id);
	}
}