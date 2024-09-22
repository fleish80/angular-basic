import { Component, inject } from '@angular/core';
import { JokeService } from '../services/joke/joke.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke.model';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private jokeService = inject(JokeService);
  joke$: Observable<Joke>;

  constructor() {
    this.loadAnotherJoke();
  }

  loadAnotherJoke() {
    this.joke$ = this.jokeService.getJoke();
  }

}
