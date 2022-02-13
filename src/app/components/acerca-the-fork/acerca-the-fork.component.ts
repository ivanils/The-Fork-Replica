import { Component, OnInit } from '@angular/core';
import { Enlaces } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-acerca-the-fork',
  templateUrl: './acerca-the-fork.component.html',
  styleUrls: ['./acerca-the-fork.component.scss']
})
export class AcercaTheForkComponent implements OnInit {

  linksAcerca : Array<Enlaces> = []

  constructor(
    private aplicacionService : AplicacionService
  ) {
    this.linksAcerca = aplicacionService.linksAcerca
   }
  ngOnInit(): void {
  }

}
