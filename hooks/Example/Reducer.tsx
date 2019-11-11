import React from 'react';
export interface State {
  count: number;
}

export type Actions = "reset" | "increment" | "decrement";

export interface Action {
  type: Actions;
}

export const initialState: State = { count: 0 };

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;