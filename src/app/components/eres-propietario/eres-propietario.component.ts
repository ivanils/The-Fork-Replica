import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-eres-propietario',
  templateUrl: './eres-propietario.component.html',
  styleUrls: ['./eres-propietario.component.scss']
})
export class EresPropietarioComponent implements OnInit {

  opciones : Array<Propietario>=[]

  constructor(
    private aplicacionService : AplicacionService
  ) {
    this.opciones = aplicacionService.opciones
   }
  ngOnInit(): void {
  }

}
