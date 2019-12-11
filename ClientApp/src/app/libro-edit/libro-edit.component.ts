import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent implements OnInit {

  libro: Libro;
  slibro: string;
  constructor
    (
      private route: ActivatedRoute,
      private libroService: LibroService,
      private location: Location
    ) { }
  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('id');
    this.libroService.get(id)
      .subscribe(hero => this.libro = hero);
  }
  update(): void {
    this.libroService.update(this.libro)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.libroService.delete(this.libro)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
