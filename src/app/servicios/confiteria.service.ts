import { Injectable } from '@angular/core';
import { Confiteria } from '../models/confiteria';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfiteriaService {
  private coleccionConfiteria: AngularFirestoreCollection<Confiteria>

  constructor(private db: AngularFirestore) {
    this.coleccionConfiteria = db.collection("confiteria");
  }

  obtenerConfiteria(){
    return this.coleccionConfiteria.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}
