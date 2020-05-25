import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ContenidoService } from './services/firebase/contenido.service';
import { ProyectosService } from './services/firebase/proyectos.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginComponent } from './backoffice/login/login.component';
import { MaterialModule } from "../app/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ProyectoModalComponent } from './backoffice/bo-proyectos/modales/proyecto-modal/proyecto-modal.component';
import { CambioPwComponent } from './backoffice/cambio-pw/cambio-pw.component';
import { ContenidoModalComponent } from './backoffice/bo-contenidos/modales/contenido-modal/contenido-modal.component';

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
		LoginComponent,
		ProyectoModalComponent,
		CambioPwComponent,
		ContenidoModalComponent
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
		SidebarModule.forRoot(),
		AngularFireModule.initializeApp(environment.firebaseConfig, 'dart'),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		NgxDatatableModule, 
		MaterialModule,
		BrowserAnimationsModule,
		MatTabsModule
	],
	providers: [
		ContenidoService,
		ProyectosService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ProyectoModalComponent,
		ContenidoModalComponent
	]
})
export class AppModule { }
