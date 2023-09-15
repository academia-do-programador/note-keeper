import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from 'src/app/models/nota';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root', // App module
})
export class NotaService {
  private NOTAS_API_URL = 'http://localhost:3000/notas';
  private CATEGORIAS_API_URL = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {}

  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.NOTAS_API_URL, nota);
  }

  editar(nota: Nota): Observable<Nota> {
    const url = `${this.NOTAS_API_URL}/${nota.id}`;

    return this.http.put<Nota>(url, nota);
  }

  excluir(nota: Nota): Observable<any> {
    const url = `${this.NOTAS_API_URL}/${nota.id}`;

    return this.http.delete<Nota>(url);
  }

  selecionarPorId(
    id: number,
    incluirCategorias: boolean = false
  ): Observable<Nota> {
    let url = '';

    if (incluirCategorias)
      url = `${this.NOTAS_API_URL}/${id}?_expand=categoria`;
    else url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.get<Nota>(url);
  }

  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.NOTAS_API_URL);
  }

  selecionarNotasPorCategoria(categoria: Categoria): Observable<Nota[]> {
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas`;

    return this.http.get<Nota[]>(url);
  }
}
