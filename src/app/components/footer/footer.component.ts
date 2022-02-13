import { Component, OnInit } from '@angular/core';
import { Enlaces } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer : Array<Enlaces> = []

  constructor(
    private aplicacionService : AplicacionService
  ) { 
    this.footer = aplicacionService.footer 
   }
  ngOnInit(): void {
  }


}
