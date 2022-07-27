import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { FooterComponent } from './footer/footer.component';
import { ConfiteriaComponent } from './confiteria/confiteria.component';
import { PanaderiaComponent } from './panaderia/panaderia.component';
import { PostresComponent } from './postres/postres.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    MenuprincipalComponent,
    FooterComponent,
    ConfiteriaComponent,
    PanaderiaComponent,
    PostresComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
