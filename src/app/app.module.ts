import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

// Páginas
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { PostresComponent } from './components/postres/postres.component';
import { FooterComponent } from './components/footer/footer.component';

// Componentes
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

// Servicios
import { UsuariosService } from './servicios/usuarios.service';
import { PanaderiaService } from './servicios/panaderia.service';
import { ConfiteriaService } from './servicios/confiteria.service';
import { PostresService } from './servicios/postres.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    InicioComponent,
    AdminComponent,
    ContactoComponent,
    PanaderiaComponent,
    ConfiteriaComponent,
    PostresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AccordionModule,
    MenubarModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule
  ],
  providers: [UsuariosService, ConfiteriaService, PanaderiaService, PostresService], // patentación de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
