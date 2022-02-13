import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaTheForkComponent } from './acerca-the-fork/acerca-the-fork.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EresPropietarioComponent } from './eres-propietario/eres-propietario.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NuevaTarjetaComponent } from './nueva-tarjeta/nueva-tarjeta.component';
import { SliderRestauranteComponent } from './sliders/slider-restaurante/slider-restaurante.component';
import { AppRoutingModule } from '../app-routing.module';
import { PropositosComponent } from './propositos/propositos.component';
import { SliderCardComponent } from './sliders/slider-card/slider-card.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    AcercaTheForkComponent,
    BuscadorComponent,
    ComoFuncionaComponent,
    EresPropietarioComponent,
    FooterComponent,
    HeaderComponent,
    NuevaTarjetaComponent,
    SliderRestauranteComponent,
    PropositosComponent,
    SliderCardComponent
  ],
  exports: [
    AcercaTheForkComponent,
    BuscadorComponent,
    ComoFuncionaComponent,
    EresPropietarioComponent,
    FooterComponent,
    HeaderComponent,
    NuevaTarjetaComponent,
    SliderRestauranteComponent,
    PropositosComponent,
    SliderCardComponent
  ], 
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
