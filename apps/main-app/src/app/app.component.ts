import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { JokeStoreBasicService } from '../services/joke-store-basic/joke-store-basic.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AsyncPipe, JsonPipe],
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
