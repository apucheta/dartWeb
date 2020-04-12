import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public isMenuOpen: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	closeMenu() {
		this.isMenuOpen = false;
	}
}
