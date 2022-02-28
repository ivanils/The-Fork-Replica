import { Component, OnInit } from '@angular/core';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  palabrabusqueda : string = ""
  lugarbusqueda : string = ""
  restaurantes : any = []
  touched : boolean = false

  constructor(
    private aplicacionService : AplicacionService
  ) { 
    //Para usar SIN la API
    this.restaurantes = aplicacionService.listaRestaurantes
    
    //Para usar CON la API
    // this.aplicacionService.getListaRestaurantes().subscribe((data : any)=>{
    //   this.restaurantes = data
    // })
  }

  ngOnInit(): void {
  }

  inputTocado() : void {
    this.touched = !this.touched
  }
}
