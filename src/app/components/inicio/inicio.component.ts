import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Inicio';

  images: GalleriaModule[] = [];
    
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        imagen: "../Imágenes/panaderia1.jpg"
      },
      {
        imagen: "src/Imágenes/panaderia2.jpg"
      }
    ]
  }
}
