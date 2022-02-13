import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { CondicionesDeUsoComponent } from './pages/condiciones-de-uso/condiciones-de-uso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { ProgramaDeYumsComponent } from './pages/programa-de-yums/programa-de-yums.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { TarjetaRegaloComponent } from './pages/tarjeta-regalo/tarjeta-regalo.component';



const routes : Routes = [
  { path: '',                   component : InicioComponent },
  { path: 'restaurante/:url',   component : RestauranteComponent },
  { path: 'oferta/:url',        component : BlogComponent },
  { path: 'contact',            component : ContactoComponent },
  { path: 'ciudad/:url',        component : CiudadComponent },
  { path: 'yums',               component : ProgramaDeYumsComponent },
  { path: 'condiciones-de-uso', component : CondicionesDeUsoComponent },
  { path: 'privacidad',         component : PrivacidadComponent },
  { path: 'tarjeta-regalo',     component : TarjetaRegaloComponent },
  { path: 'login',              component : LoginComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
