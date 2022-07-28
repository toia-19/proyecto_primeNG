import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  title = 'Menubar';

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit():void{
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: "/inicio"
      },
      {
        label: "Contacto",
        icon: "pi pi-user",
        routerLink: "/contacto"
      },
      {
        label: "Panadería",
        icon: "croissant-icon",
        routerLink: "/panaderia"
      },
      {
        label: "Confitería",
        icon: "",
        routerLink: "/confiteria"
      },
      {
        label: "Postres",
        icon: "",
        routerLink: "/postres"
      }
    ];
  }
}
