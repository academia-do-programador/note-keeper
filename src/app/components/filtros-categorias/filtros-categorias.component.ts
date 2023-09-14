import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-filtros-categorias',
  templateUrl: './filtros-categorias.component.html',
  styleUrls: ['./filtros-categorias.component.css'],
})
export class FiltrosCategoriasComponent {
  @Input({ required: true }) categorias: Categoria[] = [];
}
