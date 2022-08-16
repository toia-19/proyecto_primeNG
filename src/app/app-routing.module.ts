import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';
import { PostresComponent } from './components/postres/postres.component';

const routes: Routes = [
  {
    path:'',component:InicioComponent
  },
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'contacto',component:ContactoComponent
  },
  {
    path:'panaderia',component:PanaderiaComponent
  },
  {
    path:'confiteria',component:ConfiteriaComponent
  },
  {
    path:'postres',component:PostresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
