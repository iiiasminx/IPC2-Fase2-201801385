import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    const resultadoPost = [];
    for(const post of value){
      if(post.aux_nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post);
      }
      if(post.aux_apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post);
      }
      if(post.aux_email.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPost.push(post);
      }
      if(post.id_auxiliar.toString().indexOf(arg.toString()) > -1){
        resultadoPost.push(post);
      }

    }
    return resultadoPost;
  }

}
