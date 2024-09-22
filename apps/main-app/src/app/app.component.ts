import { Component, inject } from '@angular/core';
import { JokeStoreNgrxSignalsStore } from '../stores/joke-store-ngrx-signals/joke-store-ngrx-signals.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private jokeStoreNgrxSignalsStore  = inject(JokeStoreNgrxSignalsStore);
  joke = this.jokeStoreNgrxSignalsStore.joke;
  loading = this.jokeStoreNgrxSignalsStore.loading;
  error = this.jokeStoreNgrxSignalsStore.error;

  loadAnotherJoke() {
    this.jokeStoreNgrxSignalsStore.load();
  }

}
