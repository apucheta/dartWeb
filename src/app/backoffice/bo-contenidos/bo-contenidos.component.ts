import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/services/firebase/contenido.service';

@Component({
	selector: 'app-bo-contenidos',
	templateUrl: './bo-contenidos.component.html',
	styleUrls: ['./bo-contenidos.component.css']
})
export class BoContenidosComponent implements OnInit {
	public breadcrumbs: Array<any> = [];
	public contenidos: Array<any> = [];

	constructor(
		private contenidoService: ContenidoService
	) { }

	ngOnInit(): void {
		this.breadcrumbs = [{ "title": "Administración de contenidos" }]
		this.obtenerContenidos();
	}

	obtenerContenidos() {
		this.contenidoService.obtenerContenidos().subscribe(response => {
			response.forEach(_contenido => {
				this.contenidos.push({
					id: _contenido.payload.doc.id,
					data: _contenido.payload.doc.data()
				})
			})

			console.log(this.contenidos)
		});
	}

}
