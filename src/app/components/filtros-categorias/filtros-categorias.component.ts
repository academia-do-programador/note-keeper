import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-filtros-categorias',
  templateUrl: './filtros-categorias.component.html',
  styleUrls: ['./filtros-categorias.component.css'],
})
export class FiltrosCategoriasComponent {
  @Input({ required: true }) categorias: Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

  constructor() {
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas() {
    this.onFiltroSelecionado.emit(null);
  }

  selecionarComFiltro(categoria: Categoria) {
    this.onFiltroSelecionado.emit(categoria);
  }
}
