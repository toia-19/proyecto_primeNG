import { Injectable } from '@angular/core';
import { Postres } from '../models/postres';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostresService {
  private coleccionPostres: AngularFirestoreCollection<Postres>

  constructor(private db: AngularFirestore) {
    this.coleccionPostres = db.collection("postres");
  }

  obtenerPostres(){
    return this.coleccionPostres.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}
