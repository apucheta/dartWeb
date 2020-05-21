import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bo-home',
	templateUrl: './bo-home.component.html',
	styleUrls: ['./bo-home.component.css']
})
export class BoHomeComponent implements OnInit {
	public opened: boolean = true;
	public sidebarMode: string = "push";

	constructor(
		private router: Router
	) { }

	ngOnInit(): void {
		this.router.navigateByUrl("admin/usuarios");
	}

	toggleSidebar() {
		this.opened = !this.opened;
	}

}
