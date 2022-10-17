import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PanaderiaService } from 'src/app/servicios/panaderia.service';
import { Panaderia } from 'src/app/models/panaderia';

import { ConfiteriaService } from 'src/app/servicios/confiteria.service';
import { Confiteria } from 'src/app/models/confiteria';

import { PostresService } from 'src/app/servicios/postres.service';
import { Postres } from 'src/app/models/postres';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Variables


  // Colecciones
  coleccionPanaderia: Panaderia[]=[];
  coleccionConfiteria: Confiteria[]=[];
  coleccionPostres: Postres[]=[];

  constructor(
    private servicioPanaderia: PanaderiaService,
    private servicioConfiteria: ConfiteriaService,
    private servicioPostres: PostresService
  ) { }

  // Sección Panadería
  Panaderia = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  //para eliminar
  // eliminarProducto(idproductos:string){
  //   return new Promise((resolve,reject)=>{
  //     try{
  //       const resp = this.coleccionPanaderia.doc(id).delete()
  //       resolve(resp)
  //     }
  //     catch(error){
  //       reject(error)
  //     }
  //   })
  // }

  // Sección Confitería
  Confiteria = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  // Sección Postres
  Postres = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.servicioPanaderia.obtenerPanaderia().subscribe(panaderia => this.coleccionPanaderia = panaderia),
    this.servicioConfiteria.obtenerConfiteria().subscribe(confiteria => this.coleccionConfiteria = confiteria),
    this.servicioPostres.obtenerPostres().subscribe(postres => this.coleccionPostres = postres)
  }
}
