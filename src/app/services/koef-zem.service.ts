import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { KoefZem } from '../models/koef-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class KoefZemService {

  apiURL: string = 'http://localhost:8083/api/koefZem';
  dataChange: KoefZem[];

  constructor(private httpClient: HttpClient) {}

public createKoefZem(KoefZem: KoefZem): Observable<KoefZem> {
	return this.httpClient.post<KoefZem>(`${this.apiURL}`, KoefZem).pipe(
		tap((KoefZem: KoefZem) => console.log(`added KoefZem w/ id=${KoefZem.id}`)),
		catchError(this.handleError<KoefZem>('addKoefZem'))
	);
}

public updateKoefZem(KoefZem: KoefZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${KoefZem.id}`, KoefZem).pipe(
	tap(_ => console.log(`updated KoefZem id=${KoefZem.id}`)),
	catchError(this.handleError<any>('updateKoefZem'))
  );
}

public deleteKoefZem(id: number): Observable<KoefZem> {
	return this.httpClient.delete<KoefZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted KoefZem id=${id}`)),
      catchError(this.handleError<KoefZem>('deleteKoefZem'))
	);
}

public getKoefZem (id: number) : Observable<KoefZem> {
  return this.httpClient.get<KoefZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched KoefZem id=${id}`)),
	  catchError(this.handleError<KoefZem>(`getKoefZem id=${id}`))
  );
}

public getKoefZems() : Observable<KoefZem[]>{
  return this.httpClient.get<KoefZem[]>(`${this.apiURL}/`).pipe(
	  tap(KoefZem => console.log('Fetch KoefZems')),
	  catchError(this.handleError('getKoefZems', []))
  );
}

public getKoefZemByModelProcene (model: number) : Observable<KoefZem[]> {
  return this.httpClient.get<KoefZem[]>(`${this.apiURL}/modelProcene/${model}`).pipe(	  
    tap(KoefZem => console.log('Fetch KoefZem for model procene')),
  catchError(this.handleError('KoefZem for model procene', []))
  );
}

public getKoefZemByNamenaZem (namena: number) : Observable<KoefZem[]> {
  return this.httpClient.get<KoefZem[]>(`${this.apiURL}/namenaZem/${namena}`).pipe(	  
    tap(KoefZem => console.log('Fetch KoefZem for namena zem')),
  catchError(this.handleError('KoefZem for namena zem', []))
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
