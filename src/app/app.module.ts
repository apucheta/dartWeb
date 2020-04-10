import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './pages/calculo/calculo.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcasComponent } from './pages/marcas/marcas.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    HomeComponent,
    MarcasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'calculo', component: CalculoComponent },
      { path: 'marcas', component: MarcasComponent },
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
