import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/firebase/proyectos.service';

@Component({
	selector: 'app-bo-proyectos',
	templateUrl: './bo-proyectos.component.html',
	styleUrls: ['./bo-proyectos.component.css']
})
export class BoProyectosComponent implements OnInit {
	public breadcrumbs: Array<any> = [];
	public proyectos: Array<any> = [];

	constructor(
		private proyectoService: ProyectosService 
	) { }

	ngOnInit(): void {
		this.breadcrumbs = [{ "title": "Administración de proyectos" }]
		this.obtenerProyectos()
	}

	obtenerProyectos() {
		this.proyectoService.obtenerProyectos().subscribe(response => {
			response.forEach(proyecto => {
				let zona = proyecto.payload.doc.id;
				this.proyectoService.obtenerProyecto(proyecto.payload.doc.id).subscribe(_response => {
					_response.forEach(_proyecto => {
						this.proyectos.push({
							zona: zona,
							obra: _proyecto.payload.doc.id,
							obraData: _proyecto.payload.doc.data()
						});
					});
				});
			});
			console.log(this.proyectos);
		});
	}

}
