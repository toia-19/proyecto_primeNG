import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private coleccionUsuarios: AngularFirestoreCollection<Usuarios>
  
  constructor(private db:AngularFirestore) { 
    this.coleccionUsuarios = db.collection('usuarios');
  }
  
  obtenerUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
  }
}