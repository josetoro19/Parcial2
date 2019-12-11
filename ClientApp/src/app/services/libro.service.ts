import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Libro } from '../models/libro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class LibroService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.baseUrl + 'api/Libro', libro, httpOptions).pipe(
      tap((newLibro: Libro) => this.log(`added NewLibro w/ id=${newLibro.id}`)),
      catchError(this.handleError<Libro>('addLibro'))
    );
  }

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + 'api/Libro').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Libro[]>('getAll', []))
    );
  }

  get(id: number): Observable<Libro> {
    const url = `${this.baseUrl + 'api/Libro'}/${id}`;
    return this.http.get<Libro>(url).pipe(
      tap(_ => this.log(`fetched libro id=${id}`)),
      catchError(this.handleError<Libro>(`getHero id=${id}`))
    );
  }

  /** PUT: update the Libro on the server */
  update(libro: Libro): Observable<any> {
    const url =

      `${this.baseUrl + 'api/Libro'}/${libro.id}`;
    return this.http.put(url, libro, httpOptions).pipe(
      tap(_ => this.log(`updated libro id=${libro.id}`)),
      catchError(this.handleError<any>('libro'))
    );
  }

  /** DELETE: delete the libro from the server */
  delete(libro: Libro | number): Observable<Libro> {
    const id = typeof libro === 'number' ? libro : libro.id;
    const url =

      `${this.baseUrl + 'api/Libro'}/${id}`;

    return this.http.delete<Libro>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted libro id=${id}`)),
      catchError(this.handleError<Libro>('deleteLibro'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`LibroService: ${message}`);
  }

  
}
