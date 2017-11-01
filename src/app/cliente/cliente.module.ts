/**
 * Arquivo de configuração do módulo.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
	ClienteCadastrarComponent,
	ClienteEditarComponent,
	ClienteListarComponent,
	ClienteVisualizarComponent,
	ClienteService
} from './';

import { SharedModule } from '../shared';

@NgModule({
	imports: [ 
		RouterModule,
		SharedModule
	],
	declarations: [
		ClienteCadastrarComponent,
		ClienteEditarComponent,
		ClienteListarComponent,
		ClienteVisualizarComponent
	],
	providers: [
		ClienteService
	]
})
export class ClienteModule {}
