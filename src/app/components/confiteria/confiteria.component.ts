import { Component, OnInit } from '@angular/core';
import { Confiteria } from 'src/app/models/confiteria';
import { ConfiteriaService } from 'src/app/servicios/confiteria.service';

@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.css']
})
export class ConfiteriaComponent implements OnInit {
  coleccionConfiteria: Confiteria[] = [];

  constructor(private servicioConfiteria: ConfiteriaService) { }
  
  ngOnInit(): void {
    this.servicioConfiteria.obtenerConfiteria().subscribe(confiteria => this.coleccionConfiteria = confiteria)
  }
}
