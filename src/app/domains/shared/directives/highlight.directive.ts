import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  element = inject(ElementRef);
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
