import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.select('count');
  }

  increment(): void {
    // TODO: Dispatch an increment action
  }

  decrement(): void {
    // TODO: Dispatch a decrement action
  }

  reset(): void {
    // TODO: Dispatch a reset action
  }

}
