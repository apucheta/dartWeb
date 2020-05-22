import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './pages/calculo/calculo.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-AR";
import { HeaderComponent } from './pages/componentes/header/header.component';
import { FooterComponent } from './pages/componentes/footer/footer.component';
import { LightboxModule } from 'ngx-lightbox';
import { BoHomeComponent } from './backoffice/bo-home/bo-home.component';
import { SidebarModule } from "ng-sidebar";
import { BoUsersComponent } from './backoffice/bo-users/bo-users.component';
import { BoContenidosComponent } from './backoffice/bo-contenidos/bo-contenidos.component';
import { BoProyectosComponent } from './backoffice/bo-proyectos/bo-proyectos.component';
import { BoHeaderComponent } from './backoffice/bo-header/bo-header.component';
import { LoginComponent } from './backoffice/login/login.component';

registerLocaleData(localeEs, 'es-Ar');

@NgModule({
  	declarations: [
		AppComponent,
		CalculoComponent,
		HomeComponent,
		MarcasComponent,
		HeaderComponent,
		FooterComponent,
		BoHomeComponent,
		BoUsersComponent,
		BoContenidosComponent,
		BoProyectosComponent,
		BoHeaderComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([
		{ path: '', component: HomeComponent },
		{ path: 'calculo', component: CalculoComponent },
		{ path: 'marcas', component: MarcasComponent },
		]),
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		LightboxModule,
		SidebarModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
