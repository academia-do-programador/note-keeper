import { Categoria } from './categoria';

export class Nota {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;

  categoriaId: number;
  categoria?: Categoria;

  constructor(
    titulo: string,
    conteudo: string,
    categoriaId: number,
    tema: Tema,
    id?: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.categoriaId = categoriaId;
    this.tema = tema;
  }
}

type Tema = 'info' | 'warning' | 'danger' | 'dark';
