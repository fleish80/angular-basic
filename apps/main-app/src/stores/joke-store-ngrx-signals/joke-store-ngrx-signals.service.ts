import { HttpErrorResponse } from '@angular/common/http';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Joke } from '../../models/joke.model';
import { JokeService } from '../../services/joke/joke.service';
import { tapResponse } from '@ngrx/operators';

type State = {
  joke: Joke;
  error: HttpErrorResponse | null;
  loading: boolean;
}

export const JokeStoreNgrxSignalsStore = signalStore({ providedIn: 'root' },
  withState<State>({
    joke: {value: ''},
    error: null,
    loading: false,
  }),
  withMethods((store, jokeService = inject(JokeService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() => jokeService.getJoke().pipe(
          tapResponse(({
            next: (joke) =>
              patchState(store, {
                joke,
                error: null,
                loading: false,
              }),
            error: (error: HttpErrorResponse) =>
              patchState(store, {
                joke: {value: ''},
                error,
                loading: false,
              })
          })))
        )))
  })),
  withHooks({
    onInit({ load }) {
      load();
    }
  })
);
