
import { Component, OnInit, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromAPI()
      .pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([] as Array<Todo>);
      })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

}
