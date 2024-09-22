import { Component, inject } from '@angular/core';
import { JokeStoreBasicService } from '../services/joke-store-basic/joke-store-basic.service';

@Component({
  standalone: true,
  imports: [ ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private jokeStoreBasicService = inject(JokeStoreBasicService);
  joke = this.jokeStoreBasicService.joke;
  loading = this.jokeStoreBasicService.loading;
  error = this.jokeStoreBasicService.error;

  loadAnotherJoke() {
    this.jokeStoreBasicService.loadJoke();
  }

}
