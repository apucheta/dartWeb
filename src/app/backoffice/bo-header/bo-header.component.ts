import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-bo-header',
	templateUrl: './bo-header.component.html',
	styleUrls: ['./bo-header.component.css']
})
export class BoHeaderComponent implements OnInit {
	@Input() breadcrumbs: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
	}

}
