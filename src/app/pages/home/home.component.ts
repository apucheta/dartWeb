import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';
import { ProyectosService } from 'src/app/services/firebase/proyectos.service';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProyectoInfoModalComponent } from './modales/proyecto-modal/proyecto-modal.component';

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
	private modalReference: NgbModalRef;

	public title = 'Dart | Diseño y arquitectura';
	public presupuestoFormGroup: FormGroup;
	public presupuestoTotal: number = 0;
	public currentYear: number = new Date().getFullYear();
	public galeria: Array<any> = [];
	public proyectos: Array<any> = [];
	
	constructor(
		private formBuilder: FormBuilder,
		private lightboxService: Lightbox,
		private galleryConfig: LightboxConfig,
		private proyectoService: ProyectosService,
		private firestorage: AngularFireStorage,
		private modalService: NgbModal
	) { }

	ngOnInit() {
		this.initPresupuestoForm();
		//this.initGaleria();
		this.obtenerProyectos();
	}

	obtenerProyectos() {
		this.proyectos = new Array<any>();
		this.proyectoService.obtenerProyectos().subscribe(response => {
			response.forEach(proyecto => {
				this.proyectoService.obtenerProyecto(proyecto.payload.doc.id).subscribe(_response => {
					_response.forEach(_proyecto => {
						let obraData = _proyecto.payload.doc.data();
						let storageReference = this.firestorage.ref(obraData.nombre);
						storageReference.listAll().subscribe(_response => {
							if (_response.items.length > 0) {
								let imagenes: Array<any> = [];
								_response.items.forEach(_imagenes => {
									_imagenes.getDownloadURL().then(_url => {
										let imagenNombre = _imagenes.name.split("_");
										imagenes.push({
											src: _url,
											caption: "&copy; Diseñart Constructora. " + obraData.nombre,
											name: imagenNombre[1]
										});
									});
								});
								this.proyectos.push({
									id: _proyecto.payload.doc.id,
									obraData: _proyecto.payload.doc.data(),
									imagenes: imagenes
								});
							} else {
								this.proyectos.push({
									id: _proyecto.payload.doc.id,
									obraData: _proyecto.payload.doc.data(),
									imagenes: []
								});
							}
						}, _error => {
							Swal.fire("Error inesperado", "Ocurrió un error inesperado obteniendo las imágenes. \n Contacte al administrador del sistema", "error");
						});
					});
				}, _error => Swal.fire('Se ha presentado un error inesperado.', 'No se pudo obtener la información de los proyectos debido a un error inesperado del sistema. \n Por favor contacte con el administrador del sistema.', 'error'));
			});
		}, _error => Swal.fire('Se ha presentado un error inesperado.', 'No se pudo obtener la información de los proyectos debido a un error inesperado del sistema. \n Por favor contacte con el administrador del sistema.', 'error'));
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

	abrirProyectoModal(proyecto: any) {
		this.modalReference = this.modalService.open(ProyectoInfoModalComponent, {
			centered: true,
			size: "xl"
		});

		this.modalReference.componentInstance.modalReference = this.modalReference;
		this.modalReference.componentInstance.proyecto = proyecto.obraData;
		this.modalReference.componentInstance.proyectoImagenes = proyecto.imagenes;
	}
}
