import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  http = inject(HttpClient);

  getTodosFromAPI() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
