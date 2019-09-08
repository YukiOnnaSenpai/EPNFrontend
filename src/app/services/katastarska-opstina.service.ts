import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { KatastarskaOpstina } from '../models/katastarska-opstina';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class KatastarskaOpstinaService {

  apiURL: string = 'http://localhost:8083/api/katastarskaOpstina';
  dataChange: KatastarskaOpstina[];

  constructor(private httpClient: HttpClient) {}

public createKatastarskaOpstina(KatastarskaOpstina: KatastarskaOpstina): Observable<KatastarskaOpstina> {
	return this.httpClient.post<KatastarskaOpstina>(`${this.apiURL}`, KatastarskaOpstina).pipe(
		tap((KatastarskaOpstina: KatastarskaOpstina) => console.log(`added KatastarskaOpstina w/ id=${KatastarskaOpstina.id}`)),
		catchError(this.handleError<KatastarskaOpstina>('addKatastarskaOpstina'))
	);
}

public updateKatastarskaOpstina(KatastarskaOpstina: KatastarskaOpstina): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${KatastarskaOpstina.id}`, KatastarskaOpstina).pipe(
	tap(_ => console.log(`updated KatastarskaOpstina id=${KatastarskaOpstina.id}`)),
	catchError(this.handleError<any>('updateKatastarskaOpstina'))
  );
}

public deleteKatastarskaOpstina(id: number): Observable<KatastarskaOpstina> {
	return this.httpClient.delete<KatastarskaOpstina>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted KatastarskaOpstina id=${id}`)),
      catchError(this.handleError<KatastarskaOpstina>('deleteKatastarskaOpstina'))
	);
}

public getKatastarskaOpstina (id: number) : Observable<KatastarskaOpstina> {
  return this.httpClient.get<KatastarskaOpstina>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched KatastarskaOpstina id=${id}`)),
	  catchError(this.handleError<KatastarskaOpstina>(`getKatastarskaOpstina id=${id}`))
  );
}

public getKatastarskaOpstinas() : Observable<KatastarskaOpstina[]>{
  return this.httpClient.get<KatastarskaOpstina[]>(`${this.apiURL}/`).pipe(
	  tap(KatastarskaOpstina => console.log('Fetch KatastarskaOpstinas')),
	  catchError(this.handleError('getKatastarskaOpstinas', []))
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
