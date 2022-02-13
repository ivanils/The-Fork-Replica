import { Component, Input, OnInit } from '@angular/core';
import { Tarjetainfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() tipo : string = 'restaurante'
  @Input() dato : Tarjetainfo = {
    tipo   : '',
    titulo : '',
    imagen : '',
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
