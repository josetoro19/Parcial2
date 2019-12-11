import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibroEditComponent } from './libro-edit/libro-edit.component';
import { LibroListComponent } from './libro-list/libro-list.component';
const routes: Routes = [
  {
  path:'Agregar',
  component:LibroAddComponent
  },
  {
  path:'Editar/:id',
  component:LibroEditComponent
  },
  {
  path:'Consultar',
  component:LibroListComponent
  }
  ];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }