
import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    HeaderComponent,
    WaveAudioComponent,
    HighlightDirective
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changesDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }
  changesMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
