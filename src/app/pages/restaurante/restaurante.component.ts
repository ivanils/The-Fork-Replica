import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {
//  Traer info del servicio
  infoRestaurante : any 
// Variables de eventos

  // Slider
    numeroImagenes  : number = 0
    mover           : number = 0
    
  // Medidas seguridad
    botonSeguridad  : boolean = false

  // Tabs selección
    tabs            : number = 0
    arrayInfo       : Array<any> = []
    
// Crear calendario
  arraySemana     : Array<string> = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
  meses           : Array<any> = [
    {
        ano : 2022,
        mes : 'Enero',
        dias : 31
    },   
    {
        ano : 2022,
        mes : 'Febrero',
        dias : 28
    },  
    {
        ano : 2022,
        mes : 'Marzo',
        dias : 31
    },  
    {
        ano : 2022,
        mes : 'Abril',
        dias : 30
    },  
    {
        ano : 2022,
        mes : 'Mayo',
        dias : 31
    },  
    {
        ano : 2022,
        mes : 'Junio',
        dias : 30
    },  
    {
        ano : 2022,
        mes : 'Julio',
        dias : 31
    },  
    {
        ano : 2022,
        mes : 'Agosto',
        dias : 31
    },  
    {
        ano : 2022,
        mes : 'Septiembre',
        dias : 30
    },  
    {
        ano : 2022,
        mes : 'Octubre',
        dias : 31
    },  
    {
        ano : 2022,
        mes : 'Noviembre',
        dias : 30
    },  
    {
        ano : 2022,
        mes : 'Diciembre',
        dias : 31
    }
                    ]
  dias            : Array<any> = []
  // Variables eventos Calendario
    posicion        : number = 2
    numeroMeses     : number = this.meses.length

  constructor(
    private activatedRoute : ActivatedRoute,
    private bbddService    : AplicacionService,
    ) {}
    
    ngOnInit(): void {
      this.activatedRoute.params.subscribe( ( { url } ) => { 
        this.infoRestaurante = this.bbddService.listaRestaurantes.find( cadaRestaurante => cadaRestaurante.enlace === url)
        this.numeroImagenes = this.infoRestaurante.imagenes.length
        this.arrayInfo = this.infoRestaurante.detalles
      })
      this.numero()
    }

  // Métodos para eventos

    // Slider
    tamanoSlider() : string {
      return `calc(100% * ${this.numeroImagenes})`
    }
    tamanoImagen() : string {
      return `calc(100% / ${this.numeroImagenes})` 
    }
    aumentarMover() : void {
      this.mover++
      if(this.mover >= this.numeroImagenes){
        this.mover = 0
      }
    }
    disminuirMover() : void {
      this.mover--
      if( this.mover < 0){
        this.mover = (this.numeroImagenes - 1)
      }
    }
    cambiarMover(posicion : number) : void {
      this.mover = posicion
    }
    valorTranslate() : string {
      return `translatex( ${this.mover * (- 100 / this.numeroImagenes)}%)`
    }

    // Medidas de Seguridad
    cambiarBoton() : void {
      this.botonSeguridad = !this.botonSeguridad
    }

    // Tabs
    cambiarTabs(posicion : number) : void {
      this.tabs = posicion
    }

    // Calendario
    tamanoSliderMes() : string {
      return `calc(100% * ${this.numeroMeses})`
    }
    tamanoMes() : string {
      return `calc(100% / ${this.numeroMeses})`
    }
    translateMes() : string {
      return `translateX( ${this.posicion * (- 100 / this.numeroMeses)}%)`
    }
    aumentarPosicion() : void {
      this.posicion++
      if(this.posicion >= this.meses.length){
        this.posicion = 0
      }
    }
    disminuirPosicion() : void {
      this.posicion--
      if( this.posicion < 0){
        this.posicion = (this.meses.length - 1)
      }
    }
  
  // Método días calendario
  numero() : void {
    this.meses.forEach(  (mes, i) => {
      if( i == this.posicion){
        for(let dia = 1; dia < mes.dias + 1 ; dia++) {
          this.dias.push(dia)
        }
      }
    })
  }
}
