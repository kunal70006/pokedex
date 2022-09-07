export interface PokemonDataProps {
  name: string
  abilities:
    | {
        ability: {
          name: string
        }
      }[]
    | null
  avatar: string | null
  baseExp: number | null
  weight: number | null
  types:
    | {
        type: {
          name: string
        }
      }[]
    | null
  stats:
    | {
        stat: {
          name: string
        }
        base_state: number
      }[]
    | null
}

export interface HomepageProps {
  pokemonData: PokemonDataProps[]
}
