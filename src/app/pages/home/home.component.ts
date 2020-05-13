import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private valorCubierta: number = 100;
	private valorSemiCubierta:number = 100;
	private valorDescubierta: number = 355;
	private valorPiscina: number = 250;
	private valorDobleAltura: number = 300;

	public title = 'Dart | Diseño y arquitectura';
	public presupuestoFormGroup: FormGroup;
	public presupuestoTotal: number = 0;
	public currentYear: number = new Date().getFullYear();
	public galeria: Array<any> = [];
	
	constructor(
		private formBuilder: FormBuilder,
		private lightboxService: Lightbox,
		private galleryConfig: LightboxConfig
	) { }

	ngOnInit() {
		this.initPresupuestoForm();
		this.initGaleria();
	}

	initGaleria() {
		this.galleryConfig.centerVertically = true;
		this.galleryConfig.disableScrolling = true;
		this.galleryConfig.alwaysShowNavOnTouchDevices = true;

		for (let index = 1; index < 7; index++) {
			let imagePath = "/assets/img/galeria/galeria_" + index + ".jpg";
			let imageCaption = "&copy; Diseñart Constructora.";
			this.galeria.push({
				src: imagePath,
         		caption: imageCaption
			});
		};
	}

	abrirFoto(fotoIndex: number) {
		this.lightboxService.open(this.galeria, fotoIndex);
	}

	close() {
		this.lightboxService.close();
	}

	initPresupuestoForm() {
		this.presupuestoFormGroup = this.formBuilder.group({
			'cubierta': [''],
			'semiCubierta': [''],
			'descubierta': [''],
			'dobleAltura': [''],
			'piscina': ['']
		});
	}

	get presupuestoForm() {
		return this.presupuestoFormGroup;
	}

	calcularPresupuesto() {
		let montoCubierta = 0;
		let montoSemiCubierta = 0;
		let montoDescubierta = 0;
		let montoDobleAltura = 0;
		let montoPiscina = 0;

		if (this.presupuestoForm.get('cubierta').value != "")
			montoCubierta = this.presupuestoForm.get('cubierta').value * this.valorCubierta;
		
		if (this.presupuestoForm.get('semiCubierta').value != "")
			montoSemiCubierta = this.presupuestoForm.get('semiCubierta').value * this.valorSemiCubierta;
		
		if (this.presupuestoForm.get('descubierta').value != "")
			montoDescubierta = this.presupuestoForm.get('descubierta').value * this.valorDescubierta;
		
		if (this.presupuestoForm.get('dobleAltura').value != "")
			montoDobleAltura = this.presupuestoForm.get('dobleAltura').value * this.valorDobleAltura;
		
		if (this.presupuestoForm.get('piscina').value != "")
			montoPiscina = this.presupuestoForm.get('piscina').value * this.valorPiscina;

		this.presupuestoTotal = montoCubierta + montoSemiCubierta + montoDescubierta + montoDobleAltura + montoPiscina;
	}

	limpiarPresupuesto() {
		this.presupuestoTotal = 0;
	}
}
