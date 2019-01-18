import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // needed http symbols
import { MessageService } from './message.service';
import { toDoItem } from './toDoItem';
import { Observable, throwError, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private todoListURl = 'api/toDo';

  constructor(private http: HttpClient, private messageService: MessageService) { 
    
  }
  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

  // getToDo list
  getItems(): Observable<toDoItem[]> {
      return this.http.get<toDoItem[]>(this.todoListURl).pipe(
      tap(_ => this.log('fetched ToDo Items')),
      catchError(this.handleError('getItems', []))
    );
  }



    /** ERROR HANDLING
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
  }



}
