import { Component, OnInit } from '@angular/core';
import { Panaderia } from 'src/app/models/panaderia';
import { PanaderiaService } from 'src/app/servicios/panaderia.service';

@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.component.html',
  styleUrls: ['./panaderia.component.css']
})
export class PanaderiaComponent implements OnInit {
  coleccionPanaderia: Panaderia[] = [];

  constructor(private servicioPanaderia: PanaderiaService) { }
  
  ngOnInit(): void {
    this.servicioPanaderia.obtenerPanaderia().subscribe(panaderia => this.coleccionPanaderia = panaderia)
  }
}