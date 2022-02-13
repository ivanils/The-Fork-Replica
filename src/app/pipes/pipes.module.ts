import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaPipe } from './busqueda.pipe';


@NgModule({
  declarations: [
    BusquedaPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BusquedaPipe
  ]
})
export class PipesModule { }
