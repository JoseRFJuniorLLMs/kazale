/**
 * Arquivo de configuração de rotas.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Routes } from '@angular/router'; 

import { 
	ClienteListarComponent,
	ClienteCadastrarComponent,
	ClienteEditarComponent,
	ClienteVisualizarComponent
} from './';

export const ClienteRoutes: Routes = [
	{ path: 'clientes', redirectTo: 'clientes/listar' },
	{ path: 'clientes/listar', component: ClienteListarComponent }, 
	{ path: 'clientes/cadastrar', component: ClienteCadastrarComponent }, 
	{ path: 'clientes/editar/:id', component: ClienteEditarComponent },
	{ path: 'clientes/visualizar/:id', component: ClienteVisualizarComponent }
];
