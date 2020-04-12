import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public title = 'Dart | Diseño y arquitectura';

	constructor() { }

	ngOnInit(): void {
	}
}
