import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  title = 'Menubar';
  // Menu
  items: MenuItem[] = [];
  
  // Usuario y Admin
  coleccionUsuarios: Usuarios[] = [];
  adminVisible = false;

  // Muestra el Formulario
  modalVisible : boolean = false;

  constructor(private servicioUsuarios: UsuariosService) { }

  // Formulario de Usuarios
  Usuarios = new FormGroup({
    nombreUser: new FormControl ('', Validators.required),
    contrasenaUser: new FormControl ('', Validators.required)
  })

  showModalDialog() {
    this.modalVisible = true;
  }

  mostrar(){
    this.verificarUsuario();
  }

  // Verifica que el nombre de usuario y contraseña sean válidos
  verificarUsuario(){
    this.coleccionUsuarios.forEach(usuario => {
      if(this.Usuarios.valid){
        if(usuario.nombreUser === this.Usuarios.value.nombreUser!){
          if(usuario.contrasenaUser === this.Usuarios.value.contrasenaUser!){
            alert ("Se ha iniciado sesión correctamente.");
            this.adminVisible=true;
            this.ngOnInit()
          }else{
            alert ("La contraseña no es correcta.");
          }
        }
        else{
          alert ("Alguno de los datos es incorrecto.");
        }
      }else{
        alert("Los campos se encuentran vacíos.");
      }
      this.modalVisible = false;
      this.Usuarios.reset();
    });
  }

  // Menu e Items
  ngOnInit():void{
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        routerLink: "/inicio"
      },
      {
        label: "Contacto",
        icon: "pi pi-phone",
        routerLink: "/contacto"
      },
      {
        label: "Secciones",
        icon: "pi pi-list",
        items: [
          {
            label: "Panadería",
            icon: "",
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
        ]
      },
      {
        label: "Admin",
        icon: "pi pi-user",
        routerLink: "/admin"
      }
    ];
    this.servicioUsuarios.obtenerUsuarios().subscribe(usuarios => this.coleccionUsuarios = usuarios);
  }
}
