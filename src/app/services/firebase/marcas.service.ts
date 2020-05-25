import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  obtenerMateriales(){
    return this.firestore.collection('Materiales').snapshotChanges();
  }

  obtenerMaterial(tipoMaterial: string) {
		return this.firestore.collection('Materiales').doc(tipoMaterial).collection('Articulos').snapshotChanges();
	}
}
