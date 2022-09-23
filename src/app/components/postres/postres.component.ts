import { Component, OnInit } from '@angular/core';
import { Postres } from 'src/app/models/postres';
import { PostresService } from 'src/app/servicios/postres.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  coleccionPostres: Postres[] = [];

  constructor(private servicioPostres: PostresService) { }
  
  ngOnInit(): void {
    this.servicioPostres.obtenerPostres().subscribe(postres => this.coleccionPostres = postres)
  }
}
