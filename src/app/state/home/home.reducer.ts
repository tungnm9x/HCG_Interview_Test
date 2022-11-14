import { Pokemon } from './home.model';

export interface HomeState {
  pokemons: Pokemon[];
  videoUrls: string[];
}
