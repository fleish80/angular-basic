import { HttpErrorResponse } from '@angular/common/http';
import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JokeService } from '../joke/joke.service';
import { Joke } from '../../models/joke.model';

interface State {
  joke: Joke | null;
  error: HttpErrorResponse | null;
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class JokeStoreBasicService {

  private jokeService = inject(JokeService);
  private destroyRef = inject(DestroyRef);
  private state = signal<State>({
    joke: null,
    error: null,
    loading: false,
  });

  constructor() {
    this.loadJoke();
  }

  joke = computed(() => this.state().joke);
  error = computed(() => this.state().error);
  loading = computed(() => this.state().loading);

  loadJoke() {
    this.state.update((s) => ({
     ...s,
      loading: true
    }));
    this.jokeService
      .getJoke()
      .pipe(
        tap({
          next: (joke) => {
            this.state.set({
              joke,
              loading: false,
              error: null
            });
          },
          error: (error: HttpErrorResponse) => {
            this.state.set({
              joke: null,
              loading: false,
              error
            });
          }
        }),
        catchError(() => EMPTY),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
