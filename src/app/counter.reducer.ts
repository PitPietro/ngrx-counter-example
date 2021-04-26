// define a reducer function to handle changes in the counter value based on the provided actions

import {Action, createReducer, on, ReducerTypes} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';
import {ActionReducer} from '@ngrx/store/src/models';

export const initialState = 0;

const myCountReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

// tslint:disable-next-line:typedef
export function counterReducer(state: any, action: any) {
  return myCountReducer(state, action);
}
