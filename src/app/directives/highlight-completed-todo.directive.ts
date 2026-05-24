import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
  host: {
    '[class.todos__item--completed]': 'isCompleted()',
  },
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false, { alias: 'isCompleted' });
}