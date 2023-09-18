import { Injectable } from '@angular/core';
import { Nota } from './nota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // App module
})
export class NotaService {
  private API_URL = 'https://note-keeper-api/api/notas';

  constructor(private http: HttpClient) {}

  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota): Observable<Nota> {
    const url = `${this.API_URL}/${nota.id}`;

    return this.http.put<Nota>(url, nota);
  }

  excluir(nota: Nota): Observable<any> {
    const url = `${this.API_URL}/${nota.id}`;

    return this.http.delete<Nota>(url);
  }

  selecionarPorId(id: number): Observable<Nota> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Nota>(url);
  }

  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API_URL);
  }
}
