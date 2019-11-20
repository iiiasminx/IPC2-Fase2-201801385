import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.tick_fecha.toString().indexOf(arg.toString()) > -1 || 
      post.tick_asunto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.tick_estado.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.tick_contenido.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
