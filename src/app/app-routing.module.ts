import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoHomeComponent } from './backoffice/bo-home/bo-home.component';
import { BoUsersComponent } from './backoffice/bo-users/bo-users.component';
import { BoContenidosComponent } from './backoffice/bo-contenidos/bo-contenidos.component';
import { BoProyectosComponent } from './backoffice/bo-proyectos/bo-proyectos.component';
import { LoginComponent } from './backoffice/login/login.component';
import { CambioPwComponent } from './backoffice/cambio-pw/cambio-pw.component';

const routes: Routes = [
	{ 
		path: 'admin', 
		component: BoHomeComponent, 
		children: [
			{ 'path': 'usuarios', component: BoUsersComponent },
			{ 'path': 'contenidos', component: BoContenidosComponent },
			{ 'path': 'proyectos', component: BoProyectosComponent }
		]
	},
	{ path: 'login',pathMatch:'full', component: LoginComponent},
	{ path: 'cambiopw',pathMatch:'full', component: CambioPwComponent},
	{ path: '', pathMatch: 'full', component: BoHomeComponent},
  	{ path: '**', pathMatch: 'full', component: BoHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
