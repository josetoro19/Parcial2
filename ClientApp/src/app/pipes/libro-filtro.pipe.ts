import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libroFiltro'
})
export class LibroFiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '') return value;
    const filterPost = [];
    for(const post of value ){
      if(post.titulo.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
        filterPost.push(post);
      }
    }
    return filterPost;
  }
}