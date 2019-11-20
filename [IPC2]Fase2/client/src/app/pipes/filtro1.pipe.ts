import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro1'
})
export class Filtro1Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.id_estudiante.toString().indexOf(arg.toString()) > -1 || 
      post.stud_nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.sec_nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.cur_nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.sec_horario.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      post.cur_year.toString().indexOf(arg.toString()) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
