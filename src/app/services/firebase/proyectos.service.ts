import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class ProyectosService {

	constructor(
		private firestore: AngularFirestore
	) { }

	/* Obtiene el contenido de un proyecto específic.
		@params 
		zonaProyecto -> El nombre de la zona en la que se ubica el proyecto.
		nombreProyecto -> El nombre del proyecto.
	*/
	obtenerProyecto(zonaProyecto: string, nombreProyecto: string) {
		return this.firestore.collection(zonaProyecto).doc(nombreProyecto)
	}
}
