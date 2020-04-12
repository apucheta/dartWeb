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

registerLocaleData(localeEs, 'es-Ar');

@NgModule({
  	declarations: [
		AppComponent,
		CalculoComponent,
		HomeComponent,
		MarcasComponent,
		HeaderComponent,
		FooterComponent
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
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
