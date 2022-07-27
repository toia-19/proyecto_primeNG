import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { PostresComponent } from './components/postres/postres.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    InicioComponent,
    ContactoComponent,
    PanaderiaComponent,
    ConfiteriaComponent,
    PostresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
