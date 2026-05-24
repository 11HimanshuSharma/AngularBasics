import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  message = signal("Welcome to the home page!, i am coming from home page");

  keyUpHandler(event: KeyboardEvent) {
    console.log("user pressed a key", event);
  }
}
