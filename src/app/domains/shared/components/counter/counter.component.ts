import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    //TODO: before render
    //TODO: solo corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChange) {
    //TODO: before and during render
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }
  ngOnInit() {
    //TODO: after render
    //TODO: solo corre una vez
    //TODO: async, then, subs
    console.log('ngOnInit');
    console.log('duration =>', this.duration);

    console.log('message =>', this.message);
    console.log('-'.repeat(10));
  }

  ngAfterViewInit() {
    //TODO:   after render
    //TODO: pregunta si los hijos del componente ya fueron render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
