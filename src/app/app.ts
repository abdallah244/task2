import {
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    NgClass,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('task3');

  name = signal('Abdallah');
  today = signal(new Date());
  price = signal(1500);

  items = signal(['cloth', 'accessory', 'any thing']);
  showPrice = signal(true);

  counter = signal(0);

  increment() {
    this.counter.update((count) => count + 1);
  }
}
