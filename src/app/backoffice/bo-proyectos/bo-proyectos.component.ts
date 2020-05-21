import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bo-proyectos',
	templateUrl: './bo-proyectos.component.html',
	styleUrls: ['./bo-proyectos.component.css']
})
export class BoProyectosComponent implements OnInit {
	public breadcrumbs: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.breadcrumbs = [{ "title": "Administración de proyectos" }]
	}

}
