import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Konto } from '../models/konto';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  apiURL: string = 'http://localhost:8083/api/konto';
  dataChange: Konto[];

  constructor(private httpClient: HttpClient) {}

public createKonto(Konto: Konto): Observable<Konto> {
	return this.httpClient.post<Konto>(`${this.apiURL}`, Konto).pipe(
		tap((Konto: Konto) => console.log(`added Konto w/ id=${Konto.id}`)),
		catchError(this.handleError<Konto>('addKonto'))
	);
}

public updateKonto(Konto: Konto): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${Konto.id}`, Konto).pipe(
	tap(_ => console.log(`updated Konto id=${Konto.id}`)),
	catchError(this.handleError<any>('updateKonto'))
  );
}

public deleteKonto(id: number): Observable<Konto> {
	return this.httpClient.delete<Konto>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted Konto id=${id}`)),
      catchError(this.handleError<Konto>('deleteKonto'))
	);
}

public getKonto (id: number) : Observable<Konto> {
  return this.httpClient.get<Konto>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched Konto id=${id}`)),
	  catchError(this.handleError<Konto>(`getKonto id=${id}`))
  );
}

public getKontos() : Observable<Konto[]>{
  return this.httpClient.get<Konto[]>(`${this.apiURL}/`).pipe(
	  tap(Konto => console.log('Fetch Kontos')),
	  catchError(this.handleError('getKontos', []))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
	};
}

}
