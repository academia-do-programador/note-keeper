import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-filtros-categorias',
  templateUrl: './filtros-categorias.component.html',
  styleUrls: ['./filtros-categorias.component.css'],
})
export class FiltrosCategoriasComponent {
  @Input({ required: true }) categorias: Categoria[] = [];

  @Output() filtroClicado: EventEmitter<Categoria | null>;

  constructor() {
    this.filtroClicado = new EventEmitter();
  }

  selecionarTodas() {
    this.filtroClicado.emit(null);
  }

  selecionarComFiltro(categoria: Categoria) {
    this.filtroClicado.emit(categoria);
  }
}
