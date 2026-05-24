import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true

})
export class FilterTodosPipe implements PipeTransform {
  transform(value: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return value;
    }
    const text = searchTerm.toLowerCase();
    return value.filter((todo) => todo.title.toLowerCase().includes(text)); 
  }
}
