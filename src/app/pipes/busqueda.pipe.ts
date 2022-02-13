import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let [palabrabusqueda] = args

    let nuevoArray = value.filter((restaurante : any) => {
      return restaurante.titulo.toLowerCase().includes( palabrabusqueda.toLowerCase() )
    })
    
    return nuevoArray;
  }

}
