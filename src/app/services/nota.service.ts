import { Injectable } from '@angular/core';
import { Nota } from '../models/nota';
import { HttpClient } from '@angular/common/http';
import { Observable, retryWhen } from 'rxjs';
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

  selecionarPorId(id: number): Observable<Nota> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.get<Nota>(url);
  }

  selecionarTodos(): Observable<Nota[]> {
    // not equals
    const url = `${this.NOTAS_API_URL}?arquivada=false`;

    return this.http.get<Nota[]>(url);
  }

  // categorias/1/notas
  selecionarNotasPorCategoria(categoria: Categoria): Observable<Nota[]> {
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas`;

    return this.http.get<Nota[]>(url);
  }
}
