import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { finalize, tap } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';

@Component({
	selector: 'app-galeria',
	templateUrl: './galeria.component.html',
	styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
	@Input() modalReference: NgbModalRef;
	@Input() proyecto: any;

	public modalTitle: string;
	public uploadTask: AngularFireUploadTask;
	public porcentaje: Observable<number>;
	public snapshot: Observable<any>;
	public descargaUrl: Observable<any>;
	public files: File[] = [];
	public isHovering: boolean;

	constructor(
		private storage: AngularFireStorage,
		private firestore: AngularFirestore
	) { }

	ngOnInit(): void {
		this.modalTitle = "Galería del proyecto: " + this.proyecto.obraData.nombre;
		this.obtenerImagenes();
	}

	obtenerImagenes() {}

	toggleHover(event: boolean) {
		this.isHovering = event;
	}

	onDrop(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			this.files.push(files.item(i));
		}
	}
	
	cerrarModal() {
		this.modalReference.close();
	}

}
