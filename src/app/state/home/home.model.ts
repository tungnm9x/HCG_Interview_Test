export interface ResultItem {
  name: string;
  url: string;
}

export interface GetListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: ResultItem[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndice[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: PokeType[];
  past_types: PastType[];
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: any;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface PokeType {
  type: {
    name: string;
  };
}
export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface Ability {}
export interface Form {}
export interface GameIndice {}
export interface HeldItem {}
export interface Species {}

export interface PastType {}
export interface Stat {}
export interface Move {}

// ITEMS

export interface Attribute {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  language: Language2;
  text: string;
  version_group: VersionGroup;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  generation: Generation;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface Name {
  language: Language3;
  name: string;
}

export interface ItemSprite {
  default: string;
}

export interface ItemDetail {
  attributes: Attribute[];
  baby_trigger_for?: any;
  category: Category;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect?: any;
  fling_power?: any;
  game_indices: GameIndice[];
  held_by_pokemon: any[];
  id: number;
  machines: any[];
  name: string;
  names: Name[];
  sprites: ItemSprite;
}
