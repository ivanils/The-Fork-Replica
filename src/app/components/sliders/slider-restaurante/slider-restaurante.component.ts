import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Tarjetainfo } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-slider-restaurante',
  templateUrl: './slider-restaurante.component.html',
  styleUrls: ['./slider-restaurante.component.scss']
})
export class SliderRestauranteComponent implements OnInit {

  moverSlider: number = 0
  numeroTarjetas: number = 0
  vecesSlide: number = 0
  width: number = 0

  @Input() titulo     : string = ''
  @Input() cuantosVeo : number = 4
  @Input() contenidos : Array<Tarjetainfo> = []
  @Input() tipoSlider : string = ''


  @HostListener('window:resize', ['$event'])
  onResize(event : any) : void {

    this.width = event.target.innerWidth
    
    if((this.width < 900) && (this.tipoSlider != 'x-s')){
      this.cuantosVeo = 3
    }else{
      this.cuantosVeo = 4
    }
    if((this.width < 700) && (this.tipoSlider != 'x-s')){
      this.cuantosVeo = 2
    }else{
      this.cuantosVeo = 3
    }

    if((this.width > 900) && (this.tipoSlider == 'large')){
      this.cuantosVeo = 3
    }
    if((this.width > 900) && (this.tipoSlider == 'small')){
      this.cuantosVeo = 4
    }
    if((this.width > 900) && (this.tipoSlider == 'x-s')){
      this.cuantosVeo = 6
    }

    this.calcularProps()
  }
  @HostListener('window:load', ['$event'])
  onLoad(event : any) : void {
    

    if((innerWidth < 900) && (this.tipoSlider != 'x-s')){
      this.cuantosVeo = 3
    }else{
      this.cuantosVeo = 4
    }
    
    if((innerWidth < 700) && (this.tipoSlider != 'x-s')){
      this.cuantosVeo = 2
    }else{
      this.cuantosVeo = 3
    }
    
    if((innerWidth > 900) && (this.tipoSlider == 'large')){
      this.cuantosVeo = 3
    }else if((innerWidth > 900) && (this.tipoSlider == 'small')){
      this.cuantosVeo = 4
    }else if((innerWidth > 900) && (this.tipoSlider == 'x-s')){
      this.cuantosVeo = 6
    }

    this.calcularProps()
  }
  
  constructor() { }
  ngOnInit(): void {
    this.calcularProps()
  }
  
  calcularProps() : void {
    this.numeroTarjetas = this.contenidos.length
    this.vecesSlide = (this.numeroTarjetas / this.cuantosVeo)
  }

  tamanoSlider(): string {
    return `calc(100%*${this.vecesSlide})`
  }
  anchoTarjeta(): string {
    return `calc(100%/${this.numeroTarjetas})`
  }
  aumentarMoverSlider(): void {
    this.moverSlider++
    if (this.moverSlider >= this.vecesSlide) {
      this.moverSlider = 0
    }
  }
  disminuirMoverSlider(): void {
    this.moverSlider--
    if (this.moverSlider = 0) {
      this.moverSlider = (this.moverSlider - 1)
    }
  }
  valorTranslate(): string {
    return `translateX(${this.moverSlider * - 100 / this.vecesSlide}%)`
  }

}
