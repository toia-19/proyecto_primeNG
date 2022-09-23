import { Injectable } from '@angular/core';
import { Panaderia } from '../models/panaderia';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanaderiaService {
  private coleccionPanaderia: AngularFirestoreCollection<Panaderia>

  constructor(private db: AngularFirestore) {
    // referencia a BD y se trae la colección
    this.coleccionPanaderia = db.collection("panaderia");
  }

  // Obtener productos de Panaderia
  obtenerPanaderia(){
    return this.coleccionPanaderia.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}
