import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InicioComponent } from './inicio/inicio.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProgramaDeYumsComponent } from './programa-de-yums/programa-de-yums.component';
import { CondicionesDeUsoComponent } from './condiciones-de-uso/condiciones-de-uso.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { BlogComponent } from './blog/blog.component';
import { TarjetaRegaloComponent } from './tarjeta-regalo/tarjeta-regalo.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { CiudadComponent } from './ciudad/ciudad.component';



@NgModule({
  declarations: [
    InicioComponent,
    RestauranteComponent,
    ContactoComponent,
    ProgramaDeYumsComponent,
    CondicionesDeUsoComponent,
    PrivacidadComponent,
    BlogComponent,
    TarjetaRegaloComponent,
    LoginComponent,
    CiudadComponent
  ],
  exports: [
    InicioComponent,
    RestauranteComponent,
    ContactoComponent,
    ProgramaDeYumsComponent,
    CondicionesDeUsoComponent,
    PrivacidadComponent,
    BlogComponent,
    TarjetaRegaloComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
