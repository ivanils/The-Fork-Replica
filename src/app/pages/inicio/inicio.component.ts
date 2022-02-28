import { Component, OnInit } from '@angular/core';
import { Sliders } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  slidersTop : Array<Sliders> = []
  slidersBot : Array<Sliders> = []

  constructor(
    private aplicacionService : AplicacionService
  ) { 
    //Para usar SIN la API
    this.slidersTop = aplicacionService.slidersTop
    this.slidersBot = aplicacionService.slidersBot
  }
  ngOnInit(): void {
    // Para usar CON la API
    /*this.aplicacionService.getSlidersTop().subscribe((data : any)=>{
      this.slidersTop = data
    })
    this.aplicacionService.getSlidersBot().subscribe((data : any)=>{
      this.slidersBot = data
    })*/
  }

}
