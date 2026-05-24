
import { Component, OnInit, inject, signal } from '@angular/core';
import { catchError, filter, of } from 'rxjs';
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { NgIf } from '@angular/common';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

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

  updateTodoItem(updatedTodo: Todo) {
    this.todoItems.update((todos) =>
      todos.map((todo) =>
        todo.id === updatedTodo.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }

}
