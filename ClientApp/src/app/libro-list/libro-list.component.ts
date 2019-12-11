import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {
  libros:Libro[];
  constructor(private libroservice:LibroService)
  { }
  ngOnInit() {
  this.getAll();
  }
  getAll(){
  this.libroservice.getAll().subscribe(libros=>this.libros=libros);
  }
  Buscar='';
}
