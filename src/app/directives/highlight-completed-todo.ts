import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  private el = inject(ElementRef);

  stylesEffect = effect(() => {
    const element = this.el.nativeElement;

    if (this.isCompleted()) {
      element.style.textDecoration = 'line-through';
      element.style.backgroundColor = '#d3f9d8';
      element.style.color = '#6c757d';
    } else {
      element.style.textDecoration = 'none';
      element.style.backgroundColor = '';
      element.style.color = '#000';
    }
  });
}
