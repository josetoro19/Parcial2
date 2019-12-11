import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.css']
})
export class LibroAddComponent implements OnInit {
  constructor(private libroService: LibroService) { }
  libro: Libro;
  ngOnInit() {
      this.libro = { id: 0, titulo: '', precioVenta: 0, popularidad: false };
  }
  add() {
      this.libroService.addLibro(this.libro)
          .subscribe(task => {
              alert('Se agrego una nuevo libro')
          });
  }
}
