import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITEMS } from './mock-todo-items';
import { ToDoItem } from './to-do-item';

const baseUrl = 'http://jsonplaceholder.typicode.com/todos';

@Injectable({
  // по умолчанию создается один экземпляр этой службы,
  // и по требованию внедряется в любой класс;
  // можно вместо root указать имя модуля,
  // вне которого внедрение будет недоступно
  providedIn: 'root'
})
export class TodoItemsService {

  constructor(private http: HttpClient) { }

  getItems(): ToDoItem[] {
    return ITEMS;
  }

  getRemoteItems(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
