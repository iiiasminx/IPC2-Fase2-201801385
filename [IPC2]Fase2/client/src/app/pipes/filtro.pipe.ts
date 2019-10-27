import { Pipe, PipeTransform } from '@angular/core';
import { AuxiliaresService } from '../services/auxiliares.service';
import { Auxiliar } from '../models/auxiliar';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  transform(value: any, ...arg: any[]): any {
    const resultPosts = [];
    for(const post of value){
      if( post.nombre.indexOf(arg) > -1){
          console.log('chi');
      }
    }

  }

}
