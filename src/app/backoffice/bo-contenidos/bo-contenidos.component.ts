import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bo-contenidos',
	templateUrl: './bo-contenidos.component.html',
	styleUrls: ['./bo-contenidos.component.css']
})
export class BoContenidosComponent implements OnInit {
	public breadcrumbs: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.breadcrumbs = [{ "title": "Administración de contenidos" }]
	}

}
