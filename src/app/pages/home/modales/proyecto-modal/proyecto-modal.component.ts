import { Component, OnInit, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/domain/Proyecto';

@Component({
	selector: 'app-proyecto-modal',
	templateUrl: './proyecto-modal.component.html',
	styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoInfoModalComponent implements OnInit {
	@Input()  modalReference: NgbModalRef;
	@Input() proyecto: Proyecto;

	constructor() { }

	ngOnInit(): void {
	}

	get tieneSuperficies() {
		return (this.proyecto.superficie.cubierta != 0 || this.proyecto.superficie.semicubierta != 0 || this.proyecto.superficie.pileta != 0);
	}

	get tieneLocales() {
		return (
			this.proyecto.locales.estar != 0 ||
			this.proyecto.locales.comedor != 0 ||
			this.proyecto.locales.cocina != 0 ||
			this.proyecto.locales.dormitorio != 0 ||
			this.proyecto.locales.vestidor != 0 ||
			this.proyecto.locales.estudio != 0 ||
			this.proyecto.locales.bano != 0 ||
			this.proyecto.locales.toilette != 0 ||
			this.proyecto.locales.lavadero != 0 ||
			this.proyecto.locales.baulera != 0 ||
			this.proyecto.locales.galeria != 0 
		)
	}

	cerrarModal() {
		this.modalReference.close();
	}
}
