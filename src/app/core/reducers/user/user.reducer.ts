export interface UserState {
  name: string;
  secondName: string;
}

export const initialState: UserState = {
  name: null,
  secondName: null
};

export function userReducer(state: UserState = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
