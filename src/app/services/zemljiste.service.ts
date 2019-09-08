import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Zemljiste } from '../models/zemljiste';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ZemljisteService {

  apiURL: string = 'http://localhost:8083/api/zemljiste';
  dataChange: Zemljiste[];

  constructor(private httpClient: HttpClient) {}

public createZemljiste(Zemljiste: Zemljiste): Observable<Zemljiste> {
	return this.httpClient.post<Zemljiste>(`${this.apiURL}`, Zemljiste).pipe(
		tap((Zemljiste: Zemljiste) => console.log(`added Zemljiste w/ id=${Zemljiste.id}`)),
		catchError(this.handleError<Zemljiste>('addZemljiste'))
	);
}

public updateZemljiste(Zemljiste: Zemljiste): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${Zemljiste.id}`, Zemljiste).pipe(
	tap(_ => console.log(`updated Zemljiste id=${Zemljiste.id}`)),
	catchError(this.handleError<any>('updateZemljiste'))
  );
}

public deleteZemljiste(id: number): Observable<Zemljiste> {
	return this.httpClient.delete<Zemljiste>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted Zemljiste id=${id}`)),
      catchError(this.handleError<Zemljiste>('deleteZemljiste'))
	);
}

public getZemljiste (id: number) : Observable<Zemljiste> {
  return this.httpClient.get<Zemljiste>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched Zemljiste id=${id}`)),
	  catchError(this.handleError<Zemljiste>(`getZemljiste id=${id}`))
  );
}

public getZemljistes() : Observable<Zemljiste[]>{
  return this.httpClient.get<Zemljiste[]>(`${this.apiURL}/`).pipe(
	  tap(Zemljiste => console.log('Fetch Zemljistes')),
	  catchError(this.handleError('getZemljistes', []))
  );
}

public getZemljisteByNamenaZem (namena: number) : Observable<Zemljiste[]> {
  return this.httpClient.get<Zemljiste[]>(`${this.apiURL}/namenaZem/${namena}`).pipe(	  
    tap(KoefZem => console.log('Fetch Zemljiste for namena zem')),
  catchError(this.handleError('Zemljiste for namena zem', []))
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
