import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ElementProceneZem } from '../models/element-procene-zem';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ElementProceneZemService {

  apiURL: string = 'http://localhost:8083/api/elementProceneZem';
  apiURLForConnectedTable: string = 'http://localhost:8083/api/elementProceneZem/modelProcene';
  dataChange: ElementProceneZem[];

  constructor(private httpClient: HttpClient) {}

public createElementProceneZem(ElementProceneZem: ElementProceneZem): Observable<ElementProceneZem> {
	return this.httpClient.post<ElementProceneZem>(`${this.apiURL}`, ElementProceneZem).pipe(
		tap((ElementProceneZem: ElementProceneZem) => console.log(`added ElementProceneZem w/ id=${ElementProceneZem.id}`)),
		catchError(this.handleError<ElementProceneZem>('addElementProceneZem'))
	);
}

public updateElementProceneZem(ElementProceneZem: ElementProceneZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${ElementProceneZem.id}`, ElementProceneZem).pipe(
	tap(_ => console.log(`updated ElementProceneZem id=${ElementProceneZem.id}`)),
	catchError(this.handleError<any>('updateElementProceneZem'))
  );
}

public deleteElementProceneZem(id: number): Observable<ElementProceneZem> {
	return this.httpClient.delete<ElementProceneZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted ElementProceneZem id=${id}`)),
      catchError(this.handleError<ElementProceneZem>('deleteElementProceneZem'))
	);
}

public getElementProceneZem (id: number) : Observable<ElementProceneZem> {
  return this.httpClient.get<ElementProceneZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched ElementProceneZem id=${id}`)),
	  catchError(this.handleError<ElementProceneZem>(`getElementProceneZem id=${id}`))
  );
}

public getElementProceneZems() : Observable<ElementProceneZem[]>{
  return this.httpClient.get<ElementProceneZem[]>(`${this.apiURL}/`).pipe(
	  tap(ElementProceneZem => console.log('Fetch ElementProceneZems')),
	  catchError(this.handleError('getElementProceneZems', []))
  );
}

public getElementProceneZemByModelProcene (model: number) : Observable<ElementProceneZem[]> {
  return this.httpClient.get<ElementProceneZem[]>(`${this.apiURLForConnectedTable}/${model}`).pipe(	  
    tap(ElementProceneZem => console.log('Fetch ElementProceneZems for model procene')),
  catchError(this.handleError('getElementProceneZems for model procene', []))
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
