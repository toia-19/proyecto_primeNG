import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Inicio';

  constructor() { }

  inicio: string[] = [
    "assets/Imágenes/inicio.jpeg",
    "assets/Imágenes/inicio1.jpg",
    "assets/Imágenes/inicio2.jpg",
    "assets/Imágenes/inicio3.jpg"
  ]

  ngOnInit(): void {
  }
}