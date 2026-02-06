import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1); // UI auto update, zone.js नहीं
  }
}

