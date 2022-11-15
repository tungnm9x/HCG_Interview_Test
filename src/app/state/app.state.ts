import { homeReducer, HomeState } from './home/home.reducer';

export interface AppState {
  home: HomeState;
}

export const appReducer = {
  home: homeReducer,
};
